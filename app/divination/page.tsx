import Link from 'next/link';
import Image from 'next/image';
import { services, serviceCategories } from '@/data/services';
import { products } from '@/data/products';

export const metadata = { title: 'Qi Men Dun Jia Divination | Sacred Tao Wisdom', description: 'Ancient Chinese strategic divination — Qi Men Oracle card readings, energy audits, and classical physiognomy.' };

export default function DivinationPage() {
  const divServices = services.filter(s => s.category === 'divination');
  const deckProduct = products.find(p => p.slug === 'qi-men-deck');
  const cat = serviceCategories.find(c => c.id === 'divination');

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Divination</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Qi Men Dun Jia Divination</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{cat?.description}</p>
        <p className="text-sm text-gray-500 italic mb-12">Ancient Chinese strategic oracle — now in an accessible card format</p>

        <h2 className="text-2xl font-bold mb-6">Reading Services</h2>
        <div className="grid gap-6 mb-16">
          {divServices.map((s) => (
            <Link key={s.id} href={`/divination/${s.slug}`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
              <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={s.image} alt={s.title} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
              <div className="md:col-span-2 p-6">
                <p className="text-xs text-gold uppercase tracking-wider mb-1">Divination</p>
                <h3 className="text-xl font-bold group-hover:text-accent mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{s.titleCn}</p>
                <p className="text-sm text-gray-600 mb-2">{s.tagline}</p>
                <p className="text-lg font-bold text-accent">From ${s.pricing.startingFrom}</p>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Featured Product</h2>
        {deckProduct && (
          <Link href={`/shop/${deckProduct.slug}`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
            <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={deckProduct.image} alt={deckProduct.name} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
            <div className="md:col-span-2 p-6">
              {deckProduct.isLimitedEdition && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-sm">Limited Edition</span>}
              <h3 className="text-xl font-bold group-hover:text-accent mb-1">{deckProduct.name}</h3>
              <p className="text-sm text-gray-500 italic mb-2">{deckProduct.nameCn}</p>
              <p className="text-sm text-gray-600 mb-2">{deckProduct.tagline}</p>
              <p className="text-lg font-bold text-accent">${deckProduct.price}</p>
            </div>
          </Link>
        )}

        <div className="text-center mt-12">
          <a href="https://wa.me/85256151619?text=I'd%20like%20to%20book%20a%20Qi%20Men%20reading" target="_blank" className="btn btn-primary btn-lg">Book a Reading → WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
