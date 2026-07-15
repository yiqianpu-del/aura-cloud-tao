import Link from 'next/link';
import Image from 'next/image';
import { talismans, categories } from '@/data/talismans';

const categoryImages: Record<string, string> = {
  wealth: '/images/talisman-wealth.svg',
  protection: '/images/talisman-protection.svg',
  health: '/images/talisman-health.svg',
  luck: '/images/talisman-luck.svg',
};

export const metadata = {
  title: '22 Hand-Written Taoist Talismans',
  description: 'Browse 22 authentic Taoist talismans hand-written by Longhu Mountain gaogong priests. Personalized blessing rituals with filmed consecration proof.',
};

export default function TalismansPage() {
  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">22 Talismans</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Shop 22 Hand-Written Taoist Talismans</h1>
        <p className="text-gray-600 max-w-3xl mb-2">
          Buy authentic Fulu hand-written on ritual paper by a gaogong priest of Longhu Mountain Tianshi Mansion — <strong>personalized with your name</strong>, ritual-blessed with <strong>filmed consecration proof</strong>, ships to US &amp; Europe.
        </p>
        <p className="text-sm text-gray-500 italic mb-12">二十二符，均由龙虎山天师府高功道士亲书；坛前开光，仪式摄录为证。</p>

        {categories.map((cat) => (
          <section key={cat.id} id={`cat-${cat.id}`} className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold">{cat.name}</h2>
            </div>
            <p className="text-gray-600 mb-6">{cat.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {talismans.filter(t => t.category === cat.id).map((t) => {
                const imgSrc = categoryImages[t.category] || '/images/talisman-placeholder.svg';
                return (
                  <Link key={t.id} href={`/talismans/${t.slug}`} className="card hover:border-gold/50 group">
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-20 shrink-0 rounded overflow-hidden border border-gray-100">
                        <Image
                          src={imgSrc}
                          alt={t.name}
                          width={64}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{t.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">{t.chineseName}</p>
                        <p className="text-sm text-gray-600 mb-1 line-clamp-2">{t.description}</p>
                        <p className="font-bold text-accent text-sm">From ${t.price}</p>
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
