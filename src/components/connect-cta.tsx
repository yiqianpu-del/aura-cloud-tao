import Link from 'next/link';

interface ConnectCtaProps {
  /** 引流来源标识（如服务页传 "service-karmic-release"，商城页传 "shop"） */
  source?: string;
  /** 标题（可选，组件会自动使用场景化标题） */
  title?: string;
  /** 副标题（可选） */
  subtitle?: string;
  /** 按钮文字（可选，默认 "Connect on WhatsApp"） */
  buttonText?: string;
  /** 变体：inline（内嵌）| banner（横幅大卡片）| minimal（紧凑） */
  variant?: 'inline' | 'banner' | 'minimal';
}

export default function ConnectCta({
  source = 'website',
  title,
  subtitle,
  buttonText = 'Connect on WhatsApp',
  variant = 'banner',
}: ConnectCtaProps) {
  const redirectUrl = `/api/redirect?from=${encodeURIComponent(source)}&campaign=cta`;

  // ── 默认文案 ──
  const defaultTitle = 'Speak with Master Chen Wei';
  const defaultSubtitle =
    'Not sure which ritual or talisman is right for you? Send a message — Master Chen will personally guide you.';

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  // ── Minimal 变体 ──
  if (variant === 'minimal') {
    return (
      <div className="border-t border-gray-200 pt-6 my-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-ink font-bold text-lg">{displayTitle}</p>
            <p className="text-sm text-gray-500 mt-1 max-w-md">{displaySubtitle}</p>
          </div>
          <a
            href={redirectUrl}
            className="btn btn-gold btn-sm whitespace-nowrap shrink-0"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }

  // ── Banner 变体 ──
  if (variant === 'banner') {
    return (
      <section className="my-12 md:my-16" aria-label="Connect with us">
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-ink to-gray-800 p-8 md:p-12">
          {/* Decorative accent */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3">
              {displayTitle}
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto">
              {displaySubtitle}
            </p>
            <a
              href={redirectUrl}
              className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3.5 font-bold text-sm tracking-wider uppercase hover:bg-gold/90 transition-colors rounded-sm"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {buttonText}
            </a>
            <p className="text-xs text-gray-500 mt-4">
              Free consultation &middot; Private &middot; No obligation
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ── Inline 变体（默认）──
  return (
    <div className="bg-cream border border-gold/20 rounded-sm p-6 md:p-8 my-8 md:my-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
          <svg
            className="w-7 h-7 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <div className="text-center md:text-left flex-1">
          <h3 className="font-serif text-xl font-bold text-ink mb-1">
            {displayTitle}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            {displaySubtitle}
          </p>
        </div>

        <a
          href={redirectUrl}
          className="btn btn-gold shrink-0 whitespace-nowrap"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}