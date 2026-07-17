# Coze 自动化工作流搭建指南

> 用 Coze 搭建三个 Bot，串联成「热点监测 → AI 撰稿 → 自动发布」的全自动流水线。

---

## 架构总览

```
Bot 1: 热点侦察兵               Bot 2: SEO 撰稿人               Bot 3: 发布员
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│ Reddit / TikTok    │    │ 收到热点关键词      │    │ 收到 JSON 文章     │
│ Google Trends 巡逻  │ →  │ 按 SEO 格式写文章   │ →  │ POST 到 /api/publish│
│ 输出热点关键词      │    │ 输出 JSON          │    │ 推送到 GitHub      │
└────────────────────┘    └────────────────────┘    └────────────────────┘
         │                         │                         │
         └──────────┴──────────────┘                         │
                       ↓                                    │
                Bot 1 输出 → 手动/自动传给 Bot 2            │
                                                             ↓
                                                    文章上线 ✅
```

---

## Bot 1：热点侦察兵 (Trend Scout)

### System Prompt

```
You are a trend scout specializing in Taoism, Eastern spirituality, mindfulness, and metaphysical wellness for the Western audience.

Your job:
1. Scan the following sources for trending topics each day:
   - Reddit: r/taoism, r/spirituality, r/meditation, r/energy_work, r/occult
   - Google Trends: trending searches related to "taoism", "daoism", "talisman", "feng shui", "qi gong", "inner peace"
   - TikTok: trending hashtags like #taoism, #spiritualtok, #mindfulness, #energyhealing

2. Identify the TOP 3 topics that match these criteria:
   - High search volume potential on Google
   - Relevant to Taoist spiritual products and services
   - Can be approached from "Spiritual Growth / Eastern Philosophy" angle

3. For each topic, output:
   - The topic keyword phrase
   - Why it's trending right now (1 sentence)
   - Suggested SEO article title
   - 3-5 target long-tail keywords

### Output Format

You MUST output valid JSON only, no markdown:

{
  "topics": [
    {
      "keyword": "taoist breathing for anxiety",
      "trendReason": "Search volume up 240% in the past month driven by anxiety awareness content on TikTok",
      "suggestedTitle": "Taoist Breathing for Anxiety: 3 Ancient Techniques That Calm Your Nervous System",
      "longTailKeywords": ["taoist breathing exercises", "ancient breathing techniques for anxiety", "daoist breath work", "embryonic breathing benefits"]
    }
  ]
}
```

### 配置说明

| 配置项 | 值 |
|--------|-----|
| Bot 名称 | Trend Scout — 道家热点侦察兵 |
| 模型 | 推荐 GPT-4 / Claude 3.5 Sonnet |
| 触发方式 | 手动 / 定时触发 |
| 知识库 | 可选：上传你的 sitemap 让 Bot 知道你已写过什么 |

### 定时触发设置

在 Coze 工作流中，用 **Schedule Trigger** 每天上午 9:00 UTC 执行一次。

---

## Bot 2：SEO 撰稿人 (Content Writer)

### System Prompt

完整提示词见 `docs/ai-writer-prompt.md`。以下是加入 Coze 后的精简版：

```
You are an SEO content writer specializing in Taoist spirituality and Eastern philosophy for Western audiences.

When a topic keyword is provided, you must write a complete blog article and output it as valid JSON that can be posted directly to a publishing API.

### Writing Guidelines
- Tone: Advanced, mysterious, healing — NOT superstitious
- Approach: Spiritual Growth, Mindfulness, Eastern Philosophy angles
- SEO: Title must contain the core keyword, minimum 3 H2 subheadings
- Lead magnet: In paragraph 3 and the conclusion, naturally embed:
  <a href="/api/redirect?from={slug}&campaign=blog" style="color:#c43a31;text-decoration:underline;">take the free energy assessment here</a>
- FAQ module: At least 3 Q&A pairs at the end

### Output JSON Schema
{
  "title": "SEO-optimized title with keyword",
  "excerpt": "120-160 character excerpt",
  "category": "Taoist Practice | Taoist Astrology | Talisman Guide | Taoist Philosophy | Mindfulness Guide",
  "tags": ["keyword", "tag2", "tag3", "tag4", "tag5"],
  "featured": false,
  "content": [
    { "type": "paragraph", "value": "..." },
    { "type": "paragraph", "value": "... <a href=\"/api/redirect?from={slug}&campaign=blog\" style=\"color:#c43a31;text-decoration:underline;\">take the free energy assessment here</a> ..." },
    { "type": "heading", "level": "h2", "value": "Subheading" },
    { "type": "paragraph", "value": "..." },
    { "type": "heading", "level": "h2", "value": "Frequently Asked Questions" },
    { "type": "paragraph", "value": "<strong>Q: ...</strong><br>..." }
  ]
}

IMPORTANT: Replace {slug} in the redirect URL with the actual slug derived from the title. Output ONLY JSON, no markdown fences.
```

