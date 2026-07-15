import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { talismans } from '@/data/talismans';
import { siteConfig } from '@/data/site-config';

const categoryImages: Record<string, string> = {
  wealth: '/images/talisman-wealth.svg',
  protection: '/images/talisman-protection.svg',
  health: '/images/talisman-health.svg',
  luck: '/images/talisman-luck.svg',
};

export function generateStaticParams() {
  return talismans.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = talismans.find((t) => t.slug === params.slug);
  if (!t) return {};
  return {
    title: `${t.name} — ${t.chineseName} | ${siteConfig.name}`,
    description: t.description,
  };
}

export default function TalismanDetail({ params }: { params: { slug: string } }) {
  const t = talismans.find((t) => t.slug === params.slug);
  if (!t) notFound();

  const imgSrc = categoryImages[t.category] || '/images/talisman-placeholder.svg';

  return (
    <div className="section">
      <div className="container max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/talismans" className="hover:text-accent">Talismans</Link> / <span className="text-ink">{t.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square bg-cream rounded-sm flex items-center justify-center overflow-hidden border border-gray-200">
              <Image
                src={imgSrc}
                alt={t.name}
                width={400}
                height={500}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{t.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.name}</h1>
            <p className="text-sm text-gray-500 italic mb-4">{t.chineseName}</p>
            <p className="text-gray-600 mb-6">{t.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">What this talisman includes:</h3>
              <ul className="space-y-2">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-gold mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-3xl font-bold text-accent mb-2">${t.price}</p>
            <p className="text-xs text-gray-500 mb-6">+ worldwide shipping included</p>

            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg w-full text-center mb-3">
              Book on WhatsApp — Reserve Your Talisman
            </a>
            <p className="text-xs text-gray-400 text-center">Full ritual video sent before shipping. Limited daily rituals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
