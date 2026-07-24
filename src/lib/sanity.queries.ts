import { sanityClient } from './sanity.client';

// ── Singleton queries ──────────────────────────────────────────────

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]{
    name, tagline, description, url, whatsapp, whatsappLink, email,
    masterName, masterTitle, masterBio, navigation
  }`, {}, { next: { revalidate: 3600, tags: ['site-settings'] } });
}

export async function getHomepage() {
  return sanityClient.fetch(`*[_type == "homepage"][0]{
    heroTitle, heroSubtitle, heroDescription, "heroImage": heroImage.asset->url,
    featuresHeading, featuresSubheading, featuresChineseSub, featureCards,
    faqHeading, faqSubheading, faqs
  }`, {}, { next: { revalidate: 3600, tags: ['homepage'] } });
}

export async function getPageContent(pageId: string) {
  return sanityClient.fetch(`*[_type == "pageContent" && pageId == $pageId][0]{
    pageId, heading, subheading, body, data
  }`, { pageId }, { next: { revalidate: 3600, tags: [`page-${pageId}`] } });
}

// ── Collection queries ─────────────────────────────────────────────

export async function getTalismans() {
  return sanityClient.fetch(`*[_type == "talisman"] | order(_createdAt asc) {
    _id, name, chineseName, "slug": slug.current, category, price, description,
    features, packages, "imageUrl": image.asset->url
  }`, {}, { next: { revalidate: 3600, tags: ['talismans'] } });
}

export async function getProducts() {
  return sanityClient.fetch(`*[_type == "product"] | order(_createdAt asc) {
    _id, name, nameCn, "slug": slug.current, categories, price, tagline,
    description, features, includes, "imageUrl": image.asset->url,
    isLimitedEdition
  }`, {}, { next: { revalidate: 3600, tags: ['products'] } });
}

export async function getPosts() {
  return sanityClient.fetch(`*[_type == "post"] | order(date desc) {
    _id, title, "slug": slug.current, date, modifiedDate, author, category,
    tags, excerpt, metaTitle, metaDescription, featured, readingTime,
    body, "imageUrl": image.asset->url
  }`, {}, { next: { revalidate: 3600, tags: ['posts'] } });
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, date, modifiedDate, author, category,
    tags, excerpt, metaTitle, metaDescription, featured, readingTime,
    body, "imageUrl": image.asset->url
  }`, { slug }, { next: { revalidate: 3600, tags: [`post-${slug}`] } });
}
