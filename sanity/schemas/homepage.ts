import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepage',
  title: '首页内容',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero 标题', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero 副标题', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero 描述', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero 背景图', type: 'image' }),
    defineField({ name: 'featuresHeading', title: '特性卡片标题', type: 'string' }),
    defineField({ name: 'featuresSubheading', title: '特性卡片副标题', type: 'string' }),
    defineField({ name: 'featuresChineseSub', title: '特性卡片中文副标题', type: 'string' }),
    defineField({ name: 'featureCards', title: '特性卡片', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'icon', type: 'string', title: '图标（emoji）' },
        { name: 'title', type: 'string', title: '标题' },
        { name: 'titleCn', type: 'string', title: '中文标题' },
        { name: 'description', type: 'string', title: '描述' },
        { name: 'href', type: 'string', title: '链接' },
      ],
    }]}),
    defineField({ name: 'faqHeading', title: 'FAQ 区块标题', type: 'string' }),
    defineField({ name: 'faqSubheading', title: 'FAQ 区块副标题', type: 'string' }),
    defineField({ name: 'faqs', title: 'FAQ 列表', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'q', type: 'string', title: '问题' },
        { name: 'a', type: 'text', title: '回答' },
      ],
    }]}),
  ],
});
