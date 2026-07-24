import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'url', title: 'Site URL', type: 'url' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'whatsappLink', title: 'WhatsApp Link', type: 'url' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'masterName', title: 'Master Name', type: 'string' }),
    defineField({ name: 'masterTitle', title: 'Master Title', type: 'string' }),
    defineField({ name: 'masterBio', title: 'Master Bio', type: 'text' }),
    defineField({
      name: 'navigation', title: 'Navigation',
      type: 'array', of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'href', title: 'Href', type: 'string' },
      ]}],
    }),
  ],
});
