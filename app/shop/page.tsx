import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import siteContent from '@/data/siteContent.json';

const s = siteContent.shop;

export const metadata = { title: 'Spiritual Shop | Sacred Tao Wisdom', description: 'Hand-crafted Taoist spiritual products — Qi Men card deck, talisman art, physiognomy mirror, and more.' };

export default function ShopPage() {
  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Shop</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{s.heading}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{s.subheading}</p>
        <p className="text-sm text-gray-500 italic mb-12">{s.chineseSub}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <Link key={p.id} href={'/shop/' + p.slug} className="card hover:border-gold/50 group">
              <div className="h-48 bg-cream rounded-sm overflow-hidden mb-4"><Image src={p.image} alt={p.name} width={300} height={200} className="w-full h-full object-contain p-4" /></div>
              {p.isLimitedEdition && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-sm">Limited Edition</span>}
              <h2 className="font-bold text-lg group-hover:text-accent transition-colors mb-1">{p.name}</h2>
              <p className="text-xs text-gray-500 italic mb-2">{p.nameCn}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{p.tagline}</p>
              <p className="font-bold text-accent">{'$' + p.price}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12"><a href="https://wa.me/85256151619?text=I'd%20like%20to%20browse%20your%20shop" target="_blank" className="btn btn-primary btn-lg">{s.cta}</a></div>
      </div>
    </div>
  );
}
