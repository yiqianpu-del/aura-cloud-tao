export default function HowItWorks() {
  return (
    <section className="section bg-white" id="how-it-works">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">How Your Ritual Is Performed</h2>
        <p className="section-sub mb-12">Four altar steps for your order — the full ceremony is also filmed and sent before shipping.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[{num:"1",title:"Preparation of the altar",zh:"布置道坛"},{num:"2",title:"Lighting incense and prayer",zh:"点香祈愿"},{num:"3",title:"Hand-writing your talisman",zh:"书写符箓"},{num:"4",title:"Consecration ceremony",zh:"开光仪式"}].map(s => (
            <div key={s.num} className="card text-center">
              <div className="step-num mx-auto mb-4">{s.num}</div>
              <h3 className="font-serif font-bold text-lg mb-2">{s.title}</h3>
              <p className="zh">{s.zh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
