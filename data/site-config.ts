import siteContent from '@/data/siteContent.json';

export const siteConfig = {
  name: siteContent.site.name,
  tagline: siteContent.site.tagline,
  description: siteContent.site.description,
  url: siteContent.site.url,
  whatsapp: siteContent.site.whatsapp,
  whatsappLink: siteContent.site.whatsappLink || `https://wa.me/${siteContent.site.whatsapp.replace(/^\+/, '')}`,
  email: siteContent.site.email,
  social: siteContent.site.social,
  masterName: siteContent.site.masterName,
  masterTitle: siteContent.site.masterTitle,
  masterBio: siteContent.site.masterBio,
};

export const navigation = siteContent.site.navigation || [];

export default siteContent;
