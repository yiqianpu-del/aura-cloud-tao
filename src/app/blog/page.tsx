import Link from 'next/link';
import { getPosts, getPostsCount } from '@/lib/sanity.queries';
import Pagination from '@/components/pagination';
import ConnectCta from '@/components/connect-cta';

const PER_PAGE = 12;

export const revalidate = 3600;

export const metadata = {
  title: 'Blog | Sacred Tao Wisdom',
  description: 'Guides and insights on Taoist practices, talismans, Qi Men, Feng Shui, and spiritual living.',
};

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(1, parseInt(searchParams.page || '1') || 1);
  const [posts, total] = await Promise.all([getPosts(page, PER_PAGE), getPostsCount()]);
  const safePosts = posts || [];
  const totalPages = Math.max(1, Math.ceil((total || 0) / PER_PAGE));

  return (
    <main>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 font-serif">Sacred Tao Wisdom Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Guides and insights on Taoist practices, talismans, Qi Men, Feng Shui, and spiritual living.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 pb-8" aria-label="All articles">
        <div className="space-y-6">
          {safePosts.map((post: any) => (
            <article key={post._id}>
              <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-lg border border-gray-200 p-6 hover:border-gold/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h2 className="text-lg font-bold text-ink group-hover:text-accent transition-colors font-serif">{post.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-gray-400 shrink-0">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {(post.tags || []).slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-xs bg-cream text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                  <span className="text-xs text-accent font-medium">{post.category}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />

        <ConnectCta source="blog" variant="banner" />
      </section>
    </main>
  );
}
