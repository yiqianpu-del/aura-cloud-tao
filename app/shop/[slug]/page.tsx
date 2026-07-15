import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site-config';

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
            <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg w-full text-center mb-3">Inquire & Order — WhatsApp</a>
          </div>
        </div>
        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Features</h2><ul className="space-y-2">{p.features.map((f, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✦</span> {f}</li>))}</ul></section>
        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Includes</h2><ul className="space-y-2">{p.includes.map((item, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✓</span> {item}</li>))}</ul></section>
        <div className="text-center pt-8 border-t border-gray-200"><a href={siteConfig.whatsappLink} target="_blank" className="btn btn-primary btn-lg">Order on WhatsApp</a></div>
      </article>
    </div>
  );
}
