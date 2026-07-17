import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import postsData from '@/data/posts.json';
import ConnectCta from '@/components/connect-cta';

const c = siteContent.community;

export const metadata = {
  title: 'Community | Sacred Tao Wisdom',
  description:
    'Join the Sacred Tao Wisdom community — daily practices, meditation guides, forum discussions, and events.',
};

export default function CommunityPage() {
  const posts = postsData.posts as any[];
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="section">
      <div className="container max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 font-serif">
            {c.heading}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-2">
            {c.subheading}
          </p>
          <p className="text-sm text-gray-400 italic">{c.chineseSub}</p>
        </div>

        {/* Community Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {c.sections.map((s: any) => (
            <Link
              key={s.slug}
              href={'/community/' + s.slug}
              className="card hover:border-gold/50 group text-center hover:shadow-md transition-all"
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">
                {s.title}
              </h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
              <span className="text-xs text-accent font-medium mt-3 inline-block group-hover:underline">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* WhatsApp Community Highlight */}
        <section className="bg-gradient-to-br from-ink to-gray-800 rounded-lg p-8 md:p-12 text-center mb-16">
          <div className="max-w-lg mx-auto">
            <span className="text-4xl mb-4 block">💬</span>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3">
              Join Our WhatsApp Group
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Connect with fellow Taoist seekers from around the world. Share
              experiences, ask questions, and grow together on the path.
            </p>
            <a
              href="/api/redirect?from=community&campaign=community"
              className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3.5 font-bold text-sm tracking-wider uppercase hover:bg-gold/90 transition-colors rounded-sm"
            >
              Join the Community
            </a>
            <p className="text-xs text-gray-500 mt-4">
              Free &middot; Private &middot; English-speaking
            </p>
          </div>
        </section>

        {/* Related Blog Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-6 font-serif">
            Community Reads
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gold/50 transition-all"
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
                  <p className="text-xs text-accent font-medium mb-1">
                    {post.category}
                  </p>
                  <h3 className="font-bold text-ink group-hover:text-accent transition-colors text-sm leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ConnectCta source="community" variant="banner" />
      </div>
    </div>
  );
}
