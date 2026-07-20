import Link from 'next/link';
import type { Metadata } from 'next';
import postsData from '@/data/posts.json';
import ConnectCta from '@/components/connect-cta';

export const metadata: Metadata = {
  title: 'Blog | Sacred Tao Wisdom',
  description: 'Guides and insights on Taoist practices, talismans, Qi Men, Feng Shui, and spiritual living — explore ancient wisdom for modern life.',
};

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
  featured: boolean;
  readingTime: string;
  content: any[];
}

export default function BlogPage() {
  const posts: Post[] = postsData.posts;
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 font-serif">
            Sacred Tao Wisdom Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guides and insights on Taoist practices, talismans, Qi Men,
            Feng Shui, and spiritual living.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-12" aria-label="Featured articles">
          <h2 className="sr-only">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-gold/50 transition-all"
                >
                  {post.image && (
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${post.image})` }}
                        role="img"
                        aria-label={post.imageAlt || post.title}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                      <span>&middot;</span>
                      <span className="text-accent font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-ink group-hover:text-accent transition-colors mb-2 font-serif">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-20" aria-label="All articles">
        {featuredPosts.length > 0 && (
          <hr className="mb-12 border-gray-200" />
        )}
        <div className="space-y-6">
          {regularPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg border border-gray-200 p-6 hover:border-gold/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h2 className="text-lg font-bold text-ink group-hover:text-accent transition-colors font-serif">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-gray-400 shrink-0">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-cream text-gray-500 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-accent font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Connect CTA */}
        <ConnectCta source="blog" variant="banner" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Sacred Tao Wisdom Blog',
              description:
                'Guides and insights on Taoist practices, talismans, Qi Men, Feng Shui, and spiritual living.',
              url: 'https://sacredtaowisdom.com/blog',
              blogPost: posts.map((p) => ({
                '@type': 'BlogPosting',
                headline: p.title,
                description: p.excerpt,
                datePublished: p.date,
                dateModified: p.modifiedDate,
                author: {
                  '@type': 'Person',
                  name: p.author,
                },
                url: `https://sacredtaowisdom.com/blog/${p.slug}`,
              })),
            }),
          }}
        />
      </section>
    </main>
  );
}