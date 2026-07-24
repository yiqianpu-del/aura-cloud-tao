import Link from 'next/link';
import { getPageContent } from '@/lib/sanity.queries';

export const revalidate = 3600;

export default async function CulturePage() {
  const pc = await getPageContent('culture');
  let culture: any = {};
  try { culture = pc?.data ? JSON.parse(pc.data) : {}; } catch {}

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">{pc?.heading}</h1>
        <p className="text-xl text-gray-600 mb-12">{pc?.subheading}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {culture.topics?.map((t: any) => (
            <Link key={t.slug} href={`/culture/${t.slug}`} className="card hover:border-gold/50 group">
              <span className="text-3xl block mb-3">{t.icon}</span>
              <h2 className="font-bold text-lg group-hover:text-accent">{t.title}</h2>
              <p className="text-sm text-gray-600">{t.description || t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
