'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site-config';

const phrases = [
  "Your name. Your intention. Hand-written on sacred paper at Longhu Mountain.",
  "A Taoist priest performs a ritual for you — filmed from altar to seal.",
  "No storefront. No payment on site. Just a conversation on WhatsApp.",
  "Qi Men divination, Feng Shui strategy, and karmic ceremonies — delivered worldwide.",
];

const trustSignals = [
  { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', label: '20+ Year Tradition', sub: 'Longhu Mountain Lineage' },
  { icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', label: 'Full Ritual Video', sub: 'Sent Before Shipping' },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Nationwide Delivery', sub: 'FedEx / DHL to Your Door' },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink overflow-hidden">
      {/* Background image — full bleed, atmospheric */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-altar.jpg"
          alt=""
          fill
          className="object-cover opacity-35 scale-105"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/85"></div>
      </div>

      {/* Animated particle overlay — subtle drifting energy */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1440}
              cy={Math.random() * 900}
              r={1 + Math.random() * 2.5}
              fill="#c9a96e"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${3 + Math.random() * 4}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl">
          {/* Authority badge — lineage signal */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/20 rounded-sm px-4 py-1.5 mb-6 hover:bg-white/15 transition-colors">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
              Longhu Mountain, China — Established 142 AD
            </span>
          </div>

          {/* Primary headline — benefit-driven */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            A Taoist Ritual,
            <br />
            <span className="text-gold">Performed for You</span>
          </h1>

          {/* Sub-headline — clear what you get */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4">
            Your name inscribed on sacred paper. Blessed at an authentic Taoist altar in China.
            <span className="block text-gold text-base mt-1">Full ceremony video sent before anything ships.</span>
          </p>

          {/* Rotating phrase — hooks different angles */}
          <p key={idx} className="text-sm md:text-base text-gray-400 italic max-w-xl mb-8 min-h-[1.5rem] transition-opacity duration-500 border-l-2 border-gold/40 pl-4">
            {phrases[idx]}
          </p>

          {/* Trust signals grid */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            {trustSignals.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{s.label}</p>
                  <p className="text-gray-500 text-xs">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              className="btn btn-gold btn-lg text-base inline-flex items-center gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Start on WhatsApp
            </a>
            <Link href="/services" className="btn btn-outline btn-lg text-base text-white border-white/30 hover:bg-white hover:text-ink hover:border-white transition-all">
              Explore All Services
            </Link>
            <Link href="/learn" className="btn btn-outline btn-lg text-base text-white/70 border-white/20 hover:border-white/50 hover:text-white transition-all">
              What Is Taoism?
            </Link>
          </div>

          {/* Social proof row */}
          <div className="mt-10 flex items-center gap-3 text-gray-500 text-xs">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-accent/60 border-2 border-ink flex items-center justify-center text-[10px] font-bold text-white">
                  {['MK','JL','AS','TR'][i-1]}
                </div>
              ))}
            </div>
            <span>Trusted by seekers across <span className="text-gold font-semibold">12+ countries</span> — join them</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent animate-bounce"></div>
      </div>
    </section>
  );
}
