import Link from 'next/link';

export const metadata = { title: 'Community | Sacred Tao Wisdom', description: 'Join the Sacred Tao Wisdom community — daily practices, meditation, forum discussions, and events.' };

const sections = [
  { slug: 'practices', title: 'Daily Practices', icon: '🪷', desc: 'Simple Taoist practices to incorporate into your daily life' },
  { slug: 'meditation', title: 'Meditation Guides', icon: '🧘', desc: 'Taoist meditation techniques — sitting, moving, and breathing' },
  { slug: 'forum', title: 'Community Forum', icon: '💬', desc: 'Connect with fellow seekers — share experiences and insights' },
  { slug: 'events', title: 'Events & Workshops', icon: '🗓', desc: 'Upcoming rituals, workshops, and community gatherings' },
];

export default function CommunityPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Community</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-4">Join a growing community of seekers on the Taoist path</p>
        <p className="text-sm text-gray-500 italic text-center mb-12">Connect, learn, and grow together</p>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <Link key={s.slug} href={`/community/${s.slug}`} className="card hover:border-gold/50 group text-center">
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{s.title}</h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
