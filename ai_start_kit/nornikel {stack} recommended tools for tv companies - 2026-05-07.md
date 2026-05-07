---
tags:
  - project/nornikel
  - type/stack
  - status/draft
date: 2026-05-07
status: draft
owner: Ira + Codex
sources:
  - "https://chatgpt.com/pricing/"
  - "https://developers.openai.com/codex/cli"
  - "https://help.openai.com/en/articles/11369540-codex-in-chatgpt"
  - "https://support.anthropic.com/en/articles/9266767-what-is-the-team-plan"
  - "https://claude.com/pricing/enterprise"
  - "https://code.claude.com/docs/en/ide-integrations"
  - "https://code.claude.com/docs/en/setup"
  - "https://support.google.com/notebooklm/answer/16164461"
  - "https://gemini.google/us/about/"
  - "https://workspace.google.com/products/vids/"
  - "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/"
  - "https://www.opus.pro/"
  - "https://docs.submagic.co/introduction"
  - "https://www.gling.ai/"
  - "https://higgsfield.ai/"
  - "https://higgsfield.ai/cli"
  - "https://www.capcut.com/help/how-much-does-capcut-pro-cost"
---

# Рекомендуемый AI-стек для телекомпаний

Дата проверки: 2026-05-07.

## 0. Стек для первого блока на 30 участников

Цель закупки: не показать витрину нейросетей, а дать участникам общий инструмент для практики и несколько специализированных пилотов для видео / визуала.

Важно: в этом курсе базовая работа не должна замыкаться только на чате. ChatGPT нужен как основной LLM-доступ, но рабочая сборка курса опирается на Codex / code-agent route: hub, markdown-файлы, workflows, prompts, gates, examples.

Еще важнее: Submagic, OpusClip, Gling и похожие продукты показываем не как "главные нейронки", а как production acceleration layer. Это сервисы, которые ускоряют монтажный участок: captions, rough cut, silences, clips, reframing, export. Методология курса остается выше: что выбрать, по каким критериям, как проверить контекст и где сохранить пример.

Setup-инструкция:

- `nornikel {setup} ai tools purchase install checklist - 2026-05-07.md`

### Что нужно до первой лекции

| Приоритет | Инструмент | Сколько | Кому | Зачем |
|---|---|---:|---|---|
| 1 | ChatGPT Business | ideally 30 seats / минимум работа парами | все участники или учебные пары | hands-on практика, Text OS, файлы, проекты, prompt/workflow |
| 2 | Codex access / Codex CLI | ведущая + owners + advanced | методолог, technical helper, owners | работа с hub, файлами, markdown, prompt library, обновлениями курса |
| 3 | Higgsfield | 2-3 seats | visual/video команда, методолог, один продвинутый участник | визуальные и видео-гипотезы, cover/title/asset thinking, демонстрации 19 мая |
| 4 | Claude Code / Claude Team / Enterprise | 1-3 seats optional | owners, методолог, сильные редакторы | второй code-agent route, длинные материалы, методология, альтернативная проверка структуры и тона |
| 5 | NotebookLM / Gemini | доступ через Google account / Workspace | все участники или owners по доступности | source-grounded research, briefs, audio/video overviews, Google ecosystem |
| 6 | CapCut Pro / текущий NLE | 2-4 seats, если нужно | видео / SMM | vertical clips, captions, быстрый production route |
| 7 | Submagic / OpusClip / Gling | 1-2 pilot seats на сравнение | видео / SMM | ускорить нарезку, captions, клипы, rough cut |
| 8 | Google Vids / Stitch | pilot / demo | owners, visual/video, digital | быстрые черновики видео и UI/visual prototypes |
| 9 | Транскрипция | 1 согласованный маршрут | редакторы / видео | transcript + timestamps для текстового и видео-пайплайна |

Если закупка не успевает:

```text
минимум для первой лекции:
ChatGPT Business или согласованный корпоративный LLM для всех / пар
+ Codex для ведущей / owners / technical helper
+ NotebookLM / Gemini для работы с источниками и Google-контуром
+ один демонстрационный доступ Higgsfield
+ один pilot video acceleration tool: Submagic / OpusClip / Gling
+ понятный способ получить transcript
```

### Что не нужно покупать до первой лекции

