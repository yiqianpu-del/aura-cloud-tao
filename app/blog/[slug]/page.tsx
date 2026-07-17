import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import postsData from '@/data/posts.json';

interface ContentBlock {
  type: string;
  value?: string | string[];
  level?: string;
  ordered?: boolean;
  linkText?: string;
  linkHref?: string;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  modifiedDate: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalSlug?: string;
  featured: boolean;
  readingTime: string;
  content: ContentBlock[];
}

const posts: Post[] = postsData.posts as Post[];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle || `${post.title} | Sacred Tao Wisdom`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://sacredtaowisdom.com/blog/${post.canonicalSlug || post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      images: post.image
        ? [{ url: `https://sacredtaowisdom.com${post.image}`, alt: post.imageAlt || post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.image ? [`https://sacredtaowisdom.com${post.image}`] : [],
    },
    keywords: post.tags.join(', '),
  };
}

function renderContent(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 key={index} className="text-2xl font-bold text-ink mt-10 mb-4 font-serif">
          {block.value as string}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-5 text-[17px]">
          {block.value as string}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc pl-6 mb-5 text-gray-700 space-y-2 text-[17px]">
          {(block.value as string[]).map((item: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case 'orderedList':
      return (
        <ol key={index} className="list-decimal pl-6 mb-5 text-gray-700 space-y-2 text-[17px]">
          {(block.value as string[]).map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case 'cta':
      return (
        <div key={index} className="bg-cream border border-gold/30 rounded-lg p-6 my-8 text-center">
          <p className="text-ink font-bold mb-3 font-serif text-lg">{block.value as string}</p>
          <Link href={block.linkHref || '/'} className="inline-block bg-accent text-white px-6 py-2.5 rounded-lg hover:bg-accent/90 transition-colors font-medium">{block.linkText}</Link>
        </div>
      );
    default:
      return null;
  }
}

/** 找相关文章：同分类优先，其次同标签，去重后取最多 3 篇 */
function getRelatedPosts(current: Post, all: Post[]): Post[] {
  const sameCategory = all.filter((p) => p.slug !== current.slug && p.category === current.category);
  const sameTags = all.filter(
    (p) => p.slug !== current.slug && p.tags.some((t) => current.tags.includes(t))
  );
  const seen = new Set<string>();
  const result: Post[] = [];
  for (const p of [...sameCategory, ...sameTags]) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    result.push(p);
    if (result.length >= 3) break;
  }
  return result;
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const relatedPosts = getRelatedPosts(post, posts);

  return (
    <main>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-8 text-sm text-gray-400">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-ink font-medium truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
            <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="text-accent font-medium hover:underline">{post.category}</Link>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">&middot;</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight font-serif mb-4">{post.title}</h1>
          <p className="text-lg text-gray-500 leading-relaxed">{post.excerpt}</p>
        </header>

        {post.image && (
          <figure className="mb-10 -mx-4 md:mx-0">
            <div className="w-full aspect-[21/9] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${post.image})` }} role="img" aria-label={post.imageAlt || post.title} />
            {post.imageAlt && <figcaption className="text-xs text-gray-400 mt-2 text-center">{post.imageAlt}</figcaption>}
          </figure>
        )}

        <div className="prose-custom">{post.content.map((block, index) => renderContent(block, index))}</div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-400 font-medium mr-1">Tags:</span>
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="text-sm bg-cream text-gray-600 px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">{tag}</Link>
              ))}
            </div>
          </footer>
        )}

        {post.modifiedDate !== post.date && (
          <p className="text-xs text-gray-400 mt-4">Last updated: <time dateTime={post.modifiedDate}>{post.modifiedDate}</time></p>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section aria-label="Related articles" className="max-w-4xl mx-auto px-4 pb-8">
          <hr className="mb-8 border-gray-200" />
          <h2 className="text-xl font-bold text-ink mb-6 font-serif">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-gold/50 transition-all">
                {rp.image && (
                  <div className="aspect-[16/9] bg-gray-100 rounded overflow-hidden mb-3 bg-cover bg-center group-hover:scale-[1.02] transition-transform" style={{ backgroundImage: `url(${rp.image})` }} role="img" aria-label={rp.imageAlt || rp.title} />
                )}
                <p className="text-xs text-gray-400 mb-1">{rp.date} &middot; {rp.readingTime}</p>
                <h3 className="font-bold text-ink group-hover:text-accent transition-colors text-sm leading-snug">{rp.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav aria-label="Previous and next articles" className="max-w-3xl mx-auto px-4 pb-16">
        <hr className="mb-8 border-gray-200" />
        <div className="grid grid-cols-2 gap-6">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group text-left">
              <span className="text-xs text-gray-400 uppercase tracking-wider">&larr; Previous</span>
              <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors mt-1 truncate">{prevPost.title}</p>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="group text-right">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Next &rarr;</span>
              <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors mt-1 truncate">{nextPost.title}</p>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BlogPosting',
          headline: post.title, description: post.excerpt,
          image: post.image ? `https://sacredtaowisdom.com${post.image}` : undefined,
          datePublished: post.date, dateModified: post.modifiedDate,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: 'Sacred Tao Wisdom', logo: { '@type': 'ImageObject', url: 'https://sacredtaowisdom.com/favicon.svg' } },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sacredtaowisdom.com/blog/${post.slug}` },
          keywords: post.tags.join(', '), articleSection: post.category,
        }),
      }} />
    </main>
  );
}
