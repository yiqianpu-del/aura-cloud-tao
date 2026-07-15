import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

const topics: Record<string, { title: string, content: string[] }> = {
  philosophy: { title: 'Taoist Philosophy', content: [
    'Taoist philosophy begins with the Tao (道) — the ineffable, natural way of the universe. It is not a religion with a single founder or doctrine, but a 2,500-year-old tradition of observing nature and aligning with its rhythms.',
    'The core concept is Wu Wei (无为) — effortless action. Not laziness or passivity, but acting in harmony with the natural flow of events, like water finding its way around a rock.',
    'Yin and Yang (阴阳) represent the interdependent opposites that create all phenomena — light/dark, active/passive, masculine/feminine. Harmony comes from balance, not from eliminating one or the other.',
    'The Three Treasures — compassion (慈), frugality (俭), and humility (不敢为天下先) — are the ethical foundations of Taoist practice.',
    'For modern seekers, Taoist philosophy offers a path away from the constant striving and anxiety of contemporary life, toward a simpler, more natural way of being.',
  ]},
  history: { title: 'History of Taoism', content: [
    'Taoism traces its origins to the 6th century BCE and the legendary sage Laozi (老子), author of the Tao Te Ching (道德经). However, many elements of Taoist practice draw from even older shamanic traditions of ancient China.',
    'During the Warring States period (475-221 BCE), Taoist philosophy flourished alongside Confucianism and Legalism. The Zhuangzi (庄子) was written during this time, offering a playful, poetic counterpoint to the Tao Te Ching.',
    'The Celestial Masters (天师道) movement, founded by Zhang Daoling in 142 CE, established Taoism as an organized religion with rituals, priesthood, and talismanic traditions.',
    'During the Tang Dynasty (618-907 CE), Taoism was the state religion. The imperial court patronized Taoist monasteries and ritual specialists. Many of the talisman traditions practiced today were codified during this period.',
    'Longhu Mountain (龙虎山) became the seat of the Celestial Masters tradition in the 10th century and remains one of the most important Taoist centers today. Our gaogong priest is trained in this unbroken lineage.',
  ]},
  scriptures: { title: 'Sacred Scriptures', content: [
    'The Taoist canon (道藏) contains over 1,400 texts, but the foundational scriptures accessible to modern seekers are the Tao Te Ching and the Zhuangzi.',
    'The Tao Te Ching (道德经), with its 81 concise chapters, is the most translated Chinese text after the Bible. Its opening words — "The Tao that can be told is not the eternal Tao" — point to the mystery at the heart of existence.',
    'The Zhuangzi (庄子) is a collection of stories, parables, and philosophical dialogues that challenge conventional thinking and invite us to see the world from a wider perspective. The story of the butterfly dream is its most famous passage.',
    'The I Ching (易经), while predating Taoism, is deeply integrated into Taoist practice. Its system of hexagrams and changes reflects the Taoist understanding of constant transformation.',
    'For those beginning their study, we recommend starting with the Tao Te Ching (Stephen Mitchell or Gia-Fu Feng translations), then moving to the Zhuangzi, and exploring the I Ching for divination.',
  ]},
  deities: { title: 'Taoist Deities', content: [
    'Taoism has a rich celestial hierarchy that can seem complex to newcomers. At its head are the Three Pure Ones (三清) — the highest manifestations of the Tao itself.',
    'The Jade Emperor (玉皇大帝) governs the celestial bureaucracy and is perhaps the most well-known Taoist deity in popular culture. He oversees a vast pantheon of gods, immortals, and functionaries.',
    'The Eight Immortals (八仙) are legendary figures who achieved immortality through Taoist practice. Each represents a different path and personality — from the eccentric Iron Crutch Li to the gentle He Xiangu.',
    'Local gods and city gods (城隍) watch over communities, while door gods (门神) protect homes from negative influences. Kitchen gods (灶神) report on household behavior to the Jade Emperor each year.',
    'For our services, the key deities invoked are the Three Pure Ones, the Celestial Masters, and the specific guardians associated with talismanic writing and ritual practice.',
  ]},
  beginners: { title: 'For Beginners', content: [
    'Welcome to Taoism. If you are new to this path, here is everything you need to know to start exploring.',
    'First: Taoism is not a religion that demands belief. It is a way of observing and harmonizing with nature. You do not need to join anything or convert to benefit from its wisdom.',
    'Start with the Tao Te Ching. Read one chapter a day. Sit with it. Do not try to understand it intellectually — let it work on you the way a landscape works on a traveler.',
    'Practice Wu Wei in small ways: notice where you are forcing things and try a gentler approach. Let water be your teacher — it yields yet wears down stone.',
    'If you are drawn to ritual, consider a Qi Men reading to understand your current energy, or a talisman for protection. These are not about superstition — they are tools for focusing intention and aligning with natural forces.',
    'Above all, be patient. Taoism is not a quick fix. It is a lifelong practice of returning to simplicity, listening to silence, and finding the extraordinary in the ordinary.',
  ]},
};

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = topics[params.slug];
  if (!t) return {};
  return { title: `${t.title} | ${siteConfig.name}`, description: `Explore ${t.title} in Taoist tradition.` };
}

export default function CultureDetail({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug];
  if (!topic) {
    return <div className="section"><div className="container text-center"><h1 className="text-2xl font-bold mb-4">Topic not found</h1><Link href="/culture" className="text-accent hover:underline">← Back to Culture</Link></div></div>;
  }

  return (
    <div className="section">
      <article className="container max-w-2xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/culture" className="hover:text-accent">Culture</Link> / <span className="text-ink">{topic.title}</span></nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{topic.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">{topic.content.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className="mt-12 pt-8 border-t border-gray-200"><Link href="/culture" className="text-accent hover:underline">← Back to all topics</Link></div>
      </article>
    </div>
  );
}
