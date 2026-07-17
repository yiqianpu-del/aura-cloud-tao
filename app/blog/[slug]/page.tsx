import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const posts = siteContent.blog.posts as any;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) {
    return (
      <div className="section">
        <div className="container text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/blog" className="text-accent hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <article className="container max-w-2xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/blog" className="hover:text-accent">Blog</Link> / <span className="text-ink">{post.title}</span></nav>
        <p className="text-sm text-gray-400 mb-2">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">{post.content.map((p: string, i: number) => <p key={i}>{p}</p>)}</div>
        <div className="mt-12 pt-8 border-t border-gray-200"><Link href="/blog" className="text-accent hover:underline">← Back to all articles</Link></div>
      </article>
    </div>
  );
}
