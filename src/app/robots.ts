import { siteConfig } from '@/data/site-config';

export default function robots() {
  return {
    rules: { userAgent: '*', disallow: '/' },
  };
}