import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// ── 可配置区域 ──────────────────────────────────────────
// 部署后请在 Vercel 设置环境变量 API_PUBLISH_KEY（任意长随机字符串）
// AI 调用时在 Header 中传 X-Api-Key 做鉴权

const POSTS_FILE = path.join(process.cwd(), 'data', 'posts.json');

// ── 类型 ────────────────────────────────────────────────

interface ContentBlock {
  type: string;
  value?: string | string[];
  level?: string;
  ordered?: boolean;
  linkText?: string;
  linkHref?: string;
}

interface PostInput {
  slug?: string;
  title: string;
  date?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalSlug?: string;
  featured?: boolean;
  readingTime?: string;
  content: ContentBlock[];
}

// ── 辅助 ────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function estimateReadingTime(content: ContentBlock[]): string {
  let wordCount = 0;
  for (const block of content) {
    if (typeof block.value === 'string') {
      wordCount += block.value.split(/\s+/).length;
    } else if (Array.isArray(block.value)) {
      for (const item of block.value) {
        wordCount += item.split(/\s+/).length;
      }
    }
  }
  return `${Math.max(1, Math.round(wordCount / 200))} min read`;
}

function validatePost(input: PostInput): string | null {
  if (!input.title?.trim()) return 'Missing required field: title';
  if (!input.excerpt?.trim()) return 'Missing required field: excerpt';
  if (!Array.isArray(input.content) || input.content.length === 0)
    return 'Missing required field: content (must be non-empty array)';
  return null;
}

// ── POST: 新增/更新文章 ────────────────────────────────

export async function POST(request: NextRequest) {
  // 1. 鉴权
  const apiKey = request.headers.get('x-api-key');
  const expectedKey = process.env.API_PUBLISH_KEY;
  if (expectedKey && apiKey !== expectedKey) {
    return NextResponse.json({ error: 'Unauthorized: invalid X-Api-Key' }, { status: 401 });
  }

  // 2. 解析
  let input: PostInput;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // 3. 校验
  const err = validatePost(input);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  // 4. 规整
  const now = new Date().toISOString().split('T')[0];
  const slug = input.slug?.trim() || slugify(input.title);
  const post = {
    slug,
    title: input.title.trim(),
    date: input.date || now,
    modifiedDate: now,
    author: input.author || 'Master Li',
    category: input.category || 'Taoist Practice',
    tags: input.tags || [],
    image: input.image || '',
    imageAlt: input.imageAlt || '',
    excerpt: input.excerpt.trim(),
    metaTitle: input.metaTitle || `${input.title.trim()} | Sacred Tao Wisdom`,
    metaDescription: input.metaDescription || input.excerpt.trim(),
    canonicalSlug: input.canonicalSlug || slug,
    featured: typeof input.featured === 'boolean' ? input.featured : false,
    readingTime: input.readingTime || estimateReadingTime(input.content),
    content: input.content,
  };

  // 5. 读写文件
  try {
    const raw = fs.readFileSync(POSTS_FILE, 'utf-8');
    const data = JSON.parse(raw);
    if (!Array.isArray(data.posts))
      return NextResponse.json({ error: 'Invalid posts.json format' }, { status: 500 });

    const idx = data.posts.findIndex((p: any) => p.slug === slug);
    if (idx >= 0) {
      data.posts[idx] = post;
    } else {
      data.posts.unshift(post);
    }

    fs.writeFileSync(POSTS_FILE, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      slug: post.slug,
      action: idx >= 0 ? 'updated' : 'created',
      url: `/blog/${slug}`,
      message: `"${post.title}" published → /blog/${slug}`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: `Write failed: ${err.message}` }, { status: 500 });
  }
}

// ── GET: 健康检查 ──────────────────────────────────────

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/publish',
    auth_required: !!process.env.API_PUBLISH_KEY,
    docs: 'POST { title, excerpt, content[], slug?, author?, category?, tags?, image?, ... }',
  });
}
