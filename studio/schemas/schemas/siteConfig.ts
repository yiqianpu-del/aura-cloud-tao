import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  groups: [
    { name: 'brand', title: 'Brand' },
    { name: 'contact', title: 'Contact' },
    { name: 'master', title: 'Master Info' },
  ],
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', group: 'brand' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'brand' }),
    defineField({ name: 'description', title: 'Meta Description', type: 'text', rows: 3, group: 'brand' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', group: 'brand' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string', group: 'contact' }),
    defineField({ name: 'email', title: 'Email', type: 'string', group: 'contact' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url', group: 'contact' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url', group: 'contact' }),
    defineField({ name: 'masterName', title: 'Master Name', type: 'string', group: 'master' }),
    defineField({ name: 'masterTitle', title: 'Master Title', type: 'string', group: 'master' }),
    defineField({ name: 'masterBio', title: 'Master Bio', type: 'text', rows: 5, group: 'master' }),
    defineField({ name: 'masterImage', title: 'Master Photo', type: 'image', group: 'master' }),
  ],
});
