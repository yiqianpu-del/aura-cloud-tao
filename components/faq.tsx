const faqs = [
  { q: "How do I know the talisman is really hand-written?", a: "Check your order video: you should see brush and ink on ritual paper, your inscribed name, and the full consecration sequence. Printed talismans lack live stroke work. We describe our practitioner as gaogong in the Longhu Tianshi Mansion tradition — ask sales any detail you need before payment." },
  { q: "How do I reserve a ritual slot?", a: "Tap Book on WhatsApp on any package page. Customer service confirms your slot, talisman choice, and shipping details in chat." },
  { q: "How long does delivery take?", a: "Your ritual is performed within 3–5 business days after WhatsApp confirmation. Shipping to the US and Europe typically takes 7–14 days. You receive a video of your ceremony before dispatch." },
  { q: "What do I receive?", a: "A personalized blessed talisman, ritual ceremony video, care instructions, and premium protective packaging." },
  { q: "Can I choose my intention?", a: "Absolutely. Select Love, Wealth, Protection, or Health & Balance. We inscribe your intention during the handwriting step." },
  { q: "How much does a Taoist talisman cost?", a: "Packages start at $249 (Protection), $279 (Health), $329 (Love), and $399 (Wealth). Each includes a hand-written talisman, filmed consecration, care instructions, and worldwide shipping." },
  { q: "Can I return or refund my order?", a: "Each talisman is personalized and consecrated for you. Once the ritual is filmed with your name, returns are not accepted. Contact us on WhatsApp before your ritual begins if your plans change." },
  { q: "What is Taoism in simple terms?", a: "Taoism (道教) is an ancient Chinese spiritual path focused on harmony with nature, inner peace, and balanced energy (Qi). Our service offers authentic Taoist ritual — hand-written talismans blessed by trained priests — not generic self-help." },
];

export default function FAQ() {
  return (
    <section className="section bg-cream" id="faq">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="section-sub mb-12">Everything you need to know about ordering an authentic Taoist talisman</p>

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