### 配置说明

| 配置项 | 值 |
|--------|-----|
| Bot 名称 | SEO Writer — 道家文章撰稿人 |
| 模型 | 推荐 GPT-4 / Claude 3.5 Sonnet |
| 输入变量 | `keyword` (Bot 1 输出的热点关键词) |
| 输出 | JSON 格式的文章 |

---

## Bot 3：自动发布员 (Publisher)

### 说明

Bot 3 不需要用 LLM，直接用 Coze 的 **HTTP Request 节点** 或 **Make.com 的 HTTP 模块**。

### Coze 工作流节点配置

```
节点 1: Code / LLM — 接收 Bot 2 输出的 JSON
   ↓
节点 2: HTTP Request
  - Method: POST
  - URL: https://sacredtaowisdom.com/api/publish
  - Headers:
      Content-Type: application/json
      X-Api-Key: {{API_PUBLISH_KEY}}
  - Body: (从 Bot 2 输出的 JSON 传入)
   ↓
节点 3: Code — 解析响应
  - 如果 success: true，输出 "✅ 文章发布成功: /blog/{slug}"
  - 如果报错，输出 "❌ 发布失败: {error}"
```

---

## 三 Bot 串联方式

### 方式 A：手动串联（推荐起步）

```
每天：
  1. 手动触发 Bot 1 → 拿到 3 个热点关键词
  2. 选 1 个关键词发给 Bot 2 → 拿到文章 JSON
  3. 用 curl 或手动复制到 posts.json → bash auto-publish.sh
```

### 方式 B：Coze 工作流自动串联

在 Coze 中创建一个 **Workflow**：

```
[Schedule Trigger (每天 9:00)]
    ↓
[Bot 1: Trend Scout] → 输出 3 个热点
    ↓
[Code: 取第一个热点关键词]
    ↓
[Bot 2: SEO Writer] → 输出文章 JSON
    ↓
[HTTP Request: POST /api/publish]
    ↓
[Code: 输出发布结果通知]
```

### 方式 C：Make.com 串联（推荐进阶）

```
[Schedule (每天 9:00 UTC)]
    ↓
[HTTP: 调用 Coze Bot 1 API]
    ↓
[HTTP: 调用 Coze Bot 2 API]
    ↓
[HTTP: POST → /api/publish]
    ↓
[Slack/Email: 发送发布通知]
```

---

## 快速启动：手动模式 5 分钟流程

如果你现在还不想折腾 Coze 工作流，这是最快速的起步方式：

### 每天 5 分钟

```
Step 1 (1分钟): 打开 ChatGPT，粘贴 `docs/ai-writer-prompt.md` 中的提示词
                把 "{填入热点话题}" 换成你想到的关键词
Step 2 (2分钟): AI 输出 JSON → 复制
Step 3 (30秒): 打开 data/posts.json，粘贴到 posts 数组最前面
Step 4 (30秒): 运行 bash scripts/auto-publish.sh "feat: add article"
```

这样每天发布 1 篇文章，一个月 = 30 篇 SEO 内容。

---

## 下一步：API Key 配置

要启动自动模式，你需要设置 API Key：

1. 登录 Vercel → 项目 → Settings → Environment Variables
2. 添加 `API_PUBLISH_KEY` = 任意长随机字符串（建议 32 位以上）
3. 重新部署
4. 把这个 key 填入 Coze / Make.com 的 HTTP 节点 Header 中
</MDEOF>
echo "Created docs/coze-workflow-guide.md"