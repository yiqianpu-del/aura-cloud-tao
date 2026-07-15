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
  "red-flags-fake-talismans": {
    title: "5 Red Flags When Buying Taoist Talismans Online",
    date: "2026-06-10",
    content: [
      "The growing interest in Taoist talismans has brought more sellers online — and with them, unfortunately, more printed souvenirs sold as 'blessed.' Here are five red flags to watch for.",
      "1. No video of the consecration. An authentic talisman is blessed in a live ritual. If the seller cannot show you a video of your talisman being consecrated with your name, it is almost certainly not real.",
      "2. Mass-produced printing. Real Fulu is hand-written with brush and ink on ritual paper. If the talisman looks machine-printed, has perfect uniform lines, or arrives in bulk packaging, it is a souvenir, not a consecrated item.",
      "3. No lineage or tradition to cite. Authentic Taoist priests come from established lineages — such as Longhu Mountain Tianshi Mansion or Maoshan. If the seller cannot name their tradition or teacher, proceed with caution.",
      "4. One-price-fits-all. Genuine talismans are personalized to each person's name and intention. If the seller offers the exact same item to everyone without asking about your purpose, the ritual is not tailored.",
      "5. Unrealistic promises. No ethical practitioner guarantees specific outcomes like 'get rich in 30 days' or 'cure illness.' A talisman is a blessing — it works with your effort and intention, not as a magic switch."
    ]
  },
  "tai-sui-2026-guide": {
    title: "Tai Sui 2026: Your Complete Guide",
    date: "2026-06-16",
    content: [
      "In Taoist astrology, Tai Sui (太岁) is the Year Lord — a powerful celestial deity who governs the energies of each year. 2026 is the Year of the Fire Horse (丙午), and certain zodiac signs are said to be in conflict with Tai Sui.",
      "Which zodiac signs are affected in 2026? Those born in the Year of the Rat (子), Ox (丑), Horse (午), and Rabbit (卯) are traditionally considered to be in 'Fan Tai Sui' — meaning their year is in direct opposition or conflict with the Year Lord.",
      "What does this mean? When your zodiac sign conflicts with Tai Sui, you may experience more obstacles, unexpected changes, or a general sense of things not going smoothly. This is not a punishment — it is simply the natural energy dynamic of that year.",
      "How can you harmonize? The Tai Sui Talisman (太岁符) is a traditional Taoist remedy. It is written and consecrated specifically to appease the Year Lord and resolve the conflict. Wearing it or placing it in your home can help smooth the energy for the year.",
      "Other harmonizing practices include: making offerings at a Taoist temple at the start of the year, wearing your zodiac animal's protective color (for Fire Horse year, green and red are auspicious), and performing good deeds to build positive karma.",
      "The most important thing is not to live in fear of Tai Sui. Awareness and proactive harmonization — through talismans, intention, and mindful living — transform a challenging year into one of growth and learning."
    ]
  },
  "filmed-consecration-trust": {
    title: "Why Filmed Consecration Proof Matters for Online Orders",
    date: "2026-06-08",
    content: [
      "When you order a Taoist talisman online, you are placing trust in a seller you may never meet. Filmed consecration proof is the single most reliable way to verify that your talisman is genuinely blessed.",
      "What should a proper consecration video show? The ritual should include: your name being written on the talisman paper, the lighting of incense and altar preparation, the hand-brushing of the talisman with visible brush strokes, and the final consecration prayer — all in one continuous sequence.",
      "Without video proof, you are relying on a photo of a talisman that could be one of a hundred identical printed items. A live video — especially one that shows your name being written in real time — removes all reasonable doubt.",
      "This is why every talisman from Aura Cloud Tao includes a full ritual video sent to you before shipping. You see your name. You see the brush. You see the consecration. Only then is your order dispatched.",
      "If a seller cannot or will not provide a custom video showing your specific talisman being consecrated, consider that a major red flag. The ritual is the heart of the talisman — without it, what are you really buying?"
    ]
  },
  "taoist-meditation-beginners": {
    title: "Taoist Meditation for Beginners",
    date: "2026-05-20",
    content: [
      "Taoist meditation is fundamentally different from many other meditation traditions. Rather than emptying the mind or concentrating on a single point, Taoist practice focuses on 'letting go' and 'returning to the source' — a state of natural, effortless awareness.",
      "Begin with breathing. Sit comfortably with your spine straight. Place your tongue lightly on the roof of your mouth. Breathe naturally through your nose, and simply observe the breath without trying to control it. In Taoism, this is called 'Embryonic Breathing' — breathing as the unborn child does, without effort.",
      "Next, practice 'inner smile.' Gently bring your attention to your heart center and imagine a soft, warm smile radiating from within. Let this warmth spread to your organs, your limbs, and finally outward to the world. This practice cultivates the soft, nurturing energy that Taoism values.",
      "Another foundational practice is 'listening to silence.' Sit quietly and turn your attention to the subtle sounds around you — the hum of a fan, birds outside, your own heartbeat. Then, listen to the silence between sounds. This helps you access the quiet, boundless awareness that Taoism calls the 'uncarved block' (Pu, 朴).",
      "Start with just five minutes a day. Consistency matters far more than duration. Over time, you will find that this effortless, accepting awareness begins to permeate your daily life — not as a separate practice, but as a natural way of being."
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
