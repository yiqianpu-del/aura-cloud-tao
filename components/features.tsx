'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const sections = [
  {
    href: "/services",
    image: "/images/feature-ritual.jpg",
    title: "Sacred Rituals",
    titleCn: "法事服务",
    tagline: "Performed at the altar — filmed and delivered to you",
    desc: "Karmic release ceremonies, pet soul transition, and space energy alignment. Your name and intention are inscribed on sacred paper and blessed at Longhu Mountain.",
    cta: "Book a Ritual →",
    bgColor: "from-amber-900/40 to-ink/60",
  },
  {
    href: "/divination",
    image: "/images/feature-divination.jpg",
    title: "Qi Men Divination",
    titleCn: "奇门问卦",
    tagline: "Ancient Chinese strategic oracle — now in card format",
    desc: "Not your average tarot. Qi Men Dun Jia maps the energy patterns of time and space. Card readings, personal energy audits, and classical face/palm reading sessions via video call.",
    cta: "Get a Reading →",
    bgColor: "from-red-900/30 to-ink/60",
  },
  {
    href: "/feng-shui",
    image: "/images/feature-fengshui.jpg",
    title: "Feng Shui Consultation",
    titleCn: "风水堪舆",
    tagline: "Remote space energy analysis with Qi Men precision",
    desc: "Traditional Feng Shui enhanced by Qi Men Dun Jia strategic positioning. We analyze your floor plan and the energy signature of your space — no home visit needed.",
    cta: "Consult a Master →",
    bgColor: "from-green-900/30 to-ink/60",
  },
  {
    href: "/shop",
    image: "/images/feature-shop.jpg",
    title: "Spiritual Products",
    titleCn: "文创商城",
    tagline: "Each piece consecrated with your intention before shipping",
    desc: "Limited edition Qi Men card deck, hand-painted talisman art for your home, classical physiognomy mirror, and the Spatial Qi Aligner — all blessed at the altar.",
    cta: "Browse the Shop →",
    bgColor: "from-gold/30 to-ink/60",
  },
];

export default function Features() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="section bg-ink py-16 md:py-24">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ancient Taoist Practices for Modern Life
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From sacred rituals performed at Longhu Mountain to personal divination sessions — every service is rooted in authentic tradition and delivered with transparency.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {sections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative h-64 md:h-80 overflow-hidden rounded-sm"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Background */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.bgColor} transition-opacity duration-500`}></div>

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{s.titleCn}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{s.tagline}</p>

                {/* Expanded description on hover */}
                <div className={`max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500`}>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                </div>

                <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {s.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">Not sure where to start? Tell us what you are looking for.</p>
          <a
            href="https://wa.me/85256151619?text=Hi%2C%20I%27m%20interested%20in%20your%20Taoist%20services%20but%20not%20sure%20where%20to%20start.%20Can%20you%20help%20me%20choose%3F"
            target="_blank"
            className="btn btn-gold btn-lg"
          >
            Talk to Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
