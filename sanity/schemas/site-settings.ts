import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: '站点设置',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: '网站名称', type: 'string' }),
    defineField({ name: 'tagline', title: '标语', type: 'string' }),
    defineField({ name: 'description', title: '站点描述（SEO）', type: 'text' }),
    defineField({ name: 'url', title: '域名', type: 'url' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp 号码', type: 'string' }),
    defineField({ name: 'whatsappLink', title: 'WhatsApp 完整链接', type: 'url' }),
    defineField({ name: 'email', title: '联系邮箱', type: 'string' }),
    defineField({ name: 'masterName', title: '法师名称', type: 'string' }),
    defineField({ name: 'masterTitle', title: '法师头衔', type: 'string' }),
    defineField({ name: 'masterBio', title: '法师简介', type: 'text' }),
    defineField({ name: 'navigation', title: '导航菜单', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: '菜单名' },
        { name: 'href', type: 'string', title: '链接' },
      ],
    }]}),
  ],
});
