import Link from 'next/link';
import { getPageContent, getPosts } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export default async function LearnPage() {
  const pc = await getPageContent('learn');
  const posts = await getPosts();
  let learn: any = {};
  try { learn = pc?.data ? JSON.parse(pc.data) : {}; } catch {}

  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pc?.heading}</h1>
          <p className="text-gray-600">{pc?.subheading}</p>
        </div>
      </section>

      {learn.sections?.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">Explore by Topic</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learn.sections.map((s: any) => (
              <Link key={s.href} href={s.href} className="card hover:border-gold/50 group text-center">
                <h3 className="font-bold text-lg group-hover:text-accent">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(0, 6).map((p: any) => (
            <Link href={`/blog/${p.slug}`} key={p._id} className="card hover:border-gold/50 group">
              <h3 className="font-bold group-hover:text-accent">{p.title}</h3>
              <p className="text-xs text-gray-500">{p.date} · {p.readingTime}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <ConnectCta source="learn" variant="banner" />
    </main>
  );
}
