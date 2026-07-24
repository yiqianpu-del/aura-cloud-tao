import Link from 'next/link';
import { getPosts, getPostBySlug } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';
import { PortableText } from '@portabletext/react';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return (posts || []).map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.metaTitle || `${post.title} | Sacred Tao Wisdom`,
    description: post.metaDescription || post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return (
      <div className="section text-center">
        <h1 className="text-2xl">Post not found</h1>
        <Link href="/blog" className="text-accent">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <main>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          {' / '}
          <span className="text-ink">{post.title}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span className="text-accent font-medium">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-4">{post.title}</h1>
          <p className="text-lg text-gray-600">{post.excerpt}</p>
        </header>

        <div className="prose prose-gray max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-sm bg-cream text-gray-500 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}

        <div className="mt-12">
          <ConnectCta source={`blog-${post.slug}`} variant="banner" />
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-accent hover:underline">← Back to all articles</Link>
        </div>
      </article>
    </main>
  );
}
