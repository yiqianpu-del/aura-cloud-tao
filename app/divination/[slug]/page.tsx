import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site-config';

const divServices = services.filter(s => s.category === 'divination');

export function generateStaticParams() {
  return divServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = divServices.find(s => s.slug === params.slug);
  if (!s) return {};
  return { title: `${s.title} | ${siteConfig.name}`, description: s.tagline };
}

export default function DivinationDetail({ params }: { params: { slug: string } }) {
  const service = divServices.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedProds = service.relatedProducts
    ? products.filter(p => service.relatedProducts?.includes(p.slug))
    : [];

  return (
    <div className="section">
      <article className="container max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/divination" className="hover:text-accent">Divination</Link> / <span className="text-ink">{service.title}</span></nav>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-square bg-cream rounded-sm overflow-hidden border border-gray-200"><Image src={service.image} alt={service.title} width={400} height={400} className="w-full h-full object-contain p-8" /></div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-sm text-gray-500 italic mb-4">{service.titleCn}</p>
            <p className="text-lg text-gray-600 mb-4">{service.tagline}</p>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <p className="text-3xl font-bold text-accent mb-2">From ${service.pricing.startingFrom}</p>
            <p className="text-xs text-gray-500 mb-4">{service.delivery}</p>
            <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg w-full text-center">Book a Reading — WhatsApp</a>
          </div>
        </div>

        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Who Needs This</h2><ul className="grid md:grid-cols-2 gap-3">{service.whoNeedsIt.map((item, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✦</span> {item}</li>))}</ul></section>

        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Process</h2><div className="space-y-6">{service.process.map((step) => (<div key={step.step} className="flex gap-4 items-start"><span className="w-8 h-8 rounded-full bg-gold text-ink font-bold flex items-center justify-center shrink-0 text-sm">{step.step}</span><div><h3 className="font-semibold">{step.title}</h3><p className="text-sm text-gray-600">{step.description}</p></div></div>))}</div></section>

        {service.pricing.options && service.pricing.options.length > 0 && (
          <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Pricing</h2><div className="grid md:grid-cols-3 gap-4">{service.pricing.options.map((opt, i) => (<div key={i} className="card text-center"><h3 className="font-bold text-sm mb-2">{opt.name}</h3><p className="text-2xl font-bold text-accent">${opt.price}</p><a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-sm mt-2">Book</a></div>))}</div></section>
        )}

        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2><ul className="space-y-2">{service.includes.map((item, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold mt-0.5 shrink-0">✓</span> {item}</li>))}</ul></section>

        {/* Related Products */}
        {relatedProds.length > 0 && (
          <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Complementary Products</h2><div className="grid md:grid-cols-2 gap-4">{relatedProds.map((p) => (<Link key={p.id} href={`/shop/${p.slug}`} className="card hover:border-gold/50 group flex gap-4 items-center"><div className="w-20 h-20 shrink-0 bg-cream rounded overflow-hidden"><Image src={p.image} alt={p.name} width={80} height={80} className="w-full h-full object-contain p-2" /></div><div><h3 className="font-bold group-hover:text-accent transition-colors">{p.name}</h3><p className="text-sm text-gray-500">${p.price}</p></div></Link>))}</div></section>
        )}

        {/* Recommended Journey */}
        <section className="mb-12 p-8 bg-cream rounded-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Continue Exploring</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services" className="card hover:border-gold/50 group text-center"><span className="text-2xl mb-2 block">🪔</span><h3 className="font-bold group-hover:text-accent">Book a Ritual</h3><p className="text-xs text-gray-500">Deepen your practice with a sacred ceremony</p></Link>
            <Link href="/feng-shui" className="card hover:border-gold/50 group text-center"><span className="text-2xl mb-2 block">☯</span><h3 className="font-bold group-hover:text-accent">Feng Shui</h3><p className="text-xs text-gray-500">Harmonize your environment</p></Link>
            <Link href="/community/meditation" className="card hover:border-gold/50 group text-center"><span className="text-2xl mb-2 block">🧘</span><h3 className="font-bold group-hover:text-accent">Free Meditation Guide</h3><p className="text-xs text-gray-500">Start your daily practice</p></Link>
          </div>
        </section>

        <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Questions</h2><div className="space-y-4">{service.faq.map((item, i) => (<details key={i} className="card group cursor-pointer"><summary className="font-semibold list-none flex items-center justify-between"><span>{item.q}</span><svg className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-4 text-gray-600 text-sm">{item.a}</p></details>))}</div></section>

        <div className="text-center pt-8 border-t border-gray-200 space-y-3">
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-primary btn-lg">Book on WhatsApp</a>
          <p className="text-sm text-gray-500"><Link href="/divination" className="text-accent hover:underline">← Back to all services</Link></p>
        </div>
      </article>
    </div>
  );
}
