import Image from 'next/image';
import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import { siteConfig } from '@/data/site-config';

export default function Hero() {
  const hero = siteContent.homepage.hero;
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink overflow-hidden">
      <Image src={hero.backgroundImage} alt="" fill className="object-cover opacity-40" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/80"></div>
      <div className="container relative z-10 px-4 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Longhu Mountain Tianshi Mansion (龙虎山天师府)</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">{hero.title}</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">{hero.subtitle}</p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm leading-relaxed">{hero.description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg text-base">{hero.ctaText} → WhatsApp</a>
          <Link href="/services" className="btn btn-outline btn-lg text-base text-white border-white hover:bg-white hover:text-ink">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
