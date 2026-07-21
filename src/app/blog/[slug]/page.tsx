import Link from 'next/link';
import postsData from '@/data/posts.json';
import ConnectCta from '@/components/connect-cta';

export function generateStaticParams() {
  return (postsData.posts || []).map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = (postsData.posts || []).find((p: any) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.metaTitle || post.title + ' | Sacred Tao Wisdom',
    description: post.metaDescription || post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = (postsData.posts || []).find((p: any) => p.slug === params.slug);
  if (!post) return <div className="section text-center"><h1 className="text-2xl">Post not found</h1><Link href="/blog" className="text-accent">← Back to Blog</Link></div>;

  return (
    <main>
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          {' / '}
          <span className="text-ink">{post.title}</span>
        </nav>

        {/* Header */}
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

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {post.content?.map((block: any, i: number) => {
            if (block.type === 'paragraph') return <p key={i} className="mb-4 leading-relaxed">{block.text}</p>;
            if (block.type === 'heading') return <h2 key={i} className="text-2xl font-bold font-serif mt-8 mb-4">{block.text}</h2>;
            if (block.type === 'subheading') return <h3 key={i} className="text-xl font-bold font-serif mt-6 mb-3">{block.text}</h3>;
            if (block.type === 'list') return <ul key={i} className="list-disc pl-6 mb-4 space-y-1">{block.items?.map((item: string, j: number) => <li key={j}>{item}</li>)}</ul>;
            if (block.type === 'blockquote') return <blockquote key={i} className="border-l-4 border-gold pl-4 italic text-gray-600 my-6">{block.text}</blockquote>;
            return null;
          })}
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-sm bg-cream text-gray-500 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12">
          <ConnectCta source={`blog-${post.slug}`} variant="banner" />
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-accent hover:underline">← Back to all articles</Link>
        </div>
      </article>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.modifiedDate,
          author: { '@type': 'Person', name: post.author },
        }),
      }} />
    </main>
  );
}
