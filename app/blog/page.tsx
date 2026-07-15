import Link from 'next/link';

export const metadata = {
  title: 'Taoist Wisdom Blog',
  description: 'Guides, insights, and resources on Taoist practices, talismans, and spiritual living.',
};

const posts = [
  { slug: "what-is-taoism", title: "What Is Taoism in Simple Terms?", date: "2026-05-15", excerpt: "Taoism is an ancient Chinese spiritual path focused on harmony with nature, inner peace, and balanced energy (Qi)." },
  { slug: "how-to-wear-talisman", title: "How to Wear a Talisman Correctly", date: "2026-06-16", excerpt: "Traditional guidance on wearing and caring for your blessed Taoist talisman." },
  { slug: "red-flags-fake-talismans", title: "5 Red Flags When Buying Taoist Talismans Online", date: "2026-06-10", excerpt: "How to distinguish authentic hand-written Fulu from mass-printed souvenirs." },
  { slug: "tai-sui-2026-guide", title: "Tai Sui 2026: Your Complete Guide", date: "2026-06-16", excerpt: "Understanding the Year Lord and how to harmonize with your zodiac sign." },
  { slug: "filmed-consecration-trust", title: "Why Filmed Consecration Proof Matters for Online Orders", date: "2026-06-08", excerpt: "Video proof is the only way to verify an authentic Taoist blessing ritual." },
  { slug: "taoist-meditation-beginners", title: "Taoist Meditation for Beginners", date: "2026-05-20", excerpt: "Simple breathing techniques and mindfulness practices from Taoist tradition." },
];

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Taoist Wisdom Blog</h1>
        <p className="text-gray-600 mb-12">Guides, insights, and resources on Taoist practices, talismans, and spiritual living.</p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:border-gold/50 group">
              <p className="text-xs text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
