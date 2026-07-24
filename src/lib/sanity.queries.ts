import { sanityFetch } from './sanity.client';

// ── Singleton queries ──────────────────────────────────────────────

export async function getSiteSettings() {
  return sanityFetch(`*[_type == "siteSettings"][0]{
    name, tagline, description, url, whatsapp, whatsappLink, email,
    masterName, masterTitle, masterBio, navigation
  }`, undefined, ['site-settings']);
}

export async function getHomepage() {
  return sanityFetch(`*[_type == "homepage"][0]{
    heroTitle, heroSubtitle, heroDescription, "heroImage": heroImage.asset->url,
    featuresHeading, featuresSubheading, featuresChineseSub, featureCards,
    faqHeading, faqSubheading, faqs
  }`, undefined, ['homepage']);
}

export async function getPageContent(pageId: string) {
  return sanityFetch(`*[_type == "pageContent" && pageId == $pageId][0]{
    pageId, heading, subheading, body, data
  }`, { pageId }, [`page-${pageId}`]);
}

// ── Collection queries ─────────────────────────────────────────────

export async function getTalismans() {
  return sanityFetch(`*[_type == "talisman"] | order(_createdAt asc) {
    _id, name, chineseName, "slug": slug.current, category, price, description,
    features, packages, "imageUrl": image.asset->url
  }`, undefined, ['talismans']);
}

export async function getProducts() {
  return sanityFetch(`*[_type == "product"] | order(_createdAt asc) {
    _id, name, nameCn, "slug": slug.current, categories, price, tagline,
    description, features, includes, "imageUrl": image.asset->url,
    isLimitedEdition
  }`, undefined, ['products']);
}

export async function getPosts() {
  return sanityFetch(`*[_type == "post"] | order(date desc) {
    _id, title, "slug": slug.current, date, modifiedDate, author, category,
    tags, excerpt, metaTitle, metaDescription, featured, readingTime,
    body, "imageUrl": image.asset->url
  }`, undefined, ['posts']);
}

export async function getPostBySlug(slug: string) {
  return sanityFetch(`*[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, date, modifiedDate, author, category,
    tags, excerpt, metaTitle, metaDescription, featured, readingTime,
    body, "imageUrl": image.asset->url
  }`, { slug }, [`post-${slug}`]);
}
