import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'nameCn', title: 'Chinese Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: rule => rule.required() }),
    defineField({ name: 'price', title: 'Price ($)', type: 'number', validation: rule => rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 5 }),
    defineField({ name: 'isLimitedEdition', title: 'Limited Edition', type: 'boolean', initialValue: false }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }],
    }),
    defineField({
      name: 'includes', title: 'What\'s Included', type: 'array', of: [{ type: 'string' }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'price' } },
});
