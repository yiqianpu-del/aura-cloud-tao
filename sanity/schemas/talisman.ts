import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'talisman',
  title: '灵符商品',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: '名称（英文）', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'chineseName', title: '名称（中文）', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL 标识', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: '分类', type: 'string', options: { list: ['wealth', 'protection', 'health', 'luck'] }, validation: (r) => r.required() }),
    defineField({ name: 'price', title: '价格（美元）', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'description', title: '描述', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'features', title: '特性列表', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'packages', title: '套餐', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: '套餐名' },
        { name: 'price', type: 'number', title: '价格' },
      ],
    }]}),
    defineField({ name: 'image', title: '图片', type: 'image' }),
  ],
  preview: { select: { title: 'name', subtitle: 'category' } },
});
