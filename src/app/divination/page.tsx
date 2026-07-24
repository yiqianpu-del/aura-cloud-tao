import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { getProducts, getPageContent } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';
import FreeReading from '@/components/free-reading';

export const revalidate = 3600;

export const metadata = { title: 'Qi Men Dun Jia Divination | Sacred Tao Wisdom', description: 'Ancient Chinese strategic divination — Qi Men Oracle card readings, energy audits, and classical physiognomy.' };

export default async function DivinationPage() {
  const pc = await getPageContent('divination');
  const heading = pc?.heading || 'Divination';
  const subheading = pc?.subheading || '';
  let pageData: any = {};
  try { pageData = pc?.data ? JSON.parse(pc.data) : {}; } catch {}
  const divServices = services.filter((s: any) => s.category === 'divination');
  const products = await getProducts() || [];
  const divProducts = products.filter((p: any) => p.categories && p.categories.includes('divination'));

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Qi Men Divination</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{subheading}</p>
        {pageData.chineseSub && <p className="text-sm text-gray-500 italic mb-12">{pageData.chineseSub}</p>}

        <h2 className="text-2xl font-bold mb-6">Divination Services</h2>
        <div className="grid gap-8 mb-16">
          {divServices.map((service: any) => (
            <Link key={service.id} href={'/divination/' + service.slug} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden">
              <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={service.image} alt={service.title} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-bold group-hover:text-accent mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{service.titleCn}</p>
                <p className="text-sm text-gray-600 mb-2">{service.tagline}</p>
                <p className="text-lg font-bold text-accent">{'From $' + service.pricing.startingFrom}</p>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Divination Products</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {divProducts.map((p: any) => (
            <Link key={p.slug} href={'/shop/' + p.slug} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-4 p-0 overflow-hidden">
              <div className="h-32 bg-cream flex items-center justify-center"><Image src={p.image} alt={p.name} width={150} height={150} className="w-full h-full object-contain p-4" /></div>
              <div className="md:col-span-2 p-4">
                <h3 className="font-bold group-hover:text-accent mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{p.tagline}</p>
                <p className="font-bold text-accent">{'$' + p.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <FreeReading variant="section" />
        <ConnectCta source="divination" variant="banner" />
      </div>
    </div>
  );
}
