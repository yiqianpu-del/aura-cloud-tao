import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { products } from '@/data/products';

export const metadata = { title: 'Feng Shui Consultation | Sacred Tao Wisdom', description: 'Remote Feng Shui consultation combining traditional principles with Qi Men Dun Jia strategic positioning.' };

export default function FengShuiPage() {
  const fsService = services.find(s => s.slug === 'fengshui-consultation');
  const qiAligner = products.find(p => p.slug === 'qi-aligner');

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Feng Shui</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Taoist Feng Shui</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">Harmonize your space with remote Feng Shui consultation and energy tools</p>
        <p className="text-sm text-gray-500 italic mb-12">Combining classical Feng Shui with Qi Men Dun Jia strategic positioning</p>

        <h2 className="text-2xl font-bold mb-6">Consultation Service</h2>
        {fsService && (
          <Link href={`/feng-shui/consultation`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden mb-16">
            <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={fsService.image} alt={fsService.title} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-xl font-bold group-hover:text-accent mb-1">{fsService.title}</h3>
              <p className="text-sm text-gray-500 italic mb-2">{fsService.titleCn}</p>
              <p className="text-sm text-gray-600 mb-2">{fsService.tagline}</p>
              <p className="text-lg font-bold text-accent">From ${fsService.pricing.startingFrom}</p>
            </div>
          </Link>
        )}

        <h2 className="text-2xl font-bold mb-6">Featured Product</h2>
        {qiAligner && (
          <Link href={`/shop/qi-aligner`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
            <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={qiAligner.image} alt={qiAligner.name} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-xl font-bold group-hover:text-accent mb-1">{qiAligner.name}</h3>
              <p className="text-sm text-gray-500 italic mb-2">{qiAligner.nameCn}</p>
              <p className="text-sm text-gray-600 mb-2">{qiAligner.tagline}</p>
              <p className="text-lg font-bold text-accent">${qiAligner.price}</p>
            </div>
          </Link>
        )}

        <div className="text-center mt-12"><a href="https://wa.me/85256151619?text=I'd%20like%20a%20Feng%20Shui%20consultation" target="_blank" className="btn btn-primary btn-lg">Book a Consultation → WhatsApp</a></div>
      </div>
    </div>
  );
}
