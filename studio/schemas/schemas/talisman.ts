import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'talisman',
  title: 'Talisman',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'chineseName', title: 'Chinese Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: rule => rule.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Wealth & Prosperity', value: 'wealth' },
        { title: 'Protection & Safety', value: 'protection' },
        { title: 'Health & Love', value: 'health' },
        { title: 'Luck & Tai Sui', value: 'luck' },
      ]},
      validation: rule => rule.required(),
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'price', title: 'Price ($)', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'category' } },
});
