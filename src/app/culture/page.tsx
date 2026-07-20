import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const c = siteContent.culture;

export const metadata = { title: 'Taoist Culture | Sacred Tao Wisdom', description: 'Explore Taoist philosophy, history, scriptures, deities — a beginner-friendly gateway to ancient wisdom.' };

export default function CulturePage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{c.heading}</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">{c.subheading}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {c.topics.map((t: any) => (
            <Link key={t.slug} href={'/culture/' + t.slug} className="card hover:border-gold/50 group text-center">
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