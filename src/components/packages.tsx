export default function Packages() {
  const plans = [
    { name:"Single Talisman", price:"$88", desc:"One hand-written talisman with full consecration ceremony and video proof.", popular:false },
    { name:"Blessing Bundle", price:"$168", desc:"Three talismans + incense set + personal blessing ritual with video.", popular:true },
    { name:"Full Ritual Package", price:"$388", desc:"Complete ceremony: talismans, incense, home blessing, Qi Men reading + video.", popular:false },
  ];
  return (
    <section className="section bg-cream" id="packages">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Order Packages</h2>
        <p className="section-sub mb-12">Choose the ritual that resonates with your needs</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map(p => (
            <div key={p.name} className={`card text-center ${p.popular ? 'border-gold border-2 relative' : ''}`}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-xs px-3 py-1 rounded-sm font-semibold">Most Popular</span>}
              <h3 className="font-serif font-bold text-xl mb-2 mt-2">{p.name}</h3>
              <p className="text-3xl font-bold text-accent mb-4">{p.price}</p>
              <p className="text-gray-600 text-sm mb-6">{p.desc}</p>
              <a href="/api/redirect" className="btn btn-primary w-full">Order Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
