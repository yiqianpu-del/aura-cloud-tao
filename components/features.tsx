import Link from 'next/link';

const sections = [
  {
    href: "/services",
    icon: "🪔",
    title: "Ritual Services",
    titleCn: "法事服务",
    desc: "Karmic release, pet memorial, and space energy alignment ceremonies performed at Longhu Mountain",
  },
  {
    href: "/divination",
    icon: "🗡",
    title: "Qi Men Divination",
    titleCn: "奇门问卦",
    desc: "Ancient Chinese strategic oracle — card readings, energy audits, and classical physiognomy",
  },
  {
    href: "/feng-shui",
    icon: "☯",
    title: "Feng Shui",
    titleCn: "风水堪舆",
    desc: "Remote space energy consultation combining traditional Feng Shui with Qi Men positioning",
  },
  {
    href: "/shop",
    icon: "🎴",
    title: "Spiritual Shop",
    titleCn: "文创商城",
    desc: "Qi Men card deck, talisman art, physiognomy mirror — each item consecrated with intention",
  },
];

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Explore Our Offerings</h2>
        <p className="section-sub mb-2">Authentic Taoist practices for the modern seeker — from sacred rituals to spiritual products</p>
        <p className="text-center text-sm text-gray-500 italic mb-12">古老道家智慧，照进现代生活</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card group hover:border-gold/50 text-center gradient-border">
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-xs text-gray-500 italic mb-2">{s.titleCn}</p>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/85256151619?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Taoist%20services" target="_blank" className="btn btn-gold">Begin Your Journey</a>
        </div>
      </div>
    </section>
  );
}
