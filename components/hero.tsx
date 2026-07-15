import Image from 'next/image';
import { siteConfig } from '@/data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink overflow-hidden">
      <Image src="/images/altar-scene.svg" alt="" fill className="object-cover opacity-40" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/80"></div>
      <div className="container relative z-10 px-4 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Longhu Mountain Tianshi Mansion (龙虎山天师府)</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Ancient Taoist Wisdom<br />
          <span className="text-gold">for Modern Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          Authentic ritual services · Qi Men divination · Feng Shui consultation · Spiritual products
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm leading-relaxed">
          Discover hand-written Taoist talismans, Qi Men Dun Jia card readings, space energy harmonization, and sacred ceremonies — all performed by a <strong className="text-white">gaogong priest of Longhu Mountain Tianshi Mansion</strong>, with <strong className="text-white">filmed ritual proof</strong>.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg text-base">Begin Your Journey → WhatsApp</a>
          <a href="/services" className="btn btn-outline btn-lg text-base text-white border-white hover:bg-white hover:text-ink">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
