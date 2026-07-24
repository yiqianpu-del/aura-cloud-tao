import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { getPageContent } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export const metadata = { title: 'Feng Shui Consultation | Sacred Tao Wisdom', description: 'Remote Feng Shui consultation combining traditional principles with Qi Men Dun Jia strategic positioning.' };

export default async function FengShuiPage() {
  const pc = await getPageContent('fengshui');
  const heading = pc?.heading || 'Feng Shui';
  const subheading = pc?.subheading || '';
  let pageData: any = {};
  try { pageData = pc?.data ? JSON.parse(pc.data) : {}; } catch {}
  const fsService = services.find((s: any) => s.category === 'fengshui');
  const fsProducts = products.filter((p: any) => p.categories.includes('fengshui'));

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Feng Shui</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{subheading}</p>
        {pageData.chineseSub && <p className="text-sm text-gray-500 italic mb-12">{pageData.chineseSub}</p>}

        {fsService && (
          <Link href={`/feng-shui/${fsService.slug}`} className="card hover:border-gold/50 group grid md:grid-cols-3 gap-6 p-0 overflow-hidden mb-16">
            <div className="h-40 md:h-full bg-cream flex items-center justify-center"><Image src={fsService.image} alt={fsService.title} width={200} height={200} className="w-full h-full object-contain p-4" /></div>
            <div className="md:col-span-2 p-6">
              <h2 className="text-xl font-bold group-hover:text-accent mb-1">{fsService.title}</h2>
              <p className="text-sm text-gray-500 italic mb-2">{fsService.titleCn}</p>
              <p className="text-sm text-gray-600 mb-2">{fsService.tagline}</p>
              <p className="text-lg font-bold text-accent">{'From $' + fsService.pricing.startingFrom}</p>
            </div>
          </Link>
        )}

        {fsProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Feng Shui Products</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {fsProducts.map((p: any) => (
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
          </>
        )}

        <ConnectCta source="feng-shui" variant="banner" />
      </div>
    </div>
  );
}
