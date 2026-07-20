import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import Packages from '@/components/packages';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Packages />
      <FAQ />
    </>
  );
}