- отдельные генераторы картинок для всех;
- 5-7 AI-video / clipping сервисов одновременно;
- ElevenLabs / voice cloning до юридического согласования;
- автоматизации и n8n до появления повторяемых workflows;
- тяжелую LMS;
- enterprise-пакеты без security route.

## 1. Короткий ответ для партнеров

Если вас завтра спрашивают "что покупать?", отвечаем так:

> Для старта не нужно покупать 15 нейросетей. Нужен один сильный командный LLM, Codex/code-agent route для hub, Google-контур для источников и знаний, 2-3 visual/video seats и 1-2 pilot-сервиса для ускорения монтажа. Базовая рекомендация: ChatGPT Business + Codex, NotebookLM/Gemini, Higgsfield пилотно, один из Submagic/OpusClip/Gling на тест, CapCut или текущий NLE для монтажа, Claude Code - опционально для owners.

## 2. Базовый стек v1

### Must have

| Инструмент | Кому | Зачем | Рекомендация |
|---|---|---|---|
| ChatGPT Business | участники курса, редакторы, SMM, owners | текст, анализ, файлы, проекты, custom GPTs, shared workspace | основной командный LLM |
| Codex / code-agent route | методолог, owners, technical helper | hub, markdown, prompt library, workflows, gates | ставить вместе с ChatGPT route |
| NotebookLM | участники, редакторы, owners | source-grounded notebooks, briefs, citations, audio/video overviews | обязательно дать как knowledge layer |
| Gemini / Google Workspace | участники, owners | Google ecosystem, Deep Research, Docs/Drive/YouTube, multimodal work | обязательно показать, если Workspace разрешен |
| Монтажный инструмент редакции | видео-команда | vertical edit, captions, export | оставить привычный Premiere / DaVinci / CapCut, не ломать production |
| Транскрипция | видео, редакторы | transcript + timestamps | использовать текущий сервис или быстрый fallback |
| GitHub Pages / markdown hub | owners, Codex/helper | база знаний, workflows, prompts, gates | v1 уже работает |

### Pilot seats

| Инструмент | Кому | Зачем | Рекомендация |
|---|---|---|---|
| Higgsfield | 2-3 visual/video участника | visual/video assets, AI image/video, Marketing Studio, MCP/agent workflow | купить пилот, не всем сразу |
| Submagic / OpusClip / Gling | 1-2 video/SMM участника | captions, rough cut, silence removal, short clips, reframing | показать как acceleration tools, выбрать один после теста |
| Google Vids | owners / internal comms / training | editable video drafts from prompt + Drive file, Workspace sharing | demo / pilot, если Workspace доступен |
| Google Stitch | visual / digital / методолог | high-fidelity UI / portal / interface prototypes from natural language | demo / pilot для visual thinking, не базовая закупка всем |
| Claude Team / Enterprise | 1-3 owners / методолог / сильные редакторы | длинные документы, методология, альтернативный reasoning | опционально, не базовая закупка для всех |
| CapCut Pro | видео/SMM | captions, vertical packaging, быстрый монтаж | покупать только если редакции реально будут монтировать там |

### Не покупать до курса

- отдельные AI-video сервисы "на всякий случай";
- много image generators одновременно;
- сложную LMS;
- n8n / automation seats до появления повторяемых examples;
- enterprise-пакеты без security/procurement решения.

## 3. Почему ChatGPT как база

Официальная страница ChatGPT pricing показывает Business как защищенное collaborative workspace решение для команд: apps, data analysis, record mode, canvas, shared projects, custom workspace GPTs, admin controls, SAML/MFA, no training on business data, 2+ users.

Для курса это закрывает:

- Text OS;
- prompt/workflow library;
- files and context;
- custom GPTs / shared projects;
- базовую работу большинства участников.

Рекомендация:

```text
ChatGPT Business для основной рабочей группы.
Codex сразу включить в setup как рабочий code-agent route для hub и файлов.
```

Если корпоративная безопасность не пропускает ChatGPT, нужен согласованный enterprise/procurement route или локальный/разрешенный LLM как fallback.

## 3.1. Codex: устанавливаем вместе с ChatGPT route

OpenAI указывает, что Codex входит в ChatGPT Plus, Pro, Business, Edu и Enterprise планы, а Codex CLI можно установить и запускать локально в терминале. Для курса это важно: мы работаем не только в чате, а с папкой проекта, hub, markdown-файлами, prompts, workflows и examples.

