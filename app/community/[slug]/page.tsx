import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const sections = siteContent.community.details as any;

export function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }));
}

export default function CommunityDetail({ params }: { params: { slug: string } }) {
  const section = sections[params.slug];
  if (!section) {
    return (
      <div className="section">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-4">Section not found</h1>
          <Link href="/community" className="text-accent hover:underline">← Back to Community</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <article className="container max-w-2xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/community" className="hover:text-accent">Community</Link> / <span className="text-ink">{section.title}</span></nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{section.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">{section.content.map((p: string, i: number) => <p key={i}>{p}</p>)}</div>
        <div className="mt-12 pt-8 border-t border-gray-200"><Link href="/community" className="text-accent hover:underline">← Back to Community</Link></div>
      </article>
    </div>
  );
}
