import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import { siteConfig } from '@/data/site-config';

const topics = siteContent.culture.details as any;

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = topics[params.slug];
  if (!t) return {};
  return { title: t.title + ' | ' + siteConfig.name, description: 'Explore ' + t.title + ' in Taoist tradition.' };
}

export default function CultureDetail({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug];
  if (!topic) {
    return (
      <div className="section">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
          <Link href="/culture" className="text-accent hover:underline">← Back to Culture</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <article className="container max-w-2xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/culture" className="hover:text-accent">Culture</Link> / <span className="text-ink">{topic.title}</span></nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{topic.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">{topic.content.map((p: string, i: number) => <p key={i}>{p}</p>)}</div>
        <div className="mt-12 pt-8 border-t border-gray-200"><Link href="/culture" className="text-accent hover:underline">← Back to all topics</Link></div>
      </article>
    </div>
  );
}
