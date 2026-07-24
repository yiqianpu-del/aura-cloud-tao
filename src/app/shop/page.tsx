import Link from 'next/link';
import Image from 'next/image';
import { getProducts, getPageContent } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();
  const pageContent = await getPageContent('shop');
  const heading = pageContent?.heading || 'Shop';
  const subheading = pageContent?.subheading || '';
  const chineseSub = (() => {
    try { return pageContent?.data ? JSON.parse(pageContent.data).chineseSub : ''; }
    catch { return ''; }
  })();

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Shop</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-2">{subheading}</p>
        {chineseSub && <p className="text-sm text-gray-500 italic mb-12">{chineseSub}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <Link key={p._id} href={`/shop/${p.slug}`} className="card hover:border-gold/50 group">
              <div className="h-48 bg-cream rounded-sm overflow-hidden mb-4">
                {p.imageUrl ? (
                  <Image src={p.imageUrl} alt={p.name} width={300} height={200} className="w-full h-full object-contain p-4" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                )}
              </div>
              {p.isLimitedEdition && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-sm">Limited Edition</span>}
              <h2 className="font-bold text-lg group-hover:text-accent transition-colors mb-1">{p.name}</h2>
              <p className="text-xs text-gray-500 italic mb-2">{p.nameCn}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{p.tagline}</p>
              <p className="font-bold text-accent">{'$' + p.price}</p>
            </Link>
          ))}
        </div>
        <ConnectCta source="shop" variant="banner" />
      </div>
    </div>
  );
}
