'use client';
import { useEffect } from 'react';

const CMS_CONFIG = {
  backend: {
    name: "github",
    repo: "yiqianpu-del/aura-cloud-tao",
    branch: "main",
  },
  media_folder: "public/images/uploads",
  public_folder: "/images/uploads",
  collections: [
    {
      name: "homepage",
      label: "🏠 首页内容",
      editor: { preview: false },
      files: [
        {
          name: "hero",
          label: "Hero 大横幅",
          file: "content/homepage/hero.md",
          fields: [
            { label: "主标题", name: "heroTitle", widget: "string" },
            { label: "副标题", name: "heroSubtitle", widget: "string" },
            { label: "描述文字", name: "heroDescription", widget: "text", required: false },
            { label: "背景图片", name: "heroBackground", widget: "image", required: false },
            { label: "按钮文字", name: "ctaText", widget: "string", default: "Begin Your Journey" },
          ],
        },
        {
          name: "features",
          label: "四大板块（Features）",
          file: "content/homepage/features.md",
          fields: [
            { label: "板块 1 标题", name: "section1Title", widget: "string" },
            { label: "板块 1 中文名", name: "section1Cn", widget: "string" },
            { label: "板块 1 描述", name: "section1Desc", widget: "text" },
            { label: "板块 1 链接", name: "section1Href", widget: "string" },
            { label: "板块 2 标题", name: "section2Title", widget: "string" },
            { label: "板块 2 中文名", name: "section2Cn", widget: "string" },
            { label: "板块 2 描述", name: "section2Desc", widget: "text" },
            { label: "板块 2 链接", name: "section2Href", widget: "string" },
            { label: "板块 3 标题", name: "section3Title", widget: "string" },
            { label: "板块 3 中文名", name: "section3Cn", widget: "string" },
            { label: "板块 3 描述", name: "section3Desc", widget: "text" },
            { label: "板块 3 链接", name: "section3Href", widget: "string" },
            { label: "板块 4 标题", name: "section4Title", widget: "string" },
            { label: "板块 4 中文名", name: "section4Cn", widget: "string" },
            { label: "板块 4 描述", name: "section4Desc", widget: "text" },
            { label: "板块 4 链接", name: "section4Href", widget: "string" },
          ],
        },
        {
          name: "howitworks",
          label: "仪式流程（How It Works）",
          file: "content/homepage/how-it-works.md",
          fields: [
            { label: "大标题", name: "sectionTitle", widget: "string", default: "How Your Ritual Is Performed" },
            { label: "副标题", name: "sectionSubtitle", widget: "string" },
            { label: "步骤 1 标题", name: "step1Title", widget: "string", default: "Preparation of the altar" },
            { label: "步骤 1 中文", name: "step1Cn", widget: "string", default: "布置道坛" },
            { label: "步骤 2 标题", name: "step2Title", widget: "string", default: "Lighting incense and prayer" },
            { label: "步骤 2 中文", name: "step2Cn", widget: "string", default: "点香祈愿" },
            { label: "步骤 3 标题", name: "step3Title", widget: "string", default: "Hand-writing your talisman" },
            { label: "步骤 3 中文", name: "step3Cn", widget: "string", default: "书写符箓" },
            { label: "步骤 4 标题", name: "step4Title", widget: "string", default: "Consecration ceremony" },
            { label: "步骤 4 中文", name: "step4Cn", widget: "string", default: "开光仪式" },
            { label: "CTA 按钮文字", name: "ctaText", widget: "string", default: "Reserve Your Ritual" },
          ],
        },
        {
          name: "faq",
          label: "常见问题（FAQ）",
          file: "content/homepage/faq.md",
          fields: [
            { label: "大标题", name: "sectionTitle", widget: "string", default: "Frequently Asked Questions" },
            { label: "副标题", name: "sectionSubtitle", widget: "string" },
            {
              label: "FAQ 列表", name: "faqs", widget: "list", summary: "{{fields.q}}",
              fields: [
                { label: "问题", name: "q", widget: "string" },
                { label: "答案", name: "a", widget: "text" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "settings",
      label: "⚙️ 网站设置",
      editor: { preview: false },
      files: [
        {
          name: "general",
          label: "General Settings",
          file: "content/settings/general.md",
          fields: [
            { label: "站点名", name: "siteName", widget: "string" },
            { label: "标语", name: "tagline", widget: "string" },
            { label: "WhatsApp 号码", name: "whatsapp", widget: "string" },
            { label: "邮箱", name: "email", widget: "string", required: false },
            { label: "法师名", name: "masterName", widget: "string" },
            { label: "法师头衔", name: "masterTitle", widget: "string" },
            { label: "法师简介", name: "masterBio", widget: "text", required: false },
            { label: "法师照片", name: "masterImage", widget: "image", required: false },
          ],
        },
      ],
    },
    {
      name: "services",
      label: "🪔 法事服务",
      editor: { preview: false },
      files: [{
        name: "all", label: "服务列表", file: "content/services/services.yaml", format: "yaml",
        fields: [{
          label: "服务列表", name: "services", widget: "list", summary: "{{fields.slug}} — {{fields.title}}",
          fields: [
            { label: "Slug (URL)", name: "slug", widget: "string" },
            { label: "标题 (英文)", name: "title", widget: "string" },
            { label: "标题 (中文)", name: "titleCn", widget: "string" },
            { label: "分类", name: "category", widget: "select", options: ["ritual", "divination", "fengshui"] },
            { label: "标语", name: "tagline", widget: "string" },
            { label: "详细描述", name: "description", widget: "text" },
            { label: "适合人群", name: "whoNeedsIt", widget: "list", field: { label: "人群", name: "item", widget: "string" } },
            { label: "流程", name: "process", widget: "list", summary: "{{fields.step}}. {{fields.title}}", fields: [{ label: "步骤", name: "step", widget: "number" }, { label: "标题", name: "title", widget: "string" }, { label: "描述", name: "description", widget: "text" }] },
            { label: "价格", name: "pricing", widget: "object", fields: [
              { label: "起价 (USD)", name: "startingFrom", widget: "number" },
              { label: "套餐选项", name: "options", widget: "list", required: false, fields: [{ label: "套餐名", name: "name", widget: "string" }, { label: "价格", name: "price", widget: "number" }] },
            ] },
            { label: "交付方式", name: "delivery", widget: "string" },
            { label: "包含内容", name: "includes", widget: "list", field: { label: "项目", name: "item", widget: "string" } },
            { label: "图片", name: "image", widget: "image" },
            { label: "FAQ", name: "faq", widget: "list", required: false, fields: [{ label: "问题", name: "q", widget: "string" }, { label: "答案", name: "a", widget: "text" }] },
            { label: "关联产品", name: "relatedProducts", widget: "list", required: false, field: { label: "产品 Slug", name: "slug", widget: "string" } },
          ],
        }],
      }],
    },
    {
      name: "products",
      label: "🎴 商城产品",
      editor: { preview: false },
      files: [{
        name: "all", label: "产品列表", file: "content/products/products.yaml", format: "yaml",
        fields: [{
          label: "产品列表", name: "products", widget: "list", summary: "{{fields.slug}} — {{fields.name}}",
          fields: [
            { label: "Slug (URL)", name: "slug", widget: "string" },
            { label: "产品名 (英文)", name: "name", widget: "string" },
            { label: "产品名 (中文)", name: "nameCn", widget: "string" },
            { label: "分类", name: "categories", widget: "list", field: { label: "分类", name: "cat", widget: "string" } },
            { label: "价格 (USD)", name: "price", widget: "number" },
            { label: "标语", name: "tagline", widget: "string" },
            { label: "描述", name: "description", widget: "text" },
            { label: "特色", name: "features", widget: "list", field: { label: "特色", name: "item", widget: "string" } },
            { label: "包含配件", name: "includes", widget: "list", field: { label: "项目", name: "item", widget: "string" } },
            { label: "图片", name: "image", widget: "image" },
            { label: "限量化", name: "isLimitedEdition", widget: "boolean", required: false },
          ],
        }],
      }],
    },
    {
      name: "talismans",
      label: "📿 符箓列表",
      editor: { preview: false },
      files: [{
        name: "all", label: "符箓列表 + 套餐 + 分类", file: "content/talismans/talismans.yaml", format: "yaml",
        fields: [
          { label: "符箓列表", name: "talismans", widget: "list", summary: "{{fields.slug}} — {{fields.name}}", fields: [
            { label: "Slug (URL)", name: "slug", widget: "string" },
            { label: "名称 (英文)", name: "name", widget: "string" },
            { label: "名称 (中文)", name: "chineseName", widget: "string" },
            { label: "分类", name: "category", widget: "select", options: ["wealth", "protection", "health", "luck"] },
            { label: "价格 (USD)", name: "price", widget: "number" },
            { label: "描述", name: "description", widget: "text" },
            { label: "功能特点", name: "features", widget: "list", field: { label: "特点", name: "item", widget: "string" } },
          ]},
          { label: "祈福套餐", name: "talismanPackages", widget: "list", summary: "{{fields.name}}", fields: [
            { label: "套餐名", name: "name", widget: "string" },
            { label: "价格 (USD)", name: "price", widget: "number" },
            { label: "描述", name: "description", widget: "text" },
            { label: "分类", name: "category", widget: "string" },
          ]},
          { label: "符箓分类", name: "talismanCategories", widget: "list", summary: "{{fields.name}}", fields: [
            { label: "ID", name: "id", widget: "string" },
            { label: "名称", name: "name", widget: "string" },
            { label: "图标", name: "icon", widget: "string" },
            { label: "描述", name: "description", widget: "string" },
          ]},
        ],
      }],
    },
    {
      name: "blog",
      label: "📝 博客",
      label_singular: "Post",
      folder: "content/blog",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "标题", name: "title", widget: "string" },
        { label: "日期", name: "date", widget: "datetime" },
        { label: "简介", name: "excerpt", widget: "text", required: false },
        { label: "图片", name: "image", widget: "image", required: false },
        { label: "正文", name: "body", widget: "markdown" },
      ],
    },
  ],
};

export default function AdminPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3/dist/decap-cms.js';
    script.async = true;

    script.onload = () => {
      const tryInit = () => {
        const win = window as any;
        if (win.CMS) {
          // Remove the loading indicator
          const root = document.getElementById('cms-root');
          if (root) root.style.display = 'none';
          win.CMS.init({ config: CMS_CONFIG });
        } else {
          setTimeout(tryInit, 200);
        }
      };
      tryInit();
    };

    document.body.appendChild(script);
    // DO NOT clean up — CMS takes control of the DOM
  }, []);

  return (
    <div id="cms-root" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      color: '#666',
      fontFamily: 'system-ui, sans-serif',
    }}>
      Loading admin panel...
    </div>
  );
}
