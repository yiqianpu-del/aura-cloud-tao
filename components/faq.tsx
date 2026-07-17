import { getHomeFAQ } from '@/lib/content';

export default function FAQ() {
  const data = getHomeFAQ();

  const faqs = data?.faqs || [
    { q: "How do I know the talisman is really hand-written?", a: "Check your order video: you should see brush and ink on ritual paper, your inscribed name, and the full consecration sequence." },
    { q: "How do I reserve a ritual slot?", a: "Tap Book on WhatsApp on any package page." },
    { q: "How long does delivery take?", a: "Your ritual is performed within 3–5 business days after confirmation." },
    { q: "Can I return or refund my order?", a: "Each talisman is personalized and consecrated for you." },
  ];

  return (
    <section className="section bg-cream" id="faq">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{data?.sectionTitle || 'Frequently Asked Questions'}</h2>
        <p className="section-sub mb-12">{data?.sectionSubtitle || 'Everything you need to know about ordering an authentic Taoist talisman'}</p>

        <div className="space-y-4">
          {faqs.map((faq: any, i: number) => (
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