Рекомендация:

```text
Если покупаем ChatGPT Business:
1. Проверяем доступ к Codex.
2. Устанавливаем Codex CLI для ведущей, методолога, owners и technical helper.
3. Проверяем запуск Codex в папке проекта.
4. Проверяем, что Codex видит hub-файлы и может предложить правку.
```

Базовая команда для technical helper:

```bash
npm i -g @openai/codex
codex
```

## 4. Claude: не всем, а owners

Claude Team - платный командный план для Claude chat. Claude Enterprise предназначен для организаций с расширенной безопасностью, compliance, user management и масштабированием.

Если покупаем не просто Claude chat, а Claude Code, устанавливаем:

- Claude Code app / CLI;
- VS Code extension Claude Code;
- VS Code как рабочее приложение для папки проекта;
- доступ к GitHub / hub repository, если этот человек работает с файлами.

Для курса Claude полезен:

- методологу;
- AI-hub owners;
- людям, которые работают с длинными документами и структурой;
- для альтернативной проверки tone/style/workflow.
- как второй code-agent route для advanced / owners.

Рекомендация:

```text
1-3 seats Claude Team/Enterprise по доступности и procurement.
Не покупать всем участникам на старте.
Если покупаем Claude Code - сразу ставим app / CLI и VS Code extension.
```

## 5. Higgsfield: пилот для визуала и видео

Higgsfield сейчас позиционируется как AI video/image platform: images, videos, motion control, Soul, Marketing Studio. Также есть MCP/agent access: генерации используют кредитную систему текущего Higgsfield plan.

Для AI Start это полезно не как "сделать все ролики за редакцию", а как:

- visual/video asset layer;
- быстрые варианты для cover/title/visual metaphor;
- демонстрация AI production thinking;
- связка с agent workflow для advanced участников.

Рекомендация:

```text
2-3 Higgsfield seats на пилот: методолог + visual/video people.
После 19 мая решить, расширять или нет.
```

## 5.1. Google layer: NotebookLM, Gemini, Vids, Stitch

Google-контур стоит показать обязательно, но не смешивать все продукты в одну кучу.

### NotebookLM

NotebookLM - knowledge / source-grounded layer. Google описывает его как инструмент, куда можно загружать PDFs, websites, YouTube videos, audio files, Google Docs и Slides, а ответы строятся на источниках с inline citations. Для Workspace / Education Google отдельно указывает, что uploads, queries и model responses не используются для обучения моделей.

Для курса:

- разобрать клиентские материалы после 10 мая;
- собрать briefing doc по источникам;
- сделать Audio Overview / Video Overview как черновой учебный формат;
- дать участникам способ работать с источниками, а не с памятью чата;
- показать citations / source-grounded answers как часть доверия.

Рекомендация:

```text
NotebookLM обязательно включить в обучение как knowledge layer.
Проверить доступ через Google Workspace / аккаунты до занятия.
```

### Gemini

Gemini нужен как Google ecosystem layer: файлы, мультимодальность, Deep Research, связь с Gmail / Calendar / Maps / YouTube / Photos по доступности и политике Workspace. Это не замена ChatGPT/Codex, а второй большой контур, особенно если команда уже живет в Google Workspace.

Для курса:

- быстрый анализ материалов;
- Deep Research;
- работа с длинными файлами;
- Google Docs / Drive контекст;
- проверка альтернативных формулировок и мультимодальных задач.

Рекомендация:

```text
Gemini показать обязательно.
Закупку / доступ проверять через Google Workspace policies.
```

### Google Vids

Google Vids - video creation / internal communications layer внутри Workspace. Google описывает Gemini in Vids как способ получить initial storyboard, suggested scenes, stock media и scripts из prompt + Drive file; также Vids поддерживает совместную работу и sharing controls как Docs / Sheets / Slides.

Для курса:

- не как монтаж телестудии;
- а как быстрый черновик training / announcement / internal explainer;
- полезно owners, внутренним коммуникациям, обучающим материалам.

Рекомендация:

```text
Показать как Google Workspace video draft tool.
Не подменять им профессиональный монтаж.
```

### Google Stitch

