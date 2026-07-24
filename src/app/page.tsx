import { getHomepage } from '@/lib/sanity.queries';
import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import Packages from '@/components/packages';
import Faq from '@/components/faq';
import ConnectCta from '@/components/connect-cta';

export const revalidate = 3600;

export default async function HomePage() {
  const hp = await getHomepage();

  return (
    <>
      <Hero
        title={hp?.heroTitle}
        subtitle={hp?.heroSubtitle}
        description={hp?.heroDescription}
        backgroundImage={hp?.heroImage}
      />
      <Features
        heading={hp?.featuresHeading}
        subheading={hp?.featuresSubheading}
        chineseSub={hp?.featuresChineseSub}
        cards={hp?.featureCards}
      />
      <HowItWorks />
      <Packages />
      {hp?.faqs?.length > 0 && (
        <Faq heading={hp.faqHeading} subheading={hp.faqSubheading} faqs={hp.faqs} />
      )}
      <ConnectCta source="homepage" variant="banner" />
    </>
  );
}
