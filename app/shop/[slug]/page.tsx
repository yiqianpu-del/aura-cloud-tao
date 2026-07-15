import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';

const categorySlugMap: Record<string, string> = {
  ritual: 'services',
  divination: 'divination',
  fengshui: 'feng-shui',
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find(p => p.slug === params.slug);
  if (!p) return {};
  return { title: `${p.name} | ${siteConfig.name}`, description: p.tagline };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) notFound();

  // Find related services (services that have this product in relatedProducts)
  const relatedSvcs = services.filter(s => s.relatedProducts?.includes(p.slug));

  return (
    <div className="section">
      <article className="container max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/shop" className="hover:text-accent">Shop</Link> / <span className="text-ink">{p.name}</span></nav>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="aspect-square bg-cream rounded-sm overflow-hidden border border-gray-200"><Image src={p.image} alt={p.name} width={400} height={400} className="w-full h-full object-contain p-8" /></div>
          <div>
            {p.isLimitedEdition && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-sm inline-block mb-2">Limited Edition</span>}
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{p.name}</h1>
            <p className="text-sm text-gray-500 italic mb-4">{p.nameCn}</p>
            <p className="text-lg text-gray-600 mb-4">{p.tagline}</p>
            <p className="text-gray-600 mb-6">{p.description}</p>
            <p className="text-3xl font-bold text-accent mb-6">${p.price}</p>
            {p.isLimitedEdition && <p className="text-xs text-accent font-semibold mb-4">Limited stock — inquire for availability</p>}
            <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg w-full text-center mb-3">Inquire & Order — WhatsApp</a>
          </div>
        </div>

        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Features</h2><ul className="space-y-2">{p.features.map((f, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✦</span> {f}</li>))}</ul></section>
        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Includes</h2><ul className="space-y-2">{p.includes.map((item, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✓</span> {item}</li>))}</ul></section>

        {/* Related Services */}
        {relatedSvcs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="space-y-4">
              {relatedSvcs.map((s) => {
                const section = categorySlugMap[s.category] || 'services';
                return (
                  <Link key={s.id} href={`/${section}/${s.slug}`} className="card hover:border-gold/50 group flex gap-4 items-center">
                    <div className="flex-1">
                      <p className="text-xs text-gold uppercase tracking-wider">{s.titleCn}</p>
                      <h3 className="font-bold group-hover:text-accent transition-colors">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.tagline}</p>
                    </div>
                    <span className="text-accent font-bold">From ${s.pricing.startingFrom} →</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="text-center pt-8 border-t border-gray-200 space-y-3">
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-primary btn-lg">Order on WhatsApp</a>
          <p className="text-sm text-gray-500"><Link href="/shop" className="text-accent hover:underline">← Back to shop</Link></p>
        </div>
      </article>
    </div>
  );
}
