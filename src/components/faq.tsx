import siteContent from '@/data/siteContent.json';

export default function FAQ() {
  const data = siteContent.homepage.faq;
  return (
    <section className="section bg-cream" id="faq">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{data.heading}</h2>
        <p className="section-sub mb-12">{data.subheading}</p>
        <div className="space-y-4">
          {data.faqs.map((faq: any, i: number) => (
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