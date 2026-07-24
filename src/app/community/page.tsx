import Link from 'next/link';
import { getPageContent, getPosts } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export const metadata = {
  title: 'Community | Sacred Tao Wisdom',
  description: 'Connect with fellow seekers on the Taoist path.',
};

export default async function CommunityPage() {
  const pc = await getPageContent('community');
  const posts = await getPosts();
  let community: any = {};
  try { community = pc?.data ? JSON.parse(pc.data) : {}; } catch {}

  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pc?.heading}</h1>
          <p className="text-gray-600 mb-2">{pc?.subheading}</p>
          <p className="text-sm text-gray-500 italic">{community.chineseSub}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">Community Reads</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((p: any) => (
            <Link href={`/blog/${p.slug}`} key={p._id} className="card hover:border-gold/50 group">
              <h3 className="font-bold group-hover:text-accent">{p.title}</h3>
              <p className="text-xs text-gray-500">{p.date} · {p.readingTime}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {community.sections?.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {community.sections.map((s: any) => (
              <Link key={s.href} href={s.href} className="card hover:border-gold/50 group text-center p-8">
                <h3 className="font-bold text-xl group-hover:text-accent">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <ConnectCta source="community" variant="banner" />
    </main>
  );
}
