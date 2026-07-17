import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import { siteConfig } from '@/data/site-config';

const f = siteContent.faq;

export const metadata = { title: 'FAQ | Sacred Tao Wisdom', description: 'Frequently asked questions about Taoist rituals, divination, Feng Shui, and spiritual products.' };

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{f.heading}</h1>
        <p className="text-gray-600 mb-12">{f.subheading}</p>
        <div className="space-y-4">
          {f.faqs.map((faq: any, i: number) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="font-semibold list-none flex items-center justify-between">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{f.stillQuestions}</p>
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold">{f.cta}</a>
        </div>
      </div>
    </div>
  );
}
