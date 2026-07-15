import { talismans } from '@/data/talismans';
import { siteConfig } from '@/data/site-config';

export default function sitemap() {
  const staticPages = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${siteConfig.url}/talismans`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/shipping-returns`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const talismanPages = talismans.map((t) => ({
    url: `${siteConfig.url}/talismans/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = [
    'what-is-taoism', 'how-to-wear-talisman', 'red-flags-fake-talismans',
    'tai-sui-2026-guide', 'filmed-consecration-trust', 'taoist-meditation-beginners',
  ].map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...talismanPages, ...blogPages];
}
