import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: '博客文章',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: '标题', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL 标识', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: '发布日期', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'modifiedDate', title: '修改日期', type: 'datetime' }),
    defineField({ name: 'author', title: '作者', type: 'string' }),
    defineField({ name: 'category', title: '分类', type: 'string', options: { list: ['Wellness', 'Talismans', 'Feng Shui', 'Divination', 'Culture'] } }),
    defineField({ name: 'tags', title: '标签', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'excerpt', title: '摘要', type: 'text' }),
    defineField({ name: 'metaTitle', title: 'SEO 标题', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'SEO 描述', type: 'text' }),
    defineField({ name: 'featured', title: '是否精选', type: 'boolean' }),
    defineField({ name: 'readingTime', title: '阅读时间', type: 'string' }),
    defineField({ name: 'body', title: '正文', type: 'array', of: [{ type: 'block' }], validation: (r) => r.required() }),
    defineField({ name: 'image', title: '封面配图', type: 'image' }),
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
});
