import Link from 'next/link';
import FreeReading from '@/components/free-reading';
import ConnectCta from '@/components/connect-cta';

export const metadata = {
  title: 'Free Qi Men Quick Reading | Sacred Tao Wisdom',
  description:
    'Try a free Qi Men Dun Jia reading — no credit card needed. Tell us your name and question, and Master Chen will send a brief insight via WhatsApp.',
};

export default function FreeReadingPage() {
  return (
    <div className="section">
      <div className="container">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/divination" className="hover:text-accent">Divination</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">Free Quick Reading</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-2 font-semibold">
            Free — No Credit Card
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Try a Free Qi Men<br />
            <span className="text-gold">Quick Reading</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Curious about Qi Men Dun Jia but not ready to book? Get a free sample.
            Fill in your name and a question on your mind — Master Chen will send you
            a brief Qi Men insight via WhatsApp within 24 hours.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              step: '1',
              title: 'Tell us about you',
              desc: 'Share your name and a question. That is all we need for a basic Qi Men reading.',
            },
            {
              step: '2',
              title: 'We read the energy',
              desc: 'Master Chen checks the Qi Men energy pattern based on your question and the current time window.',
            },
            {
              step: '3',
              title: 'Insight via WhatsApp',
              desc: 'You receive a brief but meaningful Qi Men insight on WhatsApp — no strings attached.',
            },
          ].map((item) => (
            <div key={item.step} className="card text-center">
              <div className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Free Reading form */}
        <FreeReading variant="section" />

        {/* What comes after */}
        <div className="bg-cream border border-gold/20 rounded-sm p-8 my-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Loved your free reading? Go deeper
          </h2>
          <p className="text-gray-600 text-sm text-center max-w-xl mx-auto mb-8">
            Your free insight is just a taste. If you want a full Qi Men Dun Jia
            reading that covers your life situation in depth, here are the options:
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'Qi Men Card Reading', price: '$179', desc: 'Full oracle session via video call', href: '/divination/qi-men-reading' },
              { name: 'Personal Energy Map', price: '$249', desc: 'Complete energy audit + report', href: '/divination/personal-energy-map' },
              { name: 'Facial & Palm Reading', price: '$179', desc: 'Classical Chinese physiognomy', href: '/divination/physiognomy' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="card group hover:border-gold/50 text-center"
              >
                <p className="text-xs text-gold uppercase tracking-wider mb-1">{item.price}</p>
                <h3 className="font-bold group-hover:text-accent transition-colors mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/divination" className="text-sm text-gold hover:text-gold/80 font-semibold underline underline-offset-2">
              View all divination services →
            </Link>
          </div>
        </div>

        {/* Still have questions? */}
        <ConnectCta source="free-reading" variant="banner" />
      </div>
    </div>
  );
}
