import siteContent from '@/data/siteContent.json';

export default function Packages() {
  const data = siteContent.homepage.packages;
  const waBase = "https://wa.me/85256151619?text=I'm%20interested%20in%20the%20";
  return (
    <section className="section bg-white" id="packages">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{data.heading}</h2>
        <p className="section-sub mb-12">{data.subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.packages.map((pkg: any) => (
            <div key={pkg.name} className="card text-center gradient-border">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{pkg.category}</p>
              <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-accent mb-4">${pkg.price}<span className="text-sm text-gray-400">+</span></p>
              <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
              <a href="/api/redirect" className="btn btn-gold w-full">Book on WhatsApp</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
