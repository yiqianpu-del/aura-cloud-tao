const steps = [
  { num: 1, title: "Preparation of the altar", zh: "布置道坛" },
  { num: 2, title: "Lighting incense and prayer", zh: "点香祈愿" },
  { num: 3, title: "Hand-writing your talisman", zh: "书写符箓" },
  { num: 4, title: "Consecration ceremony", zh: "开光仪式" },
];

export default function HowItWorks() {
  return (
    <section className="section bg-cream" id="how-it-works">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Your Ritual Is Performed</h2>
        <p className="section-sub mb-2">Four altar steps for your order — the full ceremony is also filmed and sent before shipping.</p>
        <p className="text-center text-sm text-gray-500 italic mb-16">科仪四步实景；寄符前另发您订单全程录像。</p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden md:block"></div>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.num} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center">{step.num}</span>
                    <h3 className="font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 italic">{step.zh}</p>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-gold absolute left-1/2 -translate-x-1/2 border-4 border-cream"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="https://wa.me/85256151619?text=Hello%2C%20I%27d%20like%20to%20reserve%20a%20ritual%20slot" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Reserve Your Ritual
          </a>
        </div>
      </div>
    </section>
  );
}
