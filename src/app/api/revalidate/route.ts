import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');

  if (secret !== 'auracloudtao-webhook-2026') {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  // Revalidate all major paths
  revalidatePath('/');
  revalidatePath('/blog');
  revalidatePath('/services');
  revalidatePath('/divination');
  revalidatePath('/feng-shui');
  revalidatePath('/shop');
  revalidatePath('/talismans');
  revalidatePath('/culture');
  revalidatePath('/community');

  return NextResponse.json({ revalidated: true });
}
