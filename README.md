# Aura Cloud Tao — Hand-Written Taoist Talismans

> Next.js 14 static site for selling authentic hand-written Taoist talismans.
> Payment via WhatsApp. Built for the US spiritual market.

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Vercel auto-detects Next.js — just click Deploy
4. Add custom domain: `auracloudtao.com`
5. Done.

## Project Structure

```
├── app/            Next.js App Router pages
│   ├── page.tsx          Homepage
│   ├── layout.tsx        Root layout with Header/Footer
│   ├── talismans/        22 talisman catalog
│   │   └── [slug]/       Individual talisman pages
│   ├── about/            About page
│   ├── blog/             Blog
│   └── contact/          Contact page
├── components/    React components
│   ├── header.tsx        Navigation
│   ├── footer.tsx        Footer
│   ├── hero.tsx          Homepage hero
│   ├── features.tsx      Category cards
│   ├── how-it-works.tsx  Ritual process
│   ├── packages.tsx      Pricing packages
│   └── faq.tsx           FAQ accordion
├── data/          static data files
│   ├── site-config.ts    Brand config
│   └── talismans.ts      22 talismans + packages
└── public/         Static assets
```

## To Replace Before Launch

1. `data/site-config.ts` → `whatsapp` number
2. `data/site-config.ts` → `masterName`, `masterBio`
3. Add real product images to `public/images/`
4. Add real logo to header
5. Update GTM ID in `app/layout.tsx`

---

## 🤖 AI 自动化内容流水线

### 架构

```
[热点监测] → [AI 撰稿] → [/api/publish] → [posts.json] → [Git Push] → [Vercel 部署]
```

### 快速起步（手动模式）

```bash
# 1. 去 ChatGPT 写文章（提示词模板在 docs/ai-writer-prompt.md）
# 2. 把 JSON 粘贴到 data/posts.json
# 3. 一键发布
bash scripts/auto-publish.sh "feat: add new article"
```

### 自动化进阶

| 文档 | 用途 |
|------|------|
| `docs/coze-workflow-guide.md` | Coze 三 Bot 串联：侦察 → 撰稿 → 发布 |
| `docs/make-blueprint.md` | Make.com 定时触发 + HTTP 发布场景 |
| `docs/auto-publish-workflow.md` | /api/publish 接口文档 + curl 测试 |

### API 端点

| 路径 | 用途 | 鉴权 |
|------|------|------|
| `POST /api/publish` | AI 调用发文章 | `X-Api-Key` |
| `GET /api/publish` | 健康检查 | 无 |
| `GET /api/redirect` | 智能私域引流分流 | 无 |

### 引流逻辑

```
/api/redirect?from={source}&campaign={channel}
    ↓
🇯🇵🇹🇼 Japan/Taiwan → Line
🌎 Other → WhatsApp
```

## 环境变量

| 变量 | 用途 | 必填 |
|------|------|------|
| `API_PUBLISH_KEY` | /api/publish 鉴权密钥 | 自动模式需配置 |

配置方式：Vercel Dashboard → Settings → Environment Variables
