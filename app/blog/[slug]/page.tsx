import Link from 'next/link';

const posts: Record<string, { title: string, date: string, content: string[] }> = {
  "what-is-taoism": {
    title: "What Is Taoism in Simple Terms?",
    date: "2026-05-15",
    content: [
      "Taoism (道教) is an ancient Chinese spiritual and philosophical tradition that dates back over 2,500 years. At its heart is the concept of the Tao (道) — the natural, spontaneous, ever-flowing way of the universe.",
      "Unlike many Western religions, Taoism does not revolve around a single deity or a rigid set of doctrines. Instead, it invites you to observe nature, cultivate inner stillness, and align yourself with the rhythm of life itself.",
      "The core text of Taoism is the Tao Te Ching (道德经), written by the sage Laozi (老子). Its opening line — 'The Tao that can be told is not the eternal Tao' — points to the mystery at the heart of existence. Another essential text is the Zhuangzi (庄子), a collection of stories and parables that challenge conventional thinking.",
      "Taoist practice includes meditation, breath work (Qi Gong), ritual ceremonies, and the use of talismans (Fulu) — hand-written symbols that carry blessing and intention. These practices are not about worshiping an external power, but about harmonizing with the natural forces that flow through all life.",
      "For many Western seekers, Taoism offers a path of simplicity, spontaneity, and deep connection with nature — a refuge from the speed and complexity of modern life."
    ]
  },
  "how-to-wear-talisman": {
    title: "How to Wear a Talisman Correctly",
    date: "2026-06-16",
    content: [
      "A Taoist talisman (Fulu) is a sacred object that has been consecrated through ritual. Treating it with respect honors both the tradition and your own intention.",
      "Carry your talisman in a clean, dry place — a dedicated pouch, your wallet, or close to your body. Avoid placing it on the floor or in dirty areas.",
      "If your talisman is meant to be placed in your home (such as a Home Protection talisman), position it in a clean, elevated space facing outward toward the main entrance.",
      "Do not let others touch or handle your talisman. It is personalized for you and your intention.",
      "If the paper begins to age naturally over time, you may respectfully retire it by burning it with incense or placing it in running water. Contact us if you have questions about talisman care."
    ]
  },
};

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
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/blog" className="hover:text-accent">Blog</Link> / <span className="text-ink">{post.title}</span>
        </nav>
        <p className="text-sm text-gray-400 mb-2">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {post.content.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-accent hover:underline">← Back to all articles</Link>
        </div>
      </article>
    </div>
  );
}
