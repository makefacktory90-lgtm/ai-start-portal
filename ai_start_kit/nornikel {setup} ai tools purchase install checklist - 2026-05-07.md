---
tags:
  - project/nornikel
  - type/setup
  - status/draft
date: 2026-05-07
status: draft
owner: Ira + Codex
sources:
  - "https://developers.openai.com/codex/cli"
  - "https://help.openai.com/en/articles/11369540-codex-in-chatgpt"
  - "https://code.claude.com/docs/en/ide-integrations"
  - "https://code.claude.com/docs/en/setup"
  - "https://www.claude.com/product/claude-code"
  - "https://support.google.com/notebooklm/answer/16164461"
  - "https://gemini.google/us/about/"
  - "https://workspace.google.com/products/vids/"
  - "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/"
  - "https://www.opus.pro/"
  - "https://docs.submagic.co/introduction"
  - "https://www.gling.ai/"
---

# AI Start: что купить и что установить

Дата проверки: 2026-05-07.

Назначение: короткая инструкция для закупки, IT и участников. Лицензия сама по себе не готовит рабочее место. До первой практики нужно купить доступ, установить рабочий инструмент и проверить вход.

## 1. Минимальная установка до первой лекции

### Купить

| Что | Кому | Сколько | Зачем |
|---|---|---:|---|
| ChatGPT Business | участники / учебные пары | ideally 30 seats или минимум 15 при работе парами | основной LLM, файлы, проекты, Text OS, базовая практика |
| Codex access через ChatGPT plan | участники, owners, методолог | входит в ChatGPT Plus / Pro / Business / Edu / Enterprise по доступности плана | работа с hub, markdown, промптами, структурами, файлами |
| NotebookLM / Gemini | участники / owners | по Google Workspace policy | источники, research, briefing docs, Google-контур |
| Higgsfield | visual/video группа | 2-3 seats | визуальные и видео-гипотезы, демонстрации 19 мая |
| Submagic / OpusClip / Gling | видео / SMM | 1-2 pilot seats | ускорение captions, clips, rough cut |
| Google Vids / Stitch | owners / visual / digital | demo / pilot | видео-черновики и interface / visual prototypes |
| Claude Code / Claude Team / Enterprise | owners / методолог / advanced | 1-3 seats optional | альтернативный code-agent и длинная структурная работа |
| CapCut Pro или текущий NLE | видео / SMM | 2-4 seats, если нужно | vertical clips, captions, быстрый монтаж |

### Установить

| Если купили | Установить | Кому обязательно | Проверить |
|---|---|---|---|
| ChatGPT Business | ChatGPT desktop/web + проверка Codex-доступа + Codex CLI для owners / advanced | ведущая, методолог, owners, advanced участники | вход в аккаунт, доступ к Codex, открытие project folder |
| Codex | Codex CLI: `npm i -g @openai/codex` | те, кто будет работать с hub / repo / файлами | команда `codex` запускается, видит папку проекта |
| NotebookLM | web app / Workspace access | участники, редакторы, owners | можно создать notebook, загрузить source, получить grounded answer |
| Gemini | Gemini app / Workspace access | участники, owners | доступ не блокируется, можно загрузить файл / использовать Deep Research по policy |
| Claude Code | Claude Code app / CLI + VS Code extension | owners / advanced / технический помощник | вход в Claude, открывается panel в VS Code, CLI `claude` запускается |
| Higgsfield | web account + доступ к workspace / credits | visual/video группа | можно создать image/video test, понятен лимит credits |
| Submagic / OpusClip / Gling | web/desktop account | видео / SMM pilot | можно загрузить тестовый ролик, получить captions / clips / rough cut |
| Google Vids / Stitch | Workspace / Google Labs access | owners / visual / digital | Vids открывает Drive-file, Stitch генерирует простой UI draft |
| CapCut / NLE | desktop app + project preset | видео / SMM | можно импортировать видео, сделать captions/export |
| GitHub | GitHub account + доступ к repo / Pages | owners / technical helper | есть доступ к hub repository и live link |
| VS Code | VS Code + нужные extensions | owners / advanced / technical helper | открывается папка проекта, видны markdown-файлы |

## 2. OpenAI route: ChatGPT Business -> Codex

Если покупаем ChatGPT Business, сразу проверяем Codex.

### Что значит "готово"

