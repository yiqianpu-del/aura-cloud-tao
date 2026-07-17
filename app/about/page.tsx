import Image from 'next/image';
import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
import { siteConfig } from '@/data/site-config';

const a = siteContent.about;

export const metadata = {
  title: 'About Us',
  description: 'Learn about our Taoist practitioner and the mission of Aura Cloud Tao.',
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{a.heading}</h1>
          <p className="text-xl text-gray-600">{a.subheading}</p>
        </div>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{a.mission.heading}</h2>
              <div className="space-y-4 text-gray-600">
                {a.mission.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="h-[400px] rounded-sm overflow-hidden border border-gray-200">
              <Image src={a.mission.image} alt={a.mission.imageAlt} width={600} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{a.values.heading}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {a.values.items.map((v: any) => (
              <div key={v.title} className="card text-center gradient-border">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{a.practitioner.heading}</h2>
          <p className="text-gray-600 mb-8">{a.practitioner.subheading}</p>
          <div className="card p-8 gradient-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="w-48 h-48 mx-auto overflow-hidden">
                <Image src={a.practitioner.image} alt={siteConfig.masterName} width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">{siteConfig.masterName}</h3>
                <p className="text-gold font-medium mb-4">{siteConfig.masterTitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{siteConfig.masterBio}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
