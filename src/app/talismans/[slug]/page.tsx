import Link from 'next/link';
import { getTalismans } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export async function generateStaticParams() {
  const talismans = await getTalismans();
  return talismans.map((t: any) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const talismans = await getTalismans();
  const t = talismans.find((t: any) => t.slug === params.slug);
  if (!t) return { title: 'Not Found' };
  return { title: `${t.name} | Sacred Tao Wisdom`, description: t.description };
}

export default async function TalismanPage({ params }: { params: { slug: string } }) {
  const talismans = await getTalismans();
  const t = talismans.find((t: any) => t.slug === params.slug);
  if (!t) return <div className="section text-center"><h1 className="text-2xl">Talisman not found</h1><Link href="/talismans" className="text-accent">← Back to Talismans</Link></div>;

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/talismans" className="hover:text-accent">Talismans</Link> / <span className="text-ink">{t.name}</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="h-64 bg-cream rounded-sm flex items-center justify-center">
            {t.imageUrl ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-contain p-6" /> : <span className="text-6xl">☯</span>}
          </div>
          <div>
            <span className="text-xs text-gold uppercase tracking-wider">{t.category}</span>
            <h1 className="text-3xl font-bold mb-1">{t.name}</h1>
            <p className="text-sm text-gray-500 italic mb-4">{t.chineseName}</p>
            <p className="text-2xl font-bold text-accent mb-4">{'$' + t.price}</p>
            <p className="text-gray-600 mb-6">{t.description}</p>
            {t.features?.length > 0 && (
              <ul className="space-y-2 mb-6">
                {t.features.map((f: string, i: number) => <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5">✦</span> {f}</li>)}
              </ul>
            )}
            <a href={`/api/redirect?from=shop-talisman&campaign=cta&name=${encodeURIComponent(t.name)}`} className="btn btn-gold">Inquire on WhatsApp</a>
          </div>
        </div>
        {t.packages?.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Available Packages</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {t.packages.map((pkg: any, i: number) => (
                <div key={i} className="card text-center">
                  <h3 className="font-bold mb-2">{t.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-1">{'$' + pkg.price}</p>
                  <p className="text-sm text-gray-600">{pkg.name || 'Standard Package'}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <ConnectCta source={`talisman-${t.slug}`} variant="banner" />
      </div>
    </div>
  );
}
