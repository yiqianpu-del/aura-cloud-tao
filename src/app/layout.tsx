import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getSiteSettings } from "@/lib/sanity.queries";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  const name = site?.name || 'Aura Cloud Tao';
  const description = site?.description || '';
  const url = site?.url || 'https://auracloudtao.com';
  return {
    title: { default: name, template: `%s | ${name}` },
    description,
    metadataBase: new URL(url),
    openGraph: { title: name, description, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title: name, description },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSiteSettings();
  const siteName = site?.name || 'Aura Cloud Tao';
  const navigation = site?.navigation || [];

  return (
   <html lang="en" suppressHydrationWarning>
     <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap"
        />
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
       <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KGZNSLKK');`
        }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGZNSLKK" height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>
        <Header siteName={siteName} navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Footer siteName={siteName} tagline={site?.tagline || ''} />
      </body>
    </html>
  );
}
