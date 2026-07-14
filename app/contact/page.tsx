import { siteConfig } from '@/data/site-config';

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-12">The fastest way to reach us is through WhatsApp. We typically respond within a few hours.</p>

        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Click the button below to start a conversation on WhatsApp. Let us know which talisman you&apos;re interested in, and we&apos;ll guide you through the process.</p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg mb-4">
            WhatsApp Us
          </a>
          <p className="text-sm text-gray-500">We reply within a few hours · Mon-Fri 9:00-17:00 EST</p>
        </div>

        <div className="text-sm text-gray-500">
          <p>Email: {siteConfig.email}</p>
          <p className="mt-1">Hours: Monday – Friday, 9:00 – 17:00 EST</p>
        </div>
      </div>
    </div>
  );
}
