import Link from 'next/link';
import Image from 'next/image';
import { talismans, categories } from '@/data/talismans';
import siteContent from '@/data/siteContent.json';

const t = siteContent.talismans;

export const metadata = {
  title: '22 Hand-Written Taoist Talismans',
  description: 'Browse 22 authentic Taoist talismans hand-written by Longhu Mountain gaogong priests. Personalized blessing rituals with filmed consecration proof.',
};

export default function TalismansPage() {
  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">22 Talismans</span></nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.heading}</h1>
        <p className="text-gray-600 max-w-3xl mb-2">{t.description}</p>
        <p className="text-sm text-gray-500 italic mb-12">{t.chineseSub}</p>

        {categories.map((cat: any) => (
          <section key={cat.id} id={'cat-' + cat.id} className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold">{cat.name}</h2>
            </div>
            <p className="text-gray-600 mb-6">{cat.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {talismans.filter((tal: any) => tal.category === cat.id).map((tal: any) => {
                const imgSrc = (t.categoryImages as any)[tal.category] || '/images/talisman-placeholder.svg';
                return (
                  <Link key={tal.id} href={'/talismans/' + tal.slug} className="card hover:border-gold/50 group">
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-20 shrink-0 rounded overflow-hidden border border-gray-100">
                        <Image src={imgSrc} alt={tal.name} width={64} height={80} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{tal.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">{tal.chineseName}</p>
                        <p className="text-sm text-gray-600 mb-1 line-clamp-2">{tal.description}</p>
                        <p className="font-bold text-accent text-sm">{'From $' + tal.price}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
