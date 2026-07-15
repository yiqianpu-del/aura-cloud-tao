import Link from 'next/link';
import Image from 'next/image';
import { services, serviceCategories } from '@/data/services';

export const metadata = {
  title: 'Taoist Ritual Services | Sacred Tao Wisdom',
  description: 'Authentic Taoist ritual services — Karmic Release, Spatial Qi Aligner, and Pet Memorial ceremonies performed at Longhu Mountain.',
};

export default function ServicesPage() {
  const ritualServices = services.filter(s => s.category === 'ritual');
  const cat = serviceCategories.find(c => c.id === 'ritual');

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Ritual Services</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Sacred Ritual Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{cat?.description}</p>
        <p className="text-sm text-gray-500 italic mb-12">Custom Taoist rituals performed at Longhu Mountain Tianshi Mansion</p>

        <div className="grid gap-8">
          {ritualServices.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
              <div className="h-48 md:h-full bg-cream flex items-center justify-center overflow-hidden">
                <Image src={service.image} alt={service.title} width={300} height={300} className="w-full h-full object-contain p-4" />
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-xs text-gold uppercase tracking-wider mb-2">Ritual Service</p>
                <h2 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">{service.title}</h2>
                <p className="text-sm text-gray-500 italic mb-2">{service.titleCn}</p>
                <p className="text-sm text-gray-600 mb-4">{service.tagline}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-accent">From ${service.pricing.startingFrom}</span>
                  <span className="text-sm text-gray-500">· {service.includes.length} inclusions</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/85256151619?text=I'd%20like%20to%20learn%20about%20your%20Taoist%20ritual%20services" target="_blank" className="btn btn-primary btn-lg">Discuss Your Ritual Need → WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
