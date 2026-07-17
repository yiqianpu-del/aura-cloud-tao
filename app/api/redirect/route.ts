import { NextRequest, NextResponse } from 'next/server';

// ── 可配置区域 ───────────────────────────────────────
// 你可以随意修改下面的值，不需要改动其他逻辑代码

const LINE_LINK = 'https://line.me/R/ti/p/@sacredtaowisdom';          // Line 好友链接
const WHATSAPP_LINK = 'https://wa.me/85256151619';                     // WhatsApp 链接

// 走 Line 的国家/地区列表（ISO 3166-1 alpha-2）
// 后续要增加其他国家就走 Line，往这个 Set 里加就行
const LINE_COUNTRIES = new Set(['JP', 'TW']);

// 默认聊天打招呼文本（写纯文本即可，代码自动做 URL encode）
const DEFAULT_GREETING_LINE = 'Hi there! I am interested in your Taoist services.';
const DEFAULT_GREETING_WHATSAPP = 'Hello, I would like to learn more about your Taoist services.';

// ── 智能分流逻辑 ──────────────────────────────────────

export async function GET(request: NextRequest) {
  // 1. 获取国家代码
  // 生产环境（Vercel）：x-vercel-ip-country — 由 Vercel Edge Network 自动注入
  // 本地开发：fallback 到 ?country=XX 查询参数，方便调试
  let country = request.headers.get('x-vercel-ip-country') ?? '';
  if (!country) {
    country = request.nextUrl.searchParams.get('country') ?? '';
  }

  // 2. 判断目的地并确定打招呼文本
  const isLine = LINE_COUNTRIES.has(country.toUpperCase());
  const baseUrl = isLine ? LINE_LINK : WHATSAPP_LINK;
  const greeting = isLine ? DEFAULT_GREETING_LINE : DEFAULT_GREETING_WHATSAPP;

  // 3. 拼接参数
  const target = new URL(baseUrl);
  if (!isLine && greeting) {
    // WhatsApp: wa.me/86123456789?text=...
    target.searchParams.set('text', greeting);
  }

  // 4. 302 临时重定向
  return NextResponse.redirect(target.toString(), 302);
}
