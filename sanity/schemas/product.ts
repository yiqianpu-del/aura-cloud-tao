import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: '实体商品',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: '名称（英文）', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'nameCn', title: '名称（中文）', type: 'string' }),
    defineField({ name: 'slug', title: 'URL 标识', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'categories', title: '分类标签', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'price', title: '价格（美元）', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: '标语', type: 'string' }),
    defineField({ name: 'description', title: '描述', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'features', title: '特性列表', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'includes', title: '包含物品列表', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: '图片', type: 'image' }),
    defineField({ name: 'isLimitedEdition', title: '是否限量版', type: 'boolean' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline' } },
});
