import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId', title: 'Page ID', type: 'string',
      description: 'about / faq / contact / community / culture / learn / shop / services / divination / fengshui',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'data', title: 'JSON Data', type: 'text', description: 'Additional data in JSON format' }),
  ],
});
