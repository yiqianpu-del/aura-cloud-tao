# Make.com 自动化场景搭建指南

> 用 Make.com（原 Integromat）搭建全自动内容流水线。
> 无需代码，可视化拖拽。

---

## 场景 1：定时检测 → AI 写稿 → 自动发布

### 需要的模块

```
SCHEDULER → HTTP (Coze Bot 1) → HTTP (Coze Bot 2) → HTTP (/api/publish) → SLACK 通知
```

### 分步配置

#### 1. SCHEDULER 模块

| 字段 | 值 |
|------|-----|
| Trigger type | Every day |
| Time | 09:00 |
| Start | 立即开始 |

#### 2. HTTP — 调用 Coze Bot 1（热点侦察）

如果你已经有了 Coze Bot 的 API 访问权限：

| 字段 | 值 |
|------|-----|
| Method | POST |
| URL | `https://api.coze.com/v1/chat/completions` |
| Headers | `Authorization: Bearer {{COZE_API_KEY}}` |

也可以跳过 Coze Bot 1，直接用 HTTP 模块拉 Google Trends：

| 字段 | 值 |
|------|-----|
| Method | GET |
| URL | `https://trends.google.com/trending/rss?geo=US` |
| 后续 | 用 RSS 解析器提取关键词 |

#### 3. HTTP — 调用 Coze Bot 2（撰稿人）

如果你有 Coze Bot 2 的 API：

| 字段 | 值 |
|------|-----|
| Method | POST |
| URL | `https://api.coze.com/v1/chat/completions` |
| Body | `{ "bot_id": "YOUR_BOT_2_ID", "query": "Write about {{keyword}}" }` |

#### 4. HTTP — POST → 你的独立站

| 字段 | 值 |
|------|-----|
| Method | POST |
| URL | `https://sacredtaowisdom.com/api/publish` |
| Headers | `Content-Type: application/json` |
| | `X-Api-Key: {{API_PUBLISH_KEY}}` |
| Body | (从 Coze Bot 2 返回的 JSON 直接传入) |

#### 5. SLACK / Email — 通知

可选，发布成功/失败时通知你。

---

## 场景 2：纯 ChatGPT 手动 → 自动发布（推荐起步）

如果你暂时不想接 Coze API，这是最快能跑起来的方案：

```
SCHEDULER → HTTP (/api/publish) → EMAIL
```

### 配置方式

1. **SCHEDULER**: 每周一/三/五 10:00
2. **HTTP**: GET → `https://sacredtaowisdom.com/api/publish`（健康检查）
3. **EMAIL**: 给你发一封提醒邮件："今天该写文章了！"

这样 Make.com 每周提醒你 3 次，你手动去 ChatGPT 写文章 → `bash auto-publish.sh`。

等养成习惯后，再升级到场景 1 的全自动模式。

---

## 场景 3：AI 写完文章 → 自动发推/发帖推广

自动发布后，顺便在社交媒体上推广：

```
HTTP (/api/publish 成功响应)
    ↓
[Router] 拆分为 3 条路径：
    ├── Twitter/X: 发推（文章标题 + 链接）
    ├── Reddit: 发帖到 r/taoism（标题 + 链接）
    └── Webhook: 通知你已发布
```

需要配置各平台的 API Key。
</MDEOF>
echo "Created docs/make-blueprint.md"