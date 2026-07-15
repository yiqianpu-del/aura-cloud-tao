import { siteConfig } from '@/data/site-config';
import { services } from '@/data/services';
import { products } from '@/data/products';

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: siteConfig.url, lastModified: now, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteConfig.url}/divination`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteConfig.url}/feng-shui`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/shop`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/culture`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteConfig.url}/community`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteConfig.url}/learn`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteConfig.url}/talismans`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/shipping-returns`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${siteConfig.url}/${s.category === 'fengshui' ? 'feng-shui' : s.category}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${siteConfig.url}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cultureSlugs = ['philosophy', 'history', 'scriptures', 'deities', 'beginners'];
  const culturePages = cultureSlugs.map((slug) => ({
    url: `${siteConfig.url}/culture/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const communitySlugs = ['practices', 'meditation', 'forum', 'events'];
  const communityPages = communitySlugs.map((slug) => ({
    url: `${siteConfig.url}/community/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const blogSlugs = [
    'what-is-taoism', 'how-to-wear-talisman', 'red-flags-fake-talismans',
    'tai-sui-2026-guide', 'filmed-consecration-trust', 'taoist-meditation-beginners',
  ];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...culturePages, ...communityPages, ...blogPages];
}
