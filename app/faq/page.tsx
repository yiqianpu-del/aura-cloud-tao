import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const metadata = { title: 'FAQ | Sacred Tao Wisdom', description: 'Frequently asked questions about Taoist rituals, divination, Feng Shui, and spiritual products.' };

const faqs = [
  { q: "How do I book a service?", a: "Simply tap 'Book on WhatsApp' on any service page. Our customer service will confirm your booking, collect details, and guide you through the process." },
  { q: "Are the rituals real?", a: "Yes — all rituals are performed at the Longhu Mountain Tianshi Mansion altar. You receive a full video of your ceremony before shipping." },
  { q: "How do I know the ritual was performed?", a: "You will receive a custom video showing your name being written and the full consecration sequence — no exceptions." },
  { q: "How long does delivery take?", a: "Rituals are performed within 3-5 business days after booking. Shipping to US and Europe takes 7-14 days. You receive the ceremony video before dispatch." },
  { q: "What payment methods do you accept?", a: "We accept payments via bank transfer, Wise, or PayPal — all handled through WhatsApp after booking." },
  { q: "Can I get a refund?", a: "Each ritual is personalized and performed for you. Once the ceremony is filmed with your name, returns are not accepted. Contact us before your ritual begins if your plans change." },
  { q: "What is Qi Men Dun Jia?", a: "Qi Men Dun Jia (奇门遁甲) is an ancient Chinese strategic divination system used for decision-making, timing, and understanding life patterns. We offer it in an accessible card reading format." },
  { q: "Do I need to know Chinese or Taoism?", a: "Not at all. All services are offered in English and designed for Western seekers. We explain everything clearly." },
  { q: "Can I buy products as gifts?", a: "Absolutely. Just let us know the recipient's name and intention during booking, and the consecration will be personalized for them." },
];

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Everything you need to know about our services</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="font-semibold list-none flex items-center justify-between"><span>{faq.q}</span><svg className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="mt-4 text-gray-600 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold">Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
