---
tags:
  - project/nornikel
  - type/deployment
  - status/live
date: 2026-05-07
status: live
owner: Codex
---

# Public portal deployment

## Live link

Публичная ссылка:

```text
https://iraai.ru/nornikel-ai-start-portal/ai_start_course_site/index.html
```

GitHub repository:

```text
https://github.com/makefacktory90-lgtm/nornikel-ai-start-portal
```

## Что опубликовано

Публичная сборка содержит:

- portal / hub prototype;
- 5 pipeline pages;
- prompt library;
- practice materials;
- quality gates;
- content mechanics;
- visual lab;
- несколько project-kit материалов для контекста.

## Что пока не опубликовано

- web-deck presentations;
- speaker notes;
- DOCX source files;
- client source materials;
- internal search notes;
- old drafts.

## Техническое решение

Vercel CLI был не авторизован и запросил ручной login flow.

Чтобы быстро получить живую ссылку, портал опубликован через GitHub Pages:

```text
repo: makefacktory90-lgtm/nornikel-ai-start-portal
branch: main
source: /
```

## Проверка

Проверено через Playwright:

- страница открывается;
- hub redirects/loads;
- модуль `video` переключается;
- консоль без ошибок;
- failed requests нет.

Проверочный скриншот:

```text
output/_deploy_ai_start_portal/live-portal-preview.png
```

## Как обновлять публичную сборку

Рабочая локальная сборка:

```text
output/ai_start_course_site/
output/ai_start_portal_v0/
output/ai_start_kit/
```

Публичный deploy-package:

```text
output/_deploy_ai_start_portal/
```

Обновление:

```text
cd /Users/irinabuyan/Desktop/nornikel/output/_deploy_ai_start_portal
git status
git add .
git commit -m "Update AI Start portal"
git push
```

Важно: deploy-package сейчас намеренно не включает презентации.
