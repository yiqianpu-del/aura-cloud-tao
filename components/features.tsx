import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

export default function Features() {
  const f = siteContent.homepage.features;
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{f.heading}</h2>
        <p className="section-sub mb-2">{f.subheading}</p>
        <p className="text-center text-sm text-gray-500 italic mb-12">{f.chineseSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {f.sections.map((s: any) => (
            <Link key={s.href} href={s.href} className="card group hover:border-gold/50 text-center gradient-border">
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-xs text-gray-500 italic mb-2">{s.titleCn}</p>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/api/redirect" className="btn btn-gold">Begin Your Journey</a>
        </div>
      </div>
    </section>
  );
}
