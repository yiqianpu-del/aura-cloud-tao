import { defineType } from 'sanity'

// ========================================
// Content Schemas (editable items)
// ========================================

const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'titleCn', title: 'Chinese Name', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' }, validation: (rule: any) => rule.required() },
    { name: 'category', title: 'Category', type: 'string', options: { list: [
      { title: 'Ritual', value: 'ritual' }, { title: 'Divination', value: 'divination' }, { title: 'Feng Shui', value: 'fengshui' },
    ]}},
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'pricingFrom', title: 'Price From ($)', type: 'number' },
    { name: 'delivery', title: 'Delivery Info', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
})

const product = defineType({
  name: 'product', title: 'Product', type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'nameCn', title: 'Chinese Name', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name' }, validation: (rule: any) => rule.required() },
    { name: 'price', title: 'Price ($)', type: 'number' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'isLimitedEdition', title: 'Limited Edition', type: 'boolean' },
  ],
  preview: { select: { title: 'name', subtitle: 'price' } },
})

const talisman = defineType({
  name: 'talisman', title: 'Talisman', type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'chineseName', title: 'Chinese Name', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name' } },
    { name: 'category', title: 'Category', type: 'string', options: {
      list: [{ title: 'Wealth', value: 'wealth' }, { title: 'Protection', value: 'protection' }, { title: 'Health', value: 'health' }, { title: 'Luck', value: 'luck' }],
    }},
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'price', title: 'Price ($)', type: 'number' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'name', subtitle: 'category' } },
})

const blogPost = defineType({
  name: 'blogPost', title: 'Blog Post', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'date' } },
})

// ========================================
// Page Schemas (one per page)
// ========================================

const homePage = defineType({
  name: 'homePage', title: 'Home Page', type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Banner' },
    { name: 'features', title: 'Featured Sections' },
    { name: 'howItWorks', title: 'How It Works' },
  ],
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string', group: 'hero' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroBackground', title: 'Background Image', type: 'image', options: { hotspot: true }, group: 'hero' }),
    defineField({ name: 'heroCtaText', title: 'CTA Button Text', type: 'string', group: 'hero', initialValue: 'Begin Your Journey' }),
    defineField({ name: 'featuresTitle', title: 'Section Title', type: 'string', group: 'features', initialValue: 'Explore Our Offerings' }),
    defineField({ name: 'features', title: 'Feature Cards', type: 'array', group: 'features', of: [{ type: 'object', fields: [
      { name: 'icon', title: 'Icon', type: 'string' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'titleCn', title: 'Chinese Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text', rows: 2 },
      { name: 'link', title: 'Link URL', type: 'string' },
    ], preview: { select: { title: 'title' } } }] }),
  ],
})

const simplePage = defineType({
  name: 'simplePage', title: 'Simple Page', type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
})

// ========================================
// Settings
// ========================================

const siteConfig = defineType({
  name: 'siteConfig', title: 'Site Config', type: 'document',
  groups: [{ name: 'brand', title: 'Brand' }, { name: 'contact', title: 'Contact' }, { name: 'master', title: 'Master' }],
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string', group: 'brand' },
    { name: 'tagline', title: 'Tagline', type: 'string', group: 'brand' },
    { name: 'description', title: 'Meta Description', type: 'text', rows: 3, group: 'brand' },
    { name: 'logo', title: 'Logo', type: 'image', group: 'brand' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string', group: 'contact' },
    { name: 'email', title: 'Email', type: 'string', group: 'contact' },
    { name: 'instagram', title: 'Instagram URL', type: 'url', group: 'contact' },
    { name: 'facebook', title: 'Facebook URL', type: 'url', group: 'contact' },
    { name: 'masterName', title: 'Master Name', type: 'string', group: 'master' },
    { name: 'masterTitle', title: 'Master Title', type: 'string', group: 'master' },
    { name: 'masterBio', title: 'Master Bio', type: 'text', rows: 5, group: 'master' },
    { name: 'masterImage', title: 'Master Photo', type: 'image', group: 'master' },
  ],
})

export const schemaTypes = [
  homePage,
  simplePage,
  service,
  product,
  talisman,
  blogPost,
  siteConfig,
]
