import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aaarojtl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

if (!process.env.SANITY_API_WRITE_TOKEN) {
  console.error('ERROR: Set SANITY_API_WRITE_TOKEN environment variable.');
  console.error('Get it from https://sanity.io/manage → your project → API → Tokens → Add API token (Editor role).');
  process.exit(1);
}

async function migrate() {
  console.log('Starting migration...\n');

  // 1. Talismans
  console.log('Migrating talismans...');
  const { talismans } = await import('../src/data/talismans.ts');
  for (const t of talismans) {
    await client.create({
      _type: 'talisman',
      name: t.name,
      chineseName: t.chineseName,
      slug: { _type: 'slug', current: t.slug },
      category: t.category,
      price: t.price,
      description: t.description,
      features: t.features,
    });
    console.log(`  ✓ ${t.name}`);
  }

  // 2. Products
  console.log('Migrating products...');
  const { products } = await import('../src/data/products.ts');
  for (const p of products) {
    await client.create({
      _type: 'product',
      name: p.name,
      nameCn: p.nameCn,
      slug: { _type: 'slug', current: p.slug },
      categories: p.categories,
      price: p.price,
      tagline: p.tagline,
      description: p.description,
      features: p.features,
      includes: p.includes,
      isLimitedEdition: p.isLimitedEdition || false,
    });
    console.log(`  ✓ ${p.name}`);
  }

  // 3. Blog posts
  console.log('Migrating blog posts...');
  const postsData = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'posts.json'), 'utf-8'));
  for (const post of postsData.posts) {
    await client.create({
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      date: post.date,
      modifiedDate: post.modifiedDate,
      author: post.author,
      category: post.category,
      tags: post.tags,
      excerpt: post.excerpt,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      featured: post.featured || false,
      readingTime: post.readingTime,
      body: post.content || [],
    });
    console.log(`  ✓ ${post.title}`);
  }

  // 4. Site settings
  console.log('Migrating site settings...');
  const siteJson = JSON.parse(readFileSync(join(__dirname, '..', 'data', 'content', 'site.json'), 'utf-8'));
  await client.create({
    _type: 'siteSettings',
    ...siteJson.site,
  });
  console.log('  ✓ site settings');

  // 5. Homepage
  console.log('Migrating homepage...');
  const hpJson = JSON.parse(readFileSync(join(__dirname, '..', 'data', 'content', 'homepage.json'), 'utf-8'));
  const hp = hpJson.homepage;
  await client.create({
    _type: 'homepage',
    heroTitle: hp.hero.title,
    heroSubtitle: hp.hero.subtitle,
    heroDescription: hp.hero.description,
    featuresHeading: hp.features.heading,
    featuresSubheading: hp.features.subheading,
    featuresChineseSub: hp.features.chineseSub,
    featureCards: hp.features.sections,
    faqHeading: hp.faq.heading,
    faqSubheading: hp.faq.subheading,
    faqs: hp.faq.faqs,
  });
  console.log('  ✓ homepage');

  // 6. Page content (about, faq, contact, community, culture, learn, shop)
  const pageIds = ['about', 'faq', 'contact', 'community', 'culture', 'learn', 'shop'];
  console.log('Migrating page content...');
  for (const pid of pageIds) {
    const pJson = JSON.parse(readFileSync(join(__dirname, '..', 'data', 'content', `${pid}.json`), 'utf-8'));
    const pageData = pJson[pid];
    await client.create({
      _type: 'pageContent',
      pageId: pid,
      heading: pageData.heading || '',
      subheading: pageData.subheading || '',
      data: JSON.stringify(pageData),
    });
    console.log(`  ✓ ${pid}`);
  }

  // 6b. Extract divination and fengshui from services.json
  console.log('Extracting divination and feng-shui from services.json...');
  const servicesJson = JSON.parse(readFileSync(join(__dirname, '..', 'data', 'content', 'services.json'), 'utf-8'));
  const svc = servicesJson.services;
  if (svc.divinationPage) {
    await client.create({
      _type: 'pageContent',
      pageId: 'divination',
      heading: svc.divinationPage.heading || '',
      subheading: svc.divinationPage.subheading || '',
      data: JSON.stringify({ ...svc.divinationPage, chineseSub: svc.divinationPage.chineseSub || '' }),
    });
    console.log('  ✓ divination');
  }
  if (svc.fengshuiPage) {
    await client.create({
      _type: 'pageContent',
      pageId: 'fengshui',
      heading: svc.fengshuiPage.heading || '',
      subheading: svc.fengshuiPage.subheading || '',
      data: JSON.stringify({ ...svc.fengshuiPage, chineseSub: svc.fengshuiPage.chineseSub || '' }),
    });
    console.log('  ✓ fengshui');
  }

  console.log('\nMigration complete!');
}

migrate().catch(console.error);
