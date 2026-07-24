import { getPageContent, getSiteSettings } from '@/lib/sanity.queries';

export const revalidate = 3600;

export default async function ContactPage() {
  const pc = await getPageContent('contact');
  const site = await getSiteSettings();
  let contact: any = {};
  try { contact = pc?.data ? JSON.parse(pc.data) : {}; } catch {}

  return (
    <div className="section">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">{pc?.heading}</h1>
        <p className="text-xl text-gray-600 mb-12">{pc?.subheading}</p>
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold mb-2">{contact.cardHeading || 'Contact Us'}</h2>
          <p className="text-gray-600 mb-6">{contact.cardText}</p>
          <a href={site?.whatsappLink || '/api/redirect'} className="btn btn-gold btn-lg">
            {contact.ctaText || 'Message on WhatsApp'}
          </a>
        </div>
        <div className="text-sm text-gray-500 space-y-1">
          {contact.emailLabel && site?.email && <p>{contact.emailLabel}: {site.email}</p>}
          {contact.hoursLabel && contact.hours && <p>{contact.hoursLabel}: {contact.hours}</p>}
          {contact.responseTime && <p>{contact.responseTime}</p>}
        </div>
      </div>
    </div>
  );
}
