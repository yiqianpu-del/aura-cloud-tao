import Link from 'next/link';

interface FeatureCard {
  title: string;
  titleCn?: string;
  desc?: string;
  icon?: string;
  description?: string;
  href: string;
}

interface FeaturesProps {
  heading?: string;
  subheading?: string;
  chineseSub?: string;
  cards?: FeatureCard[];
}

export default function Features({ heading, subheading, chineseSub, cards }: FeaturesProps) {
  if (!cards?.length) {
    // Fallback: render basic structure
    return (
      <section className="section bg-white">
        <div className="container">
          {heading && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{heading}</h2>}
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{heading}</h2>
        <p className="section-sub mb-2">{subheading}</p>
        {chineseSub && <p className="text-center text-sm text-gray-500 italic mb-12">{chineseSub}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((s) => (
            <Link key={s.href} href={s.href} className="card group hover:border-gold/50 text-center gradient-border">
              {s.icon && <span className="text-3xl block mb-2">{s.icon}</span>}
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-xs text-gray-500 italic mb-2">{s.titleCn}</p>
              <p className="text-sm text-gray-600">{s.desc || s.description}</p>
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
