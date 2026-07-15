import Link from 'next/link';

export const metadata = { title: 'Taoist Culture | Sacred Tao Wisdom', description: 'Explore Taoist philosophy, history, scriptures, deities — a beginner-friendly gateway to ancient wisdom.' };

const topics = [
  { slug: 'philosophy', title: 'Taoist Philosophy', icon: '☯', desc: 'The core teachings of Tao — Wu Wei, Yin-Yang, and the Three Treasures' },
  { slug: 'history', title: 'History of Taoism', icon: '📜', desc: 'From Laozi and the Tao Te Ching to modern Taoist practice' },
  { slug: 'scriptures', title: 'Sacred Scriptures', icon: '📖', desc: 'Tao Te Ching, Zhuangzi, and the Taoist canon' },
  { slug: 'deities', title: 'Taoist Deities', icon: '✨', desc: 'The celestial hierarchy — from the Three Pure Ones to local gods' },
  { slug: 'beginners', title: 'For Beginners', icon: '🌱', desc: 'Start your journey — Taoist concepts explained simply' },
];

export default function CulturePage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Taoist Culture</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">Explore the rich traditions, philosophy, and practices of Taoism</p>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((t) => (
            <Link key={t.slug} href={`/culture/${t.slug}`} className="card hover:border-gold/50 group text-center">
              <span className="text-4xl mb-4 block">{t.icon}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{t.title}</h2>
              <p className="text-sm text-gray-600">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
