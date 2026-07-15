import { defineType } from 'sanity'

const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'titleCn', title: 'Chinese Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule: any) => rule.required() },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Ritual', value: 'ritual' },
        { title: 'Divination', value: 'divination' },
        { title: 'Feng Shui', value: 'fengshui' },
      ]},
    },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 5 },
    { name: 'pricingFrom', title: 'Price From ($)', type: 'number' },
    { name: 'delivery', title: 'Delivery Info', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'whoNeedsIt', title: 'Who Needs This', type: 'array', of: [{ type: 'string' }],
    },
    {
      name: 'process', title: 'Process Steps', type: 'array', of: [
        { type: 'object', fields: [
          { name: 'stepNumber', title: 'Step #', type: 'number' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ]},
      ],
    },
    {
      name: 'faq', title: 'FAQ', type: 'array', of: [
        { type: 'object', fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' },
        ]},
      ],
    },
  ],
})

const product = defineType({
  name: 'product', title: 'Product', type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'nameCn', title: 'Chinese Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (rule: any) => rule.required() },
    { name: 'price', title: 'Price ($)', type: 'number' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 5 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'isLimitedEdition', title: 'Limited Edition', type: 'boolean' },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'includes', title: 'Includes', type: 'array', of: [{ type: 'string' }] },
  ],
})

const talisman = defineType({
  name: 'talisman', title: 'Talisman', type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'chineseName', title: 'Chinese Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Wealth', value: 'wealth' },
        { title: 'Protection', value: 'protection' },
        { title: 'Health', value: 'health' },
        { title: 'Luck', value: 'luck' },
      ]},
    },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'price', title: 'Price ($)', type: 'number' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
  ],
})

const blogPost = defineType({
  name: 'blogPost', title: 'Blog Post', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
})

const cultureTopic = defineType({
  name: 'cultureTopic', title: 'Culture Topic', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'icon', title: 'Icon', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
  ],
})

const communitySection = defineType({
  name: 'communitySection', title: 'Community Section', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'icon', title: 'Icon', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
  ],
})

const siteConfig = defineType({
  name: 'siteConfig', title: 'Site Config', type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    { name: 'facebook', title: 'Facebook URL', type: 'url' },
    { name: 'masterName', title: 'Master Name', type: 'string' },
    { name: 'masterTitle', title: 'Master Title', type: 'string' },
    { name: 'masterBio', title: 'Master Bio', type: 'text', rows: 5 },
    { name: 'masterImage', title: 'Master Photo', type: 'image' },
  ],
})

const faq = defineType({
  name: 'faq', title: 'FAQ', type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (rule: any) => rule.required() },
    { name: 'answer', title: 'Answer', type: 'text', rows: 5 },
    { name: 'order', title: 'Order', type: 'number' },
  ],
})

export const schemaTypes = [
  service, product, talisman, blogPost,
  cultureTopic, communitySection, siteConfig, faq,
]
