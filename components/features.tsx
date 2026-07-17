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
    tagline: "Performed at the altar — filmed and delivered to you worldwide",
    desc: "Karmic release ceremonies that clear recurring life patterns. Pet soul transition rituals for beloved companions. Spatial Qi alignment for your home. Every ritual is performed live at Longhu Mountain with your name and intention inscribed on sacred paper — and the full ceremony is filmed as proof.",
    badge: "Karmic Release · Pet Memorial · Qi Alignment",
    cta: "Book a Ritual",
    bgColor: "from-amber-900/40 to-ink/60",
  },
  {
    href: "/divination",
    image: "/images/feature-divination.jpg",
    title: "Qi Men Divination",
    titleCn: "奇门问卦",
    tagline: "Ancient Chinese strategic oracle — more precise than tarot",
    desc: "Qi Men Dun Jia maps the energy patterns of time and space. Our card readings reveal the hidden dynamics of any situation — relationships, career, decisions, timing. Includes personal energy audits and classical Chinese face and palm reading sessions via video call.",
    badge: "Card Readings · Energy Audits · Physiognomy",
    cta: "Get a Reading",
    bgColor: "from-red-900/30 to-ink/60",
  },
  {
    href: "/feng-shui",
    image: "/images/feature-fengshui.jpg",
    title: "Feng Shui Consultation",
    titleCn: "风水堪舆",
    tagline: "Remote energy analysis — no home visit needed",
    desc: "Traditional Feng Shui enhanced by Qi Men Dun Jia strategic positioning. We analyze your floor plan, the energy signature of your space, and the birth information of occupants to give you room-by-room recommendations for prosperity, harmony, and health. Includes a full video consultation.",
    badge: "Home Analysis · Commercial · Land Assessment",
    cta: "Consult a Master",
    bgColor: "from-green-900/30 to-ink/60",
  },
  {
    href: "/shop",
    image: "/images/feature-shop.jpg",
    title: "Sacred Objects",
    titleCn: "文创商城",
    tagline: "Each piece consecrated at the altar before it reaches you",
    desc: "Limited edition Qi Men Dun Jia oracle deck — 81 cards translating ancient Chinese strategy into an intuitive divination tool. Hand-painted talisman art for your home. The Mirror of Self-Discovery for classical face reading. SoulCompanion Memorial Chests. All hand-blessed at Longhu Mountain.",
    badge: "Card Deck · Talisman Art · Physiognomy Mirror",
    cta: "Browse the Collection",
    bgColor: "from-gold/30 to-ink/60",
  },
];

export default function Features() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-ink py-16 md:py-24 overflow-hidden">
      {/* Subtle decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ancient Taoist Wisdom for
            <span className="text-gold block">Your Modern Life</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Four ways to connect with authentic Taoist tradition — from sacred ceremonies at Longhu Mountain to personal divination sessions and hand-blessed spiritual objects. Every service comes with proof, transparency, and a direct line to your priest.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {sections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative h-72 md:h-96 overflow-hidden rounded-sm"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Background image */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${s.bgColor} transition-opacity duration-500`}></div>

              {/* Additional fade on hover for depth */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Badge / category tags */}
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1 font-semibold">{s.titleCn}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-2">{s.tagline}</p>

                {/* Hover-expanded description */}
                <div className={`max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500`}>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {s.badge.split(' · ').map((b) => (
                      <span key={b} className="text-[10px] bg-white/10 backdrop-blur-sm text-gold border border-gold/20 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <span className="text-gold text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  {s.cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">
            Not sure what you need? <span className="text-gray-300">Tell us what&apos;s on your mind — we&apos;ll guide you.</span>
          </p>
          <a
            href="https://wa.me/85256151619?text=Hi%2C%20I%27m%20exploring%20your%20Taoist%20services%20and%20would%20like%20some%20guidance%20on%20what%20might%20be%20right%20for%20me."
            target="_blank"
            className="btn btn-gold btn-lg inline-flex items-center gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Talk to Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
