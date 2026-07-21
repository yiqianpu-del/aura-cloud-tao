import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import postsData from '@/data/posts.json';
import ConnectCta from '@/components/connect-cta';

const l = siteContent.learn;

export const metadata = {
  title: 'Learn | Sacred Tao Wisdom',
  description: 'Explore Taoist culture, read our blog, and find answers to common questions.',
};

export default function LearnPage() {
  const posts = postsData.posts as any[];
  const categories = [...new Set(posts.map((p) => p.category))];
  const latestPosts = posts.slice(0, 6);

  // Group posts by category for the category overview
  const categoryPosts = categories.map((cat) => ({
    name: cat,
    count: posts.filter((p) => p.category === cat).length,
    latest: posts.find((p) => p.category === cat),
  }));

  return (
    <div className="section">
      <div className="container max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 font-serif">
            {l.heading}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {l.subheading}
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {l.sections.map((s: any) => (
            <Link
              key={s.href}
              href={s.href}
              className="card hover:border-gold/50 group text-center gradient-border"
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">
                {s.title}
              </h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>

        {/* Blog Categories Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-6 font-serif">
            Explore by Topic
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {categoryPosts.map((cp) => (
              <Link
                key={cp.name}
                href={`/blog?category=${encodeURIComponent(cp.name)}`}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gold/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {cp.count}
                </div>
                <div>
                  <h3 className="font-bold text-ink group-hover:text-accent transition-colors text-sm">
                    {cp.name}
                  </h3>
                  <p className="text-xs text-gray-400">{cp.count} articles</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-ink font-serif">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm text-accent hover:underline font-medium"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gold/50 hover:shadow-sm transition-all"
              >
                {post.image && (
                  <div
                    className="aspect-[16/9] bg-gray-100 bg-cover bg-center group-hover:scale-[1.02] transition-transform"
                    style={{ backgroundImage: `url(${post.image})` }}
                    role="img"
                    aria-label={post.imageAlt || post.title}
                  />
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span className="text-accent font-medium">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-bold text-ink group-hover:text-accent transition-colors text-sm leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ConnectCta source="learn" variant="banner" />
      </div>
    </div>
  );
}