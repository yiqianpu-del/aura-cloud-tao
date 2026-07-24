import Link from 'next/link';
import { getPageContent, getSiteSettings } from '@/lib/sanity.queries';

export const revalidate = 3600;

export default async function FAQPage() {
  const pc = await getPageContent('faq');
  const site = await getSiteSettings();
  let faq: any = {};
  try { faq = pc?.data ? JSON.parse(pc.data) : {}; } catch {}

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{pc?.heading}</h1>
        <p className="text-xl text-gray-600 mb-8">{pc?.subheading}</p>
        <div className="space-y-4">
          {faq.faqs?.map((item: any, i: number) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="font-semibold text-ink list-none flex items-center justify-between">
                <span>{item.q}</span>
                <svg className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        {faq.stillQuestions && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{faq.stillQuestions}</p>
            <a href={site?.whatsappLink || '/api/redirect'} className="btn btn-gold">{faq.cta || 'Ask on WhatsApp'}</a>
          </div>
        )}
      </div>
    </div>
  );
}