```text
1. Участник входит в ChatGPT Business.
2. У участника есть доступ к Codex по плану.
3. На рабочих машинах owners / advanced установлен Codex CLI.
4. Codex открывает папку проекта и может читать markdown-файлы hub.
5. Участник понимает разницу:
   - ChatGPT: быстрый разговор, анализ, файлы;
   - Codex: работа с папкой проекта, hub, структурами, файлами и изменениями.
```

### Команды для IT / технического помощника

```bash
# Проверить Node.js / npm
node --version
npm --version

# Установить Codex CLI
npm i -g @openai/codex

# Запустить в папке проекта
cd <project-folder>
codex
```

Важно: не отправлять участников на первую лекцию только с "купленным ChatGPT". Для практики нужен проверенный вход и понятный рабочий маршрут.

## 3. Claude route: Claude Code -> app / CLI / extension

Если покупаем Claude Code, сразу устанавливаем рабочую среду.

### Что поставить

```text
1. Claude Code app или CLI.
2. VS Code extension Claude Code.
3. VS Code как рабочее приложение для папки проекта.
4. GitHub / repository access, если участник работает с hub.
```

### Команды для IT / технического помощника

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# npm fallback, если так согласовано IT
npm install -g @anthropic-ai/claude-code

# Запуск в папке проекта
cd <project-folder>
claude
```

Для VS Code:

```text
1. Открыть Extensions.
2. Найти "Claude Code".
3. Установить extension.
4. Войти в Anthropic account.
5. Открыть папку проекта.
6. Проверить, что Claude Code panel видит текущие файлы.
```

## 4. Что проверить до занятия

Проверка Google / knowledge layer:

```text
[ ] NotebookLM доступен в рабочем аккаунте;
[ ] можно создать notebook;
[ ] можно загрузить PDF / Google Doc / YouTube / audio по policy;
[ ] ответы дают citations / source references;
[ ] Gemini доступен в Workspace / аккаунте;
[ ] Deep Research / file upload доступны, если они нужны в программе;
[ ] Google Vids / Stitch доступны хотя бы для demo / pilot, если их показываем.
```

Проверка video acceleration layer:

```text
[ ] выбран 1 pilot-сервис из Submagic / OpusClip / Gling или 2-3 сервиса для сравнения;
[ ] можно загрузить тестовый ролик;
[ ] можно получить captions;
[ ] можно получить clips / rough cut;
[ ] можно экспортировать в MP4 / SRT / монтажный инструмент;
[ ] понятно, какие материалы нельзя загружать из-за прав / политики.
```

Минимальная проверка на каждого участника / учебную пару:

```text
[ ] есть доступ к основному LLM;
[ ] вход в аккаунт не блокируется корпоративной сетью;
[ ] открывается hub link;
[ ] можно открыть practice material;
[ ] можно скопировать starter prompt;
[ ] можно получить первый output;
[ ] понятно, куда сохранить хороший / плохой пример.
```

Проверка для owners / technical helper:

```text
[ ] Codex или Claude Code запускается в папке проекта;
[ ] agent видит markdown-файлы;
[ ] можно внести тестовую правку;
[ ] можно откатить / не сохранять тестовую правку;
[ ] есть доступ к GitHub repository;
[ ] live portal открывается после деплоя.
```

## 5. Короткая формулировка для закупки

> Покупка AI-доступа должна идти вместе с установкой рабочих инструментов. Если покупаем ChatGPT Business, проверяем доступ к Codex и ставим Codex CLI для тех, кто работает с hub и файлами. Если покупаем Claude Code, ставим Claude Code app / CLI и VS Code extension. До первой лекции нужно проверить вход, доступ к hub и тестовый запуск на учебной папке.

## 6. Решение на сейчас

```text
Base:
ChatGPT Business для участников.
Codex для ведущей / методолога / owners / advanced.

Optional code-agent:
Claude Code для 1-3 owners, если нужен второй agent route.

Visual/video:
Higgsfield 2-3 seats.
Submagic / OpusClip / Gling 1-2 pilot seats.
CapCut / current NLE только видео-команде.

Knowledge / Google:
NotebookLM и Gemini обязательно проверить.
Google Vids / Stitch как demo / pilot.

Infrastructure:
GitHub access + live hub link + VS Code для тех, кто работает с файлами.
```
