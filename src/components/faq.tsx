interface FaqItem { q: string; a: string; }

interface FaqProps {
  heading?: string;
  subheading?: string;
  faqs?: FaqItem[];
}

export default function Faq({ heading, subheading, faqs }: FaqProps) {
  if (!faqs?.length) return null;

  return (
    <section className="section bg-cream" id="faq">
      <div className="container max-w-3xl">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{heading}</h2>}
        {subheading && <p className="section-sub mb-12">{subheading}</p>}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="font-semibold text-ink list-none flex items-center justify-between">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
