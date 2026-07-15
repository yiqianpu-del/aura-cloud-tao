import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cultureTopic',
  title: 'Culture Topic',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: rule => rule.required() }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }],
    }),
  ],
  preview: { select: { title: 'title' } },
});
