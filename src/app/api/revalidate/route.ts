import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const type = body._type;

    // Map Sanity document type to ISR cache tags
    const tagMap: Record<string, string[]> = {
      talisman: ['talismans'],
      product: ['products'],
      post: ['posts', ...(body.slug ? [`post-${body.slug}`] : [])],
      siteSettings: ['site-settings'],
      homepage: ['homepage'],
      pageContent: body.pageId ? [`page-${body.pageId}`] : [],
    };

    const tags = tagMap[type] || [];
    for (const tag of tags) {
      revalidateTag(tag);
    }

    return NextResponse.json({ revalidated: true, tags });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
