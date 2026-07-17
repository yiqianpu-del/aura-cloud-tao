import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const l = siteContent.learn;

export const metadata = {
  title: 'Learn | Sacred Tao Wisdom',
  description: 'Explore Taoist culture, read our blog, and find answers to common questions.',
};

export default function LearnPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{l.heading}</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">{l.subheading}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {l.sections.map((s: any) => (
            <Link key={s.href} href={s.href} className="card hover:border-gold/50 group text-center gradient-border">
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{s.title}</h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
