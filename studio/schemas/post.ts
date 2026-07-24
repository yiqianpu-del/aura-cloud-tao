import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', validation: (Rule) => Rule.required() }),
    defineField({ name: 'modifiedDate', title: 'Modified Date', type: 'datetime' }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }], validation: (Rule) => Rule.required() }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'readingTime', title: 'Reading Time', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'SEO Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO Meta Description', type: 'string' }),
  ],
});
