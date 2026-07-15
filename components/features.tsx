import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/talismans';

const categoryImages: Record<string, string> = {
  wealth: '/images/talisman-wealth.svg',
  protection: '/images/talisman-protection.svg',
  health: '/images/talisman-health.svg',
  luck: '/images/talisman-luck.svg',
};

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Seekers Trust These Taoist Practices</h2>
        <p className="section-sub mb-2">One practitioner. One altar. One talisman for your Qi energy and intentions — not mass-produced.</p>
        <p className="text-center text-sm text-gray-500 italic mb-12">一人一坛一符，正统科仪，非工厂印制</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/talismans#cat-${cat.id}`} className="card group hover:border-gold/50 overflow-hidden">
              <div className="h-32 -mx-6 -mt-6 mb-4 overflow-hidden bg-gray-50 relative">
                <Image
                  src={categoryImages[cat.id] || '/images/talisman-placeholder.svg'}
                  alt={cat.name}
                  width={200}
                  height={128}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <span className="absolute bottom-2 left-3 text-2xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{cat.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{cat.description}</p>
              <p className="text-xs text-gray-400 italic">查看 {cat.name} →</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/85256151619?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Taoist%20rituals" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Receive Your Blessed Talisman
          </a>
        </div>
      </div>
    </section>
  );
}
