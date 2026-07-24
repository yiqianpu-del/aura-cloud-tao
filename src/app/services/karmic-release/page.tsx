import Link from 'next/link';
import { services } from '@/data/services';
import ConnectCta from '@/components/connect-cta';

const service = services.find((s: any) => s.slug === 'karmic-release');

export default function KarmicReleasePage() {
  if (!service) return <div className="section text-center"><h1>Service not found</h1></div>;

  return (
    <div className="section">
      <div className="container max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/services" className="hover:text-accent">Services</Link> / <span className="text-ink">{service.title}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h1>
        <p className="text-gray-500 italic mb-6">{service.titleCn}</p>
        <p className="text-gray-600 mb-8">{service.description}</p>

        {service.whoNeedsIt && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Who Needs This</h2>
            <ul className="space-y-2">
              {service.whoNeedsIt.map((item: string, i: number) => <li key={i} className="flex items-start gap-2 text-sm text-gray-600">✦ {item}</li>)}
            </ul>
          </section>
        )}

        {service.process && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              {service.process.map((step: any) => (
                <div key={step.step} className="card">
                  <span className="text-gold font-bold">Step {step.step}</span>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="card p-6 mb-8">
          <p className="text-2xl font-bold text-accent mb-2">From ${service.pricing.startingFrom}</p>
          {service.pricing.options?.map((opt: any) => (
            <p key={opt.name} className="text-sm text-gray-600">{opt.name}: ${opt.price}</p>
          ))}
        </div>

        <ConnectCta source={`services-${service.slug}`} variant="banner" />
      </div>
    </div>
  );
}
