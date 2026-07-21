import { NextRequest, NextResponse } from 'next/server';
import { getRedirectUrl } from '@/lib/router';

/**
 * Thin adapter: reads query params, delegates to the router module,
 * and returns a 302 redirect to the computed destination.
 *
 * GET /api/redirect?from=services&campaign=cta&name=John&question=...
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const source = searchParams.get('from') || undefined;
  const campaignRaw = searchParams.get('campaign');
  const campaign = campaignRaw === 'cta' || campaignRaw === 'banner' || campaignRaw === 'minimal' || campaignRaw === 'free-reading'
    ? campaignRaw
    : undefined;

  // Collect all extra params (everything except 'from' and 'campaign')
  const extra: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    if (key !== 'from' && key !== 'campaign' && value) {
      extra[key] = value;
    }
  }

  const destination = getRedirectUrl({ source, campaign, extra });

  return NextResponse.redirect(destination);
}
