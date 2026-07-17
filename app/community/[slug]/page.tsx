import Link from 'next/link';
import { notFound } from 'next/navigation';
import siteContent from '@/data/siteContent.json';
import postsData from '@/data/posts.json';
import ConnectCta from '@/components/connect-cta';

const sections = siteContent.community.details as any;
const posts = postsData.posts as any[];

export function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }));
}

/** 根据分区 slug 返回相关文章（匹配标签或分类） */
function getRelatedPosts(slug: string): any[] {
  const topicMap: Record<string, string[]> = {
    practices: ['taoist-practice', 'daily-routine', 'morning-ritual'],
    meditation: ['taoist-meditation', 'qi-gong', 'meditation', 'breathing'],
    forum: ['community', 'talisman-guide', 'shopping-guide'],
    events: ['tai-sui', 'feng-shui', 'astrology'],
  };
  const keywords = topicMap[slug] || [];
  const matched = posts.filter((p: any) =>
    p.tags?.some((t: string) => keywords.some((k) => t.includes(k)))
  );
  return matched.slice(0, 3);
}

export default function CommunityDetail({
  params,
}: {
  params: { slug: string };
}) {
  const section = sections[params.slug];
  if (!section) notFound();

  const relatedPosts = getRelatedPosts(params.slug);

  const pageMeta: Record<string, { title: string; desc: string }> = {
    practices: { title: 'Daily Taoist Practices', desc: 'Simple Taoist practices to incorporate into your daily life — from morning Qi Gong to evening gratitude.' },
    meditation: { title: 'Taoist Meditation Guides', desc: 'Learn Taoist meditation techniques — Embryonic Breathing, Inner Smile, Walking Meditation, and more.' },
    forum: { title: 'Community Forum', desc: 'Connect with fellow Taoist seekers. Share experiences and insights on the spiritual path.' },
    events: { title: 'Events & Workshops', desc: 'Upcoming Taoist rituals, workshops, and community gatherings — online and in-person.' },
  };

  return (
    <main>
      <div className="section">
        <article className="container max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/community" className="hover:text-accent">Community</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-ink font-medium truncate">{section.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4 font-serif">
              {section.title}
            </h1>
            <p className="text-gray-500 text-lg">
              {pageMeta[params.slug]?.desc || 'Explore this section of the Sacred Tao Wisdom community.'}
            </p>
          </header>

          {/* Content */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
            {section.content.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Forum / Events specific CTAs */}
          {params.slug === 'forum' && (
            <div className="mt-10 bg-cream border border-gold/20 rounded-lg p-6 text-center">
              <span className="text-3xl mb-3 block">💬</span>
              <h2 className="font-serif text-xl font-bold text-ink mb-2">
                Join the Conversation
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Our community is active on WhatsApp. Share your experiences,
                ask questions, and grow with fellow seekers.
              </p>
              <a
                href="/api/redirect?from=community-forum&campaign=community"
                className="btn btn-gold"
              >
                Join WhatsApp Group
              </a>
            </div>
          )}

          {params.slug === 'events' && (
            <div className="mt-10 bg-cream border border-gold/20 rounded-lg p-6 text-center">
              <span className="text-3xl mb-3 block">📅</span>
              <h2 className="font-serif text-xl font-bold text-ink mb-2">
                Register for Events
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Send a message on WhatsApp to get the schedule and registration
                links for upcoming events.
              </p>
              <a
                href="/api/redirect?from=community-events&campaign=community"
                className="btn btn-gold"
              >
                Contact for Events
              </a>
            </div>
          )}

          {/* Related Blog Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-ink mb-6 font-serif">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-gray-200 rounded-lg p-4 hover:border-gold/50 transition-all"
                  >
                    <p className="text-xs text-accent font-medium mb-1">
                      {post.category}
                    </p>
                    <h3 className="font-bold text-ink group-hover:text-accent transition-colors text-sm leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">
                      {post.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back Link */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link
              href="/community"
              className="text-accent hover:underline text-sm"
            >
              &larr; Back to Community
            </Link>
          </div>
        </article>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <ConnectCta source={`community-${params.slug}`} variant="banner" />
      </div>
    </main>
  );
}
