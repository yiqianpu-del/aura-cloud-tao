import Link from 'next/link';
import Image from 'next/image';
import { services, serviceCategories } from '@/data/services';
import { getPageContent } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export const metadata = {
  title: 'Taoist Ritual Services | Sacred Tao Wisdom',
  description: 'Authentic Taoist ritual services — Karmic Release, Spatial Qi Aligner, and Pet Memorial ceremonies performed at Longhu Mountain.',
};

export default async function ServicesPage() {
  const pc = await getPageContent('services');
  const heading = pc?.heading || 'Ritual Services';
  const subheading = pc?.subheading || '';
  const ritualServices = services.filter((s: any) => s.category === 'ritual');

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Ritual Services</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">{subheading}</p>
        <div className="grid gap-8">
          {ritualServices.map((service: any) => (
            <Link key={service.id} href={'/services/' + service.slug} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
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
                  <span className="text-2xl font-bold text-accent">{'From $' + service.pricing.startingFrom}</span>
                  <span className="text-sm text-gray-500">{'· ' + service.includes.length + ' inclusions'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ConnectCta source="services" variant="banner" />
      </div>
    </div>
  );
}
