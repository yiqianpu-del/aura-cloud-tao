import Image from 'next/image';
import Link from 'next/link';
import FreeReading from '@/components/free-reading';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, description, backgroundImage }: HeroProps) {
  const heroBg = backgroundImage || '/images/hero-altar.jpg';

  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink overflow-hidden">
      {/* Background */}
      <Image src={heroBg} alt="" fill className="object-cover opacity-35 scale-105" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/85"></div>

      {/* Subtle particle overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 1440} cy={Math.random() * 900} r={1 + Math.random() * 2} fill="#c9a96e" className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${3 + Math.random() * 3}s` }} />
          ))}
        </svg>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Authority badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/20 rounded-sm px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
              Longhu Mountain, China — Established 142 AD
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-2">{subtitle}</p>

          <p className="text-sm md:text-base text-gray-400 max-w-xl mb-6 leading-relaxed">
            {description}
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {[
              { label: '20+ Year Tradition', sub: 'Longhu Mountain' },
              { label: 'Ritual Video Proof', sub: 'Sent Before Shipping' },
              { label: 'Worldwide Delivery', sub: 'FedEx / DHL' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{s.label}</p>
                  <p className="text-gray-500 text-xs">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="/api/redirect" className="btn btn-gold btn-lg text-base inline-flex items-center gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Start on WhatsApp
            </a>
            <Link href="/services" className="btn btn-outline btn-lg text-base text-white border-white/30 hover:bg-white hover:text-ink hover:border-white transition-all">
              Explore Services
            </Link>
            <Link href="/divination" className="btn btn-outline btn-lg text-base text-white/60 border-white/15 hover:border-white/40 hover:text-white transition-all">
              Qi Men Divination
            </Link>
          </div>

          {/* Free Reading hook */}
          <FreeReading variant="hero" />
        </div>
      </div>
    </section>
  );
}