Stitch - visual / UI prototype layer от Google Labs. Google описывает Stitch как AI-native software design canvas для high-fidelity UI из natural language; полезен для быстрых прототипов интерфейсов, порталов, визуальных оболочек.

Для курса:

- показать как способ быстро набросать интерфейс / портал / визуальную оболочку;
- связать с visual-builder и hub thinking;
- не обещать, что он заменяет дизайнера или production design.

Рекомендация:

```text
Stitch дать как demo / optional tool для visual thinking и interface prototypes.
```

## 5.2. Video acceleration layer: Submagic, OpusClip, Gling

Submagic, OpusClip, Gling - это не методология курса и не "главные нейронки". Это сервисы ускорения монтажа.

Где они полезны:

| Сервис | Для чего | Как показываем |
|---|---|---|
| Submagic | AI captions, Magic Clips, templates, short-form clips, API / MCP | captions + social packaging |
| OpusClip | long video -> short clips, AI clipping, reframing, captions, repurposing | быстрый поиск clip candidates |
| Gling | rough cut, bad takes, silence / filler words, text-based trimming, captions, export to Premiere / DaVinci / Final Cut | ускорение чернового монтажа |

Как объяснять участникам:

```text
Это не сервисы, которые решают за редактора.
Они помогают быстрее пройти технический участок:
- найти кандидатов;
- убрать паузы / дубли;
- сделать captions;
- получить rough cut;
- экспортировать в монтажный инструмент.

Редакторский gate остается прежним:
- контекст;
- точность;
- права;
- монтажная пригодность;
- не потерян ли смысл.
```

Рекомендация:

```text
На 19 мая показать 2-3 video acceleration tools сравнительно.
Не покупать всем.
Выбрать 1 основной после теста на реальном материале клиента.
```

## 6. CapCut / монтаж

CapCut официально пишет, что цена Pro зависит от региона, устройства и промо; актуальную цену нужно смотреть внутри web/desktop/mobile account.

Для курса:

- CapCut хорош для быстрых vertical clips и captions;
- но если редакция уже работает в Premiere/DaVinci, не нужно заставлять всех переходить;
- AI Start должен показать функцию, а не навязать конкретный монтажный инструмент.

Рекомендация:

```text
Видео-команда выбирает production route:
existing NLE -> preferred
CapCut -> quick vertical/captions fallback
Descript/аналоги -> если доступны и легальны
```

## 7. Минимальная закупка до уроков

Для одной редакции / группы до 30 человек:

```text
30 seats ChatGPT Business ideally
или 15 seats, если участники работают парами
NotebookLM / Gemini access через Google Workspace или аккаунты
2-3 seats Higgsfield
1-2 seats video acceleration pilot: Submagic / OpusClip / Gling
1-3 seats Claude Team/Enterprise optional
2-4 seats CapCut Pro only if video/SMM needs it
transcription route: existing service or approved fallback
```

Для двух редакций:

```text
start with pilot group
do not buy for everyone until after first shared blocks
owners decide expansion after 19/22 May
```

## 8. Что сказать закупке / руководителю

> Мы не покупаем набор модных AI-сервисов. Мы покупаем минимальный стек под пять рабочих контуров: текст, видео, визуал, аудио и редакторскую базу знаний. Главная покупка - командный LLM. Визуал/видео - пилотные seats. Автоматизацию и дополнительные сервисы расширяем только после того, как увидим реальные материалы и повторяемые сценарии.

## 9. Риски

- Доступность сервисов в конкретной корпоративной сети / регионе.
- Правила загрузки видео и внутренних материалов.
- Юридические ограничения на персональные данные и непубличную информацию.
- Стоимость credit-based video generation при активном использовании.
- Риск купить инструменты раньше, чем понятен workflow.

## 10. Решение

На завтра:

```text
Рекомендую купить / проверить ChatGPT Business + Codex как основной рабочий контур.
NotebookLM и Gemini - обязательно дать как Google knowledge / research layer.
Higgsfield - пилотно для visual/video generation.
Submagic / OpusClip / Gling - показать как video acceleration tools и выбрать один после теста.
Claude Code - точечно для owners как второй code-agent route.
CapCut / текущий монтаж - только видео-команде, если это реально их workflow.
Транскрипция - обязательный согласованный маршрут.
```
