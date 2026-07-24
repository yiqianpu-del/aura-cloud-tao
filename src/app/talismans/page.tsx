import Link from 'next/link';
import { getTalismans, getTalismansCount } from '@/lib/sanity.queries';
import Pagination from '@/components/pagination';
import ConnectCta from '@/components/connect-cta';

const PER_PAGE = 12;

export const revalidate = 3600;

export default async function TalismansPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(1, parseInt(searchParams.page || '1') || 1);
  const [talismans, total] = await Promise.all([getTalismans(page, PER_PAGE), getTalismansCount()]);
  const safeTalismans = talismans || [];
  const totalPages = Math.max(1, Math.ceil((total || 0) / PER_PAGE));

  const iconMap: Record<string, string> = { wealth: '✨', protection: '🛡', health: '🪷', luck: '〰' };

  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <span className="text-ink">Talismans</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hand-Written Taoist Talismans</h1>
        <p className="text-xl text-gray-600 mb-12">Authentic talismans — each hand-written and consecrated at Longhu Mountain</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeTalismans.map((t: any) => (
            <Link key={t._id} href={`/talismans/${t.slug}`} className="card hover:border-gold/50 group">
              <div className="h-48 bg-cream rounded-sm overflow-hidden mb-4 flex items-center justify-center">
                {t.imageUrl ? (
                  <img src={t.imageUrl} alt={t.name} className="w-full h-full object-contain p-4" />
                ) : (
                  <span className="text-4xl">{iconMap[t.category] || '☯'}</span>
                )}
              </div>
              <span className="text-xs text-gold uppercase tracking-wider">{t.category}</span>
              <h2 className="font-bold text-lg group-hover:text-accent transition-colors mb-1">{t.name}</h2>
              <p className="text-xs text-gray-500 italic mb-2">{t.chineseName}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{t.description}</p>
              <p className="font-bold text-accent">{'$' + t.price}</p>
            </Link>
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} basePath="/talismans" />
        <ConnectCta source="talismans" variant="banner" />
      </div>
    </div>
  );
}
