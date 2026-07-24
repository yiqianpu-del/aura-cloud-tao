import { services } from '@/data/services';
import { getSiteSettings, getProducts, getPosts } from '@/lib/sanity.queries';

export default async function sitemap() {
  const site = await getSiteSettings();
  const baseUrl = site?.url || 'https://auracloudtao.com';
  const now = new Date();
  const rawProducts = await getProducts().catch(() => null);
  const rawPosts = await getPosts().catch(() => null);
  const products = rawProducts || [];
  const posts = rawPosts || [];

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/divination`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/feng-shui`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/shop`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/culture`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/community`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/learn`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/talismans`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const servicePages = services.map((s: any) => ({
    url: `${baseUrl}/${s.category === 'fengshui' ? 'feng-shui' : s.category}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productPages = products.map((p: any) => ({
    url: `${baseUrl}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate || post.date || now),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...blogPages];
}
