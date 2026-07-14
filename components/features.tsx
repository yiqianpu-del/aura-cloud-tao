import Link from 'next/link';
import { categories } from '@/data/talismans';

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Seekers Trust These Taoist Practices</h2>
        <p className="section-sub mb-2">One practitioner. One altar. One talisman for your Qi energy and intentions — not mass-produced.</p>
        <p className="text-center text-sm text-gray-500 italic mb-12">一人一坛一符，正统科仪，非工厂印制</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/talismans#cat-${cat.id}`} className="card group hover:border-gold/50">
              <div className="text-4xl mb-4">{cat.icon}</div>
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
