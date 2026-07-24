import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/lib/sanity.queries';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export default async function TalismanDecorPage() {
  const products = await getProducts() || [];
  const product = products.find((p: any) => p.slug === 'talisman-decor');

  if (!product) return <div className="section text-center"><h1>Product not found</h1><Link href="/shop" className="text-accent">← Back to Shop</Link></div>;

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/shop" className="hover:text-accent">Shop</Link> / <span className="text-ink">{product.name}</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="h-64 bg-cream rounded-sm flex items-center justify-center">
            {product.imageUrl ? <Image src={product.imageUrl} alt={product.name} width={300} height={300} className="w-full h-full object-contain p-6" /> : <span className="text-6xl">🏮</span>}
          </div>
          <div>
            {product.isLimitedEdition && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-sm">Limited Edition</span>}
            <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
            <p className="text-sm text-gray-500 italic mb-4">{product.nameCn}</p>
            <p className="text-2xl font-bold text-accent mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            {product.features?.length > 0 && (
              <ul className="space-y-2 mb-6">
                {product.features.map((f: string, i: number) => <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold">✦</span> {f}</li>)}
              </ul>
            )}
            <a href={`/api/redirect?from=shop-talisman-decor&campaign=cta`} className="btn btn-gold">Inquire on WhatsApp</a>
          </div>
        </div>
        {product.includes?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">What's Included</h2>
            <ul className="space-y-2">
              {product.includes.map((item: string, i: number) => <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-gold">✦</span> {item}</li>)}
            </ul>
          </section>
        )}
        <ConnectCta source={`shop-${product.slug}`} variant="banner" />
      </div>
    </div>
  );
}
