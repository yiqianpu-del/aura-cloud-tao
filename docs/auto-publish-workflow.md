# AI 自动化发布工作流对接文档

## 接口地址

```
POST https://sacredtaowisdom.com/api/publish
```

## 鉴权方式

在 HTTP Header 中传入：

```
X-Api-Key: your-api-publish-key
```

> 生产环境的 `API_PUBLISH_KEY` 已在 Vercel 环境变量中设置。如不知道密钥，请联系管理员获取。

---

## 请求体格式（JSON）

```json
{
  "title": "文章标题（必填）",
  "excerpt": "文章摘要（必填，建议 120-160 字符）",
  "content": [
    {
      "type": "paragraph",
      "value": "段落文本"
    },
    {
      "type": "heading",
      "level": "h2",
      "value": "副标题"
    },
    {
      "type": "list",
      "ordered": false,
      "value": ["列表项1", "列表项2"]
    },
    {
      "type": "orderedList",
      "value": ["第一", "第二", "第三"]
    },
    {
      "type": "cta",
      "value": "引导文案",
      "linkText": "按钮文字",
      "linkHref": "/api/redirect?from={slug}&campaign=blog"
    }
  ],
  "slug": "url-slug（可选，不传则自动从标题生成）",
  "author": "Master Li（可选，默认 Master Li）",
  "category": "文章分类（可选，默认 Taoist Practice）",
  "tags": ["tag1", "tag2"],
  "image": "/images/blog/xxx.jpg（可选）",
  "imageAlt": "图片描述（可选）",
  "metaTitle": "自定义 SEO 标题（可选，自动生成）",
  "metaDescription": "自定义 Meta 描述（可选，默认取 excerpt）",
  "featured": true,
  "readingTime": "5 min read（可选，自动估算）"
}
```

### content 支持的内容块类型

| type | 必填字段 | 说明 |
|------|---------|------|
| `paragraph` | `value` | 段落文本 |
| `heading` | `level` + `value` | 标题，level 为 `h2` / `h3` |
| `list` | `ordered: false` + `value[]` | 无序列表 |
| `orderedList` | `value[]` | 有序列表 |
| `cta` | `value` + `linkText` + `linkHref` | 底部引流卡片 |

---

## 响应格式

**成功（201）：**
```json
{
  "success": true,
  "slug": "article-url-slug",
  "action": "created",
  "url": "/blog/article-url-slug",
  "message": "\"文章标题\" published → /blog/article-url-slug"
}
```

**更新已有文章（200）：**
```json
{
  "success": true,
  "slug": "article-url-slug",
  "action": "updated",
  "url": "/blog/article-url-slug",
  "message": "..."
}
```

---

## Coze 工作流配置步骤

### 1. 创建 HTTP 请求节点

| 字段 | 值 |
|------|-----|
| Method | `POST` |
| URL | `https://sacredtaowisdom.com/api/publish` |
| Headers | `X-Api-Key: {{API_PUBLISH_KEY}}` |
| Content-Type | `application/json` |

### 2. 在 Coze 中配置撰文 Prompt

将下面的提示词作为 Coze Bot 的 System Prompt：

```
You are an SEO content writer specializing in Taoist spirituality and Eastern philosophy.
When writing articles, you MUST output valid JSON matching this schema:

{
  "title": "SEO-optimized title",
  "excerpt": "120-160 char excerpt",
  "content": [
    { "type": "paragraph", "value": "..." },
    { "type": "heading", "level": "h2", "value": "..." },
    { "type": "paragraph", "value": "..." },
    ...
  ],
  "tags": ["tag1", "tag2"],
  "category": "Category Name",
  "featured": false
}
```

### 3. 串联流程

```
定时触发（每天） → 爬取 Reddit/TikTok 热点 → AI 撰稿 → HTTP POST → 上线
```

---

## Make.com 配置步骤

### Webhook 模块

1. 添加 **HTTP** 模块
2. Method: `POST`
3. URL: `https://sacredtaowisdom.com/api/publish`
4. Headers:
   - `X-Api-Key`: `{{API_PUBLISH_KEY}}`
   - `Content-Type`: `application/json`
5. Body: 传入 AI 生成的 JSON

### 测试用 curl 命令

```bash
curl -X POST https://sacredtaowisdom.com/api/publish \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: your-key" \
  -d '{
    "title": "5 Taoist Breathing Exercises for Anxiety Relief",
    "excerpt": "Learn 5 simple Taoist breathing techniques to calm anxiety and restore inner peace naturally.",
    "category": "Taoist Practice",
    "tags": ["breathing", "anxiety", "qi-gong", "meditation"],
    "featured": false,
    "content": [
      {
        "type": "paragraph",
        "value": "Anxiety is not your enemy — it is your energy speaking to you in a language you have forgotten."
      },
      {
        "type": "heading",
        "level": "h2",
        "value": "1. Embryonic Breathing (胎息)"
      },
      {
        "type": "paragraph",
        "value": "Sit comfortably, place your awareness on the lower abdomen, and breathe as softly as an unborn child."
      },
      {
        "type": "heading",
        "level": "h2",
        "value": "Frequently Asked Questions"
      },
      {
        "type": "paragraph",
        "value": "<strong>Q: How often should I practice?</strong><br>Daily practice of 5-10 minutes yields the best results."
      }
    ]
  }'
```

---

## 本地测试

```bash
# 1. 启动开发服务器
cd sacred-tao-wisdom && npx next dev

# 2. 用 curl 测试（本地无需 Api-Key）
curl -X POST http://localhost:3000/api/publish \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: test-key" \
  -d @test-article.json
```
