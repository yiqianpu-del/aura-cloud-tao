import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'talisman',
  title: 'Talisman',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'chineseName', title: 'Chinese Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Wealth', value: 'wealth' },
        { title: 'Protection', value: 'protection' },
        { title: 'Health', value: 'health' },
        { title: 'Luck', value: 'luck' },
      ]},
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'price', title: 'Price (USD)', type: 'number', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
  ],
});
