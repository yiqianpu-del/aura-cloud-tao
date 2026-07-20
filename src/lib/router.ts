/**
 * Smart Router — the deep module for site-wide visitor routing.
 *
 * Interface is deliberately small: callers only need a source label.
 * Behind the interface: per-source message templating, channel resolution,
 * fallback chains, and analytics tracking.
 *
 * Current adapter: WhatsApp (the only private-domain channel).
 * Designed to accept email, Telegram, etc. by adding a channel in config.
 */

import siteContent from '@/data/siteContent.json';

// ── Public interface ─────────────────────────────────────────────────

export interface RedirectOptions {
  /** Source page context (e.g. "services-ritual", "divination") */
  source?: string;
  /** Campaign type for analytics grouping */
  campaign?: 'cta' | 'banner' | 'minimal' | 'free-reading';
  /** Extra parameters to interpolate into the message template */
  extra?: Record<string, string>;
}

/**
 * Build a full redirect URL for the given source and options.
 *
 * Resolution chain (first match wins):
 *   1. Source-specific channel + message
 *   2. Campaign-specific channel + message
 *   3. Default channel + message
 *   4. Generic fallback
 */
export function getRedirectUrl(options: RedirectOptions = {}): string {
  const { source = 'default', campaign = 'cta', extra } = options;

  const config = getRoutingConfig();

  // Resolve what channel this source goes to, and what message to send
  const { text, channelName } = resolveSource(source, campaign, config);
  const channel = resolveChannel(channelName, config);

  // Build the destination URL
  const destination = buildDestination(channel, text, extra);

  // Fire-and-forget tracking
  trackClick({ source, campaign, destination, timestamp: Date.now() });

  return destination;
}

// ── Internal types ───────────────────────────────────────────────────

/** A resolved message entry from config: plain string (backward compat) or {text, channel?} */
type MessageEntry = string | { text: string; channel?: string };

interface RoutingConfig {
  defaultTarget: string;
  defaultChannel: string;
  channels: Record<string, ChannelEntry>;
  messages: Record<string, MessageEntry>;
}

interface ChannelEntry {
  type: string;
  target: string;
}

interface ChannelConfig {
  type: 'whatsapp' | 'email' | 'telegram' | 'url';
  target: string;
  }

// ── Config resolution ────────────────────────────────────────────────

function getRoutingConfig(): RoutingConfig {
  const rtg = (siteContent as any).routing;
  return {
    defaultTarget: rtg?.channels?.whatsapp?.target ?? siteContent.site.whatsapp ?? '+85256151619',
    defaultChannel: rtg?.defaultChannel ?? 'whatsapp',
    channels: rtg?.channels ?? {},
    messages: rtg?.messages ?? {},
  };
}

/** Extract the channel name and message text from a MessageEntry */
function parseEntry(entry: MessageEntry, defaultCh: string): { text: string; channelName: string } {
  if (typeof entry === 'string') {
    return { text: entry, channelName: defaultCh };
  }
  return { text: entry.text, channelName: entry.channel || defaultCh };
}

/**
 * Resolve which channel and message to use for a given source.
 * Falls back through: source → campaign → default.
 */
function resolveSource(
  source: string,
  campaign: string,
  config: RoutingConfig,
): { text: string; channelName: string } {
  // 1. Source-specific
  const direct = config.messages[source];
  if (direct != null) return parseEntry(direct, config.defaultChannel);

  // 2. Campaign-specific
  const campaignKey = `__campaign_${campaign}`;
  const campaignEntry = config.messages[campaignKey];
  if (campaignEntry != null) return parseEntry(campaignEntry, config.defaultChannel);

  // 3. Default
  const defaultEntry = config.messages['default'];
  if (defaultEntry != null) return parseEntry(defaultEntry, config.defaultChannel);

  // 4. Generic fallback
  return {
    text: `Hi, I'd like to learn more about your Taoist services (from: ${source}).`,
    channelName: config.defaultChannel,
  };
}

function resolveChannel(channelName: string, config: RoutingConfig): ChannelConfig {
  const entry = config.channels[channelName];
  if (entry && entry.type && entry.target) {
    return { type: entry.type as ChannelConfig['type'], target: entry.target };
  }
  // Fallback to WhatsApp
  return { type: 'whatsapp', target: config.defaultTarget };
}

function buildDestination(channel: ChannelConfig, message: string, extra?: Record<string, string>): string {
  const formatted = applyExtraParams(message, extra);

  switch (channel.type) {
    case 'whatsapp': {
      const clean = channel.target.replace(/^\+/, '');
      if (formatted) {
        return `https://wa.me/${clean}?text=${encodeURIComponent(formatted)}`;
      }
      return `https://wa.me/${clean}`;
    }

    case 'email': {
      const subject = encodeURIComponent('Inquiry from Sacred Tao Wisdom');
      const body = encodeURIComponent(formatted || '(no message)');
      return `mailto:${channel.target}?subject=${subject}&body=${body}`;
    }

    case 'telegram': {
      const clean = channel.target.replace(/^@/, '');
      if (formatted) {
        return `https://t.me/${clean}?text=${encodeURIComponent(formatted)}`;
      }
      return `https://t.me/${clean}`;
    }

    case 'url':
    default:
      return channel.target;
  }
}

// ── Message helpers ──────────────────────────────────────────────────

/**
 * Interpolate {{key}} placeholders in the message template with extra params.
 * Built-in placeholders: {{source}}, {{campaign}}, {{name}}, {{question}}.
 */
function applyExtraParams(message: string, extra?: Record<string, string>): string {
  let result = message;
  if (extra?.source) result = result.replace(/\{\{source\}\}/g, extra.source);
  if (extra?.campaign) result = result.replace(/\{\{campaign\}\}/g, extra.campaign);
  if (extra?.name) result = result.replace(/\{\{name\}\}/g, extra.name);
  if (extra?.question) result = result.replace(/\{\{question\}\}/g, extra.question);

  // Custom extra params
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (!['source', 'campaign', 'name', 'question'].includes(key)) {
        result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
      }
    }
  }

  // Clean up any unfilled placeholders
  result = result.replace(/\{\{[^}]+\}\}/g, '').trim();

  return result;
}

// ── Analytics (fire-and-forget) ──────────────────────────────────────

interface ClickEvent {
  source: string;
  campaign: string;
  destination: string;
  timestamp: number;
}

function trackClick(event: ClickEvent): void {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Router] Redirect:', event.source, '→', event.destination);
  }
  // Future: POST to /api/track
}
