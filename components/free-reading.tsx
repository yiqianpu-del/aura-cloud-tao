'use client';
import { useState } from 'react';

interface FreeReadingProps {
  /** 组件变体 */
  variant?: 'hero' | 'section' | 'full';
}

const WA_LINK = 'https://wa.me/85256151619';

export default function FreeReading({ variant = 'section' }: FreeReadingProps) {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // 拼接 WhatsApp 消息
    const msg = encodeURIComponent(
      `Hi, I'd like a free Qi Men Quick Reading.%0A%0A` +
      `Name: ${name.trim()}%0A` +
      `Question: ${question.trim() || 'General guidance'}%0A%0A` +
      `(Sent from sacred-tao-wisdom.com free reading form)`
    );

    setSubmitted(true);
    window.open(`${WA_LINK}?text=${msg}`, '_blank');
  };

  // ── Hero 变体 ──
  if (variant === 'hero') {
    return (
      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
          Not ready to book? Try this first
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-white text-sm font-medium whitespace-nowrap">
            ✦ Free Qi Men Quick Reading
          </span>
          <div className="flex-1 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50 w-full sm:w-36"
              maxLength={30}
            />
            <input
              type="text"
              placeholder="Your question (optional)"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="px-3 py-2 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50 w-full sm:w-48"
              maxLength={80}
            />
            <button
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="btn btn-gold btn-sm whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitted ? '✓ Sent on WhatsApp' : 'Get Free Reading'}
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-2">
          No commitment. Just tell us your question and we&apos;ll send a quick Qi Men insight via WhatsApp.
        </p>
      </div>
    );
  }

  // ── Section 变体（Divination 页内嵌横幅）──
  return (
    <section className="my-12 md:my-16" aria-label="Free Qi Men Reading">
      <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-ink via-gray-900 to-ink p-8 md:p-10">
        {/* Decorative accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          {/* Badge */}
          <span className="inline-block text-xs bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-sm uppercase tracking-wider mb-4 font-semibold">
            Free — No Credit Card
          </span>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Try a Free Qi Men Quick Reading
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-6">
                Not sure if Qi Men Dun Jia is for you? Get a free sample — tell us your name and
                a question on your mind, and Master Chen will send you a brief Qi Men insight
                via WhatsApp. No payment, no commitment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
                <div>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
                    maxLength={30}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your question (e.g. career, relationship, timing)"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
                    maxLength={100}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="btn btn-gold w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitted ? '✓ Opening WhatsApp...' : 'Send & Get Free Reading →'}
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-3">
                Your info stays private. We only use it to prepare your reading.
              </p>
            </div>

            {/* Right: What you get */}
            <div className="lg:w-64 bg-white/5 border border-white/10 rounded-sm p-5">
              <p className="text-gold text-xs tracking-wider uppercase mb-3 font-semibold">
                What you get
              </p>
              <ul className="space-y-2.5">
                {[
                  'Brief Qi Men energy snapshot based on your question',
                  'A key insight or timing guidance from Master Chen',
                  'Delivered via WhatsApp within 24 hours',
                  'No strings attached — upgrade anytime',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                    <svg className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
