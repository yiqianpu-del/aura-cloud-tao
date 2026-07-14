import Link from 'next/link';
import { talismans, categories } from '@/data/talismans';

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
              {talismans.filter(t => t.category === cat.id).map((t) => (
                <Link key={t.id} href={`/talisman/${t.slug}`} className="card hover:border-gold/50 group">
                  <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{t.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{t.chineseName}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{t.description}</p>
                  <p className="font-bold text-accent">From ${t.price}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
