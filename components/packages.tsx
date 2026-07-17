import { getAllTalismans, getSettings } from '@/lib/content';

export default function Packages() {
  const data = getAllTalismans();
  const settings = getSettings();
  const packages = data?.talismanPackages || [
    { name: "Protection Package", price: 249, description: "Personal Protection talisman with full consecration ceremony.", category: "protection" },
    { name: "Health Package", price: 279, description: "Health or Longevity talisman with filmed blessing ritual.", category: "health" },
    { name: "Love Package", price: 329, description: "Love Harmony talisman with personalized consecration.", category: "health" },
    { name: "Wealth Package", price: 399, description: "Your choice of Wealth talisman with premium ceremony.", category: "wealth" },
  ];

  const waBase = settings?.whatsapp ? `https://wa.me/${settings.whatsapp}?text=I'm%20interested%20in%20the%20` : '#';

  return (
    <section className="section bg-white" id="packages">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Blessing Package</h2>
        <p className="section-sub mb-12">Each package includes a hand-written talisman, filmed consecration with your name, care instructions, and worldwide shipping.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg: any) => (
            <div key={pkg.name} className="card text-center gradient-border">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{pkg.category}</p>
              <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-accent mb-4">${pkg.price}<span className="text-sm text-gray-400">+</span></p>
              <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
              <a href={waBase + encodeURIComponent(pkg.name)} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
