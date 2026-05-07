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
  - "https://support.anthropic.com/en/articles/9266767-what-is-the-team-plan"
  - "https://claude.com/pricing/enterprise"
  - "https://higgsfield.ai/"
  - "https://higgsfield.ai/cli"
  - "https://www.capcut.com/help/how-much-does-capcut-pro-cost"
---

# Рекомендуемый AI-стек для телекомпаний

Дата проверки: 2026-05-07.

## 1. Короткий ответ для партнеров

Если вас завтра спрашивают "что покупать?", отвечаем так:

> Для старта не нужно покупать 15 нейросетей. Нужен один сильный командный LLM, 2-3 визуально-видео seats для экспериментов и понятный монтажный/транскрипционный контур. Базовая рекомендация: ChatGPT Business для основной группы, Higgsfield пилотно для visual/video команды, CapCut или текущий NLE для монтажа, Claude - опционально для owners и длинных текстовых/методологических задач.

## 2. Базовый стек v1

### Must have

| Инструмент | Кому | Зачем | Рекомендация |
|---|---|---|---|
| ChatGPT Business | участники курса, редакторы, SMM, owners | текст, анализ, файлы, проекты, custom GPTs, shared workspace | основной командный LLM |
| Монтажный инструмент редакции | видео-команда | vertical edit, captions, export | оставить привычный Premiere / DaVinci / CapCut, не ломать production |
| Транскрипция | видео, редакторы | transcript + timestamps | использовать текущий сервис или быстрый fallback |
| GitHub Pages / markdown hub | owners, Codex/helper | база знаний, workflows, prompts, gates | v1 уже работает |

### Pilot seats

| Инструмент | Кому | Зачем | Рекомендация |
|---|---|---|---|
| Higgsfield | 2-3 visual/video участника | visual/video assets, AI image/video, Marketing Studio, MCP/agent workflow | купить пилот, не всем сразу |
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
```

Если корпоративная безопасность не пропускает ChatGPT, нужен согласованный enterprise/procurement route или локальный/разрешенный LLM как fallback.

## 4. Claude: не всем, а owners

Claude Team - платный командный план для Claude chat. Claude Enterprise предназначен для организаций с расширенной безопасностью, compliance, user management и масштабированием.

Для курса Claude полезен:

- методологу;
- AI-hub owners;
- людям, которые работают с длинными документами и структурой;
- для альтернативной проверки tone/style/workflow.

Рекомендация:

```text
1-3 seats Claude Team/Enterprise по доступности и procurement.
Не покупать всем участникам на старте.
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

Для одной редакции:

```text
10-20 seats ChatGPT Business
2-3 seats Higgsfield
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
Рекомендую купить ChatGPT Business как основной рабочий инструмент.
Higgsfield - пилотно для visual/video.
Claude - точечно для owners.
CapCut/монтаж - только для видео-команды, если это реально их workflow.
```
