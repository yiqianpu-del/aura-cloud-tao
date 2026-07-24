import Link from 'next/link';
import ConnectCta from '@/components/connect-cta';

export default function BeginnersPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/culture" className="hover:text-accent">Culture</Link> / <span className="text-ink">For Beginners</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Taoism for Beginners</h1>
        <p className="text-gray-600 mb-8">A gentle introduction to Taoist philosophy, practices, and how to start your journey.</p>
        <div className="prose max-w-none">
          <h2>What is Taoism?</h2>
          <p>Rooted in the Tao Te Ching — a text written over 2,500 years ago — Taoism sees the universe as a living, flowing harmony. At its heart lies a simple but profound idea: the Tao (the Way) is the source and rhythm of all things, and the best life is one lived in accord with it.</p>
          <h2>Start Here</h2>
          <ul>
            <li><strong>Read the Tao Te Ching</strong> — Start with a good translation (Stephen Mitchell or Gia-Fu Feng)</li>
            <li><strong>Practice Wu Wei</strong> — The art of effortless action. Do less, but be fully present.</li>
            <li><strong>Try Taoist Meditation</strong> — Begin with 5 minutes of quiet breathing each morning.</li>
          </ul>
        </div>
        <ConnectCta source="culture-beginners" variant="banner" />
      </div>
    </div>
  );
}
