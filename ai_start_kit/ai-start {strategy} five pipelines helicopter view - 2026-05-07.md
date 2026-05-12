---
tags:
  - project/ai-start
  - type/strategy
  - status/draft
date: 2026-05-07
status: draft
owner: Ira + Codex
refs:
  - "../ai_start_portal_v0/02_pipelines/01_event_video_to_text/workflow.md"
  - "../ai_start_portal_v0/08_presentations/ai-start {deck-system} lecture exercises embedded map - 2026-05-05.md"
---

# Helicopter view: пять пайплайнов AI Start

## 1. Зачем это нужно в первом уроке

Первый урок не должен просто назвать пять пайплайнов.

Он должен показать участникам карту всей системы:

```text
что входит
-> что делает AI
-> где проверяет человек
-> какой output появляется
-> что сохраняется в hub
```

Иначе участники услышат "пять пайплайнов", но не поймут, как это связано с их работой.

## 2. Карта пяти пайплайнов

| # | Пайплайн | Для чего | Главный output | Human gate |
|---|---|---|---|---|
| 01 | Text OS | Из материала в текстовые форматы | facts, context, ToV, style graph, site/Telegram/social | факты, тон, юридические/репутационные риски |
| 02 | Video OS | Из длинного видео в вертикальные клипы | clip candidates, top-3, hooks, subtitles, cover text | контекст, права, монтажная пригодность |
| 03 | Visual OS | Из материала в visual brief/cards | cover, title, cards, visual brief, asset prompt | факты, читаемость, бренд, ложный визуальный факт |
| 04 | Audio OS | Из текста в звучащий материал | intro, spoken script, podcast fragment | произносимость, факты, интонация |
| 05 | Editorial OS | Из сигналов в регулярную систему | digest, content grid, update proposal | источники, реалистичность, owner decision |

## 3. Text OS должен быть сильнее, чем "новость из заметки"

Text OS - это не только:

```text
событие -> новость -> Telegram
```

Настоящий контур:

```text
source
-> EXA / извлечение фактов и смыслов
-> context
-> tone of voice
-> style graph
-> repurpose map
-> formats
-> QA
-> skill / workflow update
```

Рабочие названия:

- `EXA`: extraction layer, где материал разбирается на факты, смыслы, цитаты, риски, недостающий контекст;
- `Tone of Voice`: правила голоса редакции / рубрики / ведущего;
- `Style Graph`: карта стиля, где фиксируются ритм, словарь, запреты, типовые конструкции, доказательства;
- `Repuboss / Repurpose Boss`: слой пересборки материала в разные форматы;
- `Skill Agent`: агент/контур, который помогает превращать удачные действия в reusable workflow/skill.

Названия можно докрутить, но архитектура нужна уже сейчас.

## 4. Как показать это в первом уроке

В Deck 01 нужен отдельный helicopter-view block:

1. Пять пайплайнов на одном экране.
2. Для каждого - input / AI step / human gate / output / hub artifact.
3. Отдельный zoom-in на Text OS, потому что это первый рабочий урок.
4. Показать, что каждый pipeline - не инструмент, а рабочий контур.

## 5. Как это связано со вторым уроком

Второй урок должен быть не "как сделать новость из заметки".

Он должен быть:

```text
Text OS: как редакция превращает материал в систему текстовых форматов
```

Содержание второго урока:

- EXA: извлечение фактов, смыслов, цитат, рисков;
- context: что AI должен знать перед письмом;
- ToV: как не потерять голос редакции;
- Style Graph: как формализовать стиль без мертвого брендбука;
- Repurpose: как один материал пересобирается в site / Telegram / social / captions / cards;
- QA: factual, tone, legal/reputation;
- A3: как из хорошего output сделать workflow/skill update.

## 6. Что показываем "внутри"

Нужно показать Codex / Code как backstage:

```text
markdown files
-> workflows
-> prompts
-> gates
-> examples
-> update log
```

Смысл:

> AI Start - это не набор красивых страниц. Внутри лежит структура, которую можно обновлять.

Показывать аккуратно: не как "сейчас все станут разработчиками", а как доказательство, что у курса есть рабочая архитектура.
