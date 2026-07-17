import siteContent from '@/data/siteContent.json';

export default function HowItWorks() {
  const h = siteContent.homepage.howItWorks;
  return (
    <section className="section bg-cream" id="how-it-works">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{h.heading}</h2>
        <p className="section-sub mb-2">{h.subheading}</p>
        <p className="text-center text-sm text-gray-500 italic mb-16">{h.chineseSub}</p>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden md:block"></div>
          <div className="space-y-12">
            {h.steps.map((step: any, i: number) => (
              <div key={step.num} className={'relative flex items-center gap-8 ' + (i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse') + ' flex-col md:flex-row'}>
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
          <a href="/api/redirect" className="btn btn-primary btn-lg">{h.ctaText}</a>
        </div>
      </div>
    </section>
  );
}
