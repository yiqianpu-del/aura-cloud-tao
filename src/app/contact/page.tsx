import siteContent from '@/data/siteContent.json';
import { siteConfig } from '@/data/site-config';

const c = siteContent.contact;

export const metadata = { title: 'Contact Us', description: 'Get in touch with Aura Cloud Tao. The fastest way to reach us is through WhatsApp.' };

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.heading}</h1>
        <p className="text-gray-600 mb-12">{c.subheading}</p>
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">{c.cardHeading}</h2>
          <p className="text-gray-600 mb-6">{c.cardText}</p>
          <a href={siteConfig.whatsappLink} target="_blank" className="btn btn-gold btn-lg mb-4">{c.ctaText}</a>
          <p className="text-sm text-gray-500">{c.responseTime}</p>
        </div>
        <div className="text-sm text-gray-500">
          <p>{c.emailLabel}: {siteConfig.email}</p>
          <p className="mt-1">{c.hoursLabel}: {c.hours}</p>
        </div>
      </div>
    </div>
  );
}