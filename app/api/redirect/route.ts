import { NextRequest, NextResponse } from 'next/server';

// ── 可配置区域 ──────────────────────────────────────────
// 你只需修改这里的值，不需要改动逻辑代码

const LINE_LINK = 'https://line.me/R/ti/p/@sacredtaowisdom';
const WHATSAPP_LINK = 'https://wa.me/85256151619';
const WHATSAPP_FALLBACK = 'https://api.whatsapp.com/send?phone=85256151619';

// 走 Line 的国家/地区（ISO 3166-1 alpha-2）
const LINE_COUNTRIES = new Set(['JP', 'TW']);

// 各渠道的默认招呼语
const GREETINGS: Record<string, string> = {
  line: 'Hi there! I am interested in your Taoist services.',
  whatsapp: 'Hello, I would like to learn more about your Taoist services.',
};

// ── 智能分流逻辑 ────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // 1. 获取国家代码（Vercel 生产环境自动注入；本地调试用 ?country=XX）
  let country =
    request.headers.get('x-vercel-ip-country') ??
    searchParams.get('country') ??
    '';

  // 2. 读取追踪参数（埋点用）
  const source = searchParams.get('from') ?? 'direct';
  const campaign = searchParams.get('campaign') ?? 'blog';

  // 3. 判断目的地
  const isLine = LINE_COUNTRIES.has(country.toUpperCase());
  const target = new URL(isLine ? LINE_LINK : WHATSAPP_LINK);

  // 4. 拼接招呼语
  const greeting = isLine ? GREETINGS.line : GREETINGS.whatsapp;
  if (!isLine) {
    target.searchParams.set('text', greeting);
  }

  // 5. 拼接追踪参数（部分渠道支持，不阻塞跳转）
  //    WhatsApp 已支持 utm 参数传递
  target.searchParams.set('utm_source', 'blog');
  target.searchParams.set('utm_medium', campaign);
  target.searchParams.set('utm_content', source);

  // 6. 302 重定向
  return NextResponse.redirect(target.toString(), 302);
}

// ── 导出辅助函数（给文章 CTA 组件使用）────────────────────

/**
 * 生成带追踪的引流链接，供文章内使用
 * @param slug 文章 slug，用于追踪哪篇文章带来的流量
 * @returns 完整的 /api/redirect 路径
 */
export function getRedirectLink(slug: string): string {
  return `/api/redirect?from=${encodeURIComponent(slug)}&campaign=blog`;
}
