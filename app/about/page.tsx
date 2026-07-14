import Image from 'next/image';
import { siteConfig } from '@/data/site-config';

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Bridging ancient wisdom with modern understanding</p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our mission is to bridge the profound wisdom of Taoist traditions with contemporary life, making ancient knowledge accessible and practical for modern seekers.</p>
                <p>We are committed to preserving and sharing authentic Taoist teachings while helping individuals navigate their personal and spiritual growth through traditional Chinese metaphysical arts.</p>
                <p>Through education, consultation, and community building, we aim to create a space where Eastern wisdom can flourish and transform lives in the Western world.</p>
              </div>
            </div>
            <div className="h-[400px] bg-gradient-to-br from-gold/10 to-accent/10 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">☯</p>
                <p className="text-sm text-gray-400 italic">Longhu Mountain · 龙虎山天师府</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Authenticity", icon: "✨", desc: "We maintain the integrity of traditional Taoist teachings while making them accessible to modern practitioners." },
              { title: "Compassion", icon: "🪷", desc: "We approach every consultation with empathy and understanding, recognizing each person's unique journey." },
              { title: "Community", icon: "🤝", desc: "We foster a supportive community where seekers can learn, grow, and share their experiences." },
            ].map((v) => (
              <div key={v.title} className="card text-center gradient-border">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Master */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Taoist Practitioner</h2>
          <p className="text-gray-600 mb-8">Meet our dedicated practitioner who brings decades of experience and deep understanding of Taoist arts.</p>
          <div className="card p-8 gradient-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold/20 to-accent/20 mx-auto flex items-center justify-center">
                <span className="text-6xl">☯</span>
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
