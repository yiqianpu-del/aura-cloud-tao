import Link from 'next/link';

const sections: Record<string, { title: string, content: string[] }> = {
  practices: { title: 'Daily Practices', content: [
    'Taoist practice is not about accumulating techniques — it is about returning to simplicity. Here are practices you can weave into your daily life.',
    'Morning Qi Gong (5 min): Stand with feet shoulder-width apart, knees soft. Breathe naturally and gently sway. Imagine you are a tree — rooted, yet flexible. This simple movement aligns your Qi for the day.',
    'Midday Pause (1 min): Stop whatever you are doing. Take three deep breaths. Look at the sky or a plant. Remind yourself: "I am part of something larger." This is a mini Wu Wei reset.',
    'Evening Gratitude (5 min): Light a candle or incense. Sit quietly and recall one thing that went well today. Thank the Tao. This is not about prayer — it is about training your mind to notice harmony.',
    'Weekly Nature Walk (30 min+): Walk without destination. Notice the way water flows, leaves move, birds interact. Nature is the primary teacher of Taoism. Let it teach you.',
  ]},
  meditation: { title: 'Meditation Guides', content: [
    'Taoist meditation is distinct from many other traditions. Rather than concentrating or emptying the mind, the goal is effortless awareness — a state of alert, relaxed presence.',
    'Embryonic Breathing (胎息): Sit comfortably. Place your tongue on the roof of your mouth. Breathe through your nose so softly that a feather held beneath your nostrils would not move. Imagine breathing like an unborn child — effortless and nourished.',
    'Inner Smile Meditation: Gently bring your attention to your heart. Imagine a soft smile forming there — warm, gentle, accepting. Let this smile radiate to your organs, your limbs, and finally outward to the world.',
    'Listening to Silence: Sit quietly and shift your attention from sounds to the silence between them. Do not try to silence your mind — just listen to the quiet that is already there, beneath all noise.',
    'Walking Meditation: Walk slowly, naturally. With each step, feel the earth meeting your foot. Do not count steps or control breath. Just walk, fully present, as if you had nowhere to go and nothing to do.',
  ]},
  forum: { title: 'Community Forum', content: [
    'The Sacred Tao Wisdom community forum is a place for seekers to connect, share experiences, and learn together.',
    'This space is currently building. Join our WhatsApp community to connect with fellow seekers in real time — share your meditation experiences, ask questions about our services, and grow together on the Taoist path.',
    'Topics we discuss: daily practice experiences, Qi Men reading insights, Feng Shui tips, talisman care, Taoist philosophy discussions, and upcoming events.',
    'To join the community, reach out on WhatsApp and mention you would like to be added to the community group.',
  ]},
  events: { title: 'Events & Workshops', content: [
    'We host regular online events and workshops for the community. All events are held via video call and open to everyone.',
    'Monthly Qi Men Introduction (Free): A 60-minute introduction to Qi Men Dun Jia — what it is, how it works, and how to use it for daily decisions. Held the first Saturday of each month.',
    'Quarterly Group Karmic Release Ceremony: A group version of our signature Karmic Release ritual at a reduced rate. Participants receive a group blessing talisman and ceremony video.',
    'Feng Shui Workshop (Seasonal): Learn the basics of Taoist Feng Shui for your home. Bring your floor plan and get live guidance.',
    'For upcoming event dates and registration, contact us on WhatsApp.',
  ]},
};

export function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }));
}

export default function CommunityDetail({ params }: { params: { slug: string } }) {
  const section = sections[params.slug];
  if (!section) {
    return <div className="section"><div className="container text-center"><h1 className="text-2xl font-bold mb-4">Section not found</h1><Link href="/community" className="text-accent hover:underline">← Back to Community</Link></div></div>;
  }

  return (
    <div className="section">
      <article className="container max-w-2xl">
        <nav className="text-sm text-gray-500 mb-8"><Link href="/" className="hover:text-accent">Home</Link> / <Link href="/community" className="hover:text-accent">Community</Link> / <span className="text-ink">{section.title}</span></nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{section.title}</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">{section.content.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className="mt-12 pt-8 border-t border-gray-200"><Link href="/community" className="text-accent hover:underline">← Back to Community</Link></div>
      </article>
    </div>
  );
}
