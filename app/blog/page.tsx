import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const posts = siteContent.blog.posts as any;
const b = siteContent.blog;

export const metadata = { title: 'Blog | Sacred Tao Wisdom', description: 'Guides and insights on Taoist practices, talismans, Qi Men, and spiritual living.' };

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{b.heading}</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">{b.subheading}</p>
        <div className="space-y-8">
          {Object.entries(posts).map(([slug, post]: [string, any]) => (
            <Link key={slug} href={'/blog/' + slug} className="card hover:border-gold/50 group block">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
