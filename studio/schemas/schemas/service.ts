import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'titleCn', title: 'Chinese Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: rule => rule.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: [{ title: 'Ritual', value: 'ritual' }, { title: 'Divination', value: 'divination' }, { title: 'Feng Shui', value: 'fengshui' }] },
      validation: rule => rule.required(),
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 5 }),
    defineField({ name: 'pricingFrom', title: 'Price From ($)', type: 'number' }),
    defineField({ name: 'delivery', title: 'Delivery Info', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'sections', title: 'Content Sections', type: 'array', of: [
        { type: 'block' },
      ],
    }),
    defineField({
      name: 'whoNeedsIt', title: 'Who Needs This', type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      name: 'process', title: 'Process Steps', type: 'array', of: [
        { type: 'object', fields: [
          { name: 'stepNumber', title: 'Step #', type: 'number' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ], preview: { select: { title: 'title' } } },
      ],
    }),
    defineField({
      name: 'faq', title: 'FAQ', type: 'array', of: [
        { type: 'object', fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' },
        ], preview: { select: { title: 'question' } } },
      ],
    }),
    defineField({
      name: 'relatedProducts', title: 'Related Products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
});
