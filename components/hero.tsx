import Image from 'next/image';
import { siteConfig } from '@/data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink overflow-hidden">
      <Image
        src="/images/altar-scene.svg"
        alt=""
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/80"></div>

      <div className="container relative z-10 px-4 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Longhu Mountain Tianshi Mansion (龙虎山天师府)</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Authentic Hand-Written<br />
          <span className="text-gold">Taoist Talismans</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
          Personalized Blessing Ritual · Filmed Consecration · Worldwide Shipping
        </p>
        <p className="text-base text-gray-500 mb-2 italic">古老道家祝福仪式 · 内平安与气能量</p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm leading-relaxed">
          Buy an <strong className="text-white">authentic hand-written Taoist talisman</strong> — not printed. A gaogong (高功) priest of Longhu Mountain Tianshi Mansion inscribes your name and intention; full consecration is <strong className="text-white">filmed before shipping</strong>.
        </p>
        <p className="text-xs text-gray-500 mb-4">Gaogong priest · Hand-written Fulu · Video proof · Limited daily rituals</p>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg text-base">
          Reserve My Blessed Talisman
        </a>
      </div>
    </section>
  );
}
