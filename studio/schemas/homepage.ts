import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'featuresHeading', title: 'Features Heading', type: 'string' }),
    defineField({ name: 'featuresSubheading', title: 'Features Subheading', type: 'string' }),
    defineField({ name: 'featuresChineseSub', title: 'Features Chinese Subtitle', type: 'string' }),
    defineField({
      name: 'featureCards', title: 'Feature Cards', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'icon', title: 'Icon', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'titleCn', title: 'Chinese Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'href', title: 'Link', type: 'string' },
      ]}],
    }),
    defineField({ name: 'faqHeading', title: 'FAQ Heading', type: 'string' }),
    defineField({ name: 'faqSubheading', title: 'FAQ Subheading', type: 'string' }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'q', title: 'Question', type: 'string' },
        { name: 'a', title: 'Answer', type: 'text' },
      ]}],
    }),
  ],
});
