import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pageContent',
  title: '页面内容',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId', title: '页面标识', type: 'string', validation: (r) => r.required(),
      description: 'about | faq | contact | community | culture | learn | shop | services | divination | fengshui',
    }),
    defineField({ name: 'heading', title: '主标题', type: 'string' }),
    defineField({ name: 'subheading', title: '副标题', type: 'string' }),
    defineField({ name: 'body', title: '正文内容', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'data', title: '附加数据（JSON）', type: 'text',
      description: '存储该页面的结构化数据（如 FAQ列表、联系信息hours等），JSON 格式' }),
  ],
  preview: { select: { title: 'pageId', subtitle: 'heading' } },
});
