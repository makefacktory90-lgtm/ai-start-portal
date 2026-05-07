# Prompt library: AI Start Nornikel v0.1

Статус: starter index  
Назначение: единая библиотека промптов для 5 пайплайнов, decks, практики и AI-hub.

## Правило библиотеки

Промпт не живет сам по себе.

Каждый промпт должен быть привязан к:

- пайплайну;
- expected output;
- quality gate;
- примеру;
- owner;
- changelog.

Иначе это не библиотека, а куча "полезных промптов", из которой через неделю никто ничего не найдет. Да, грустно. Да, обычно так и происходит.

## 1. Universal prompts

### 1.1 Проверка по AI Use Policy

```text
Проверь материал по AI Use Policy.
Не переписывай текст сразу.
Сначала сделай таблицу:
- фрагмент;
- тип риска;
- почему риск;
- что нужно проверить;
- можно ли использовать в AI / публиковать после проверки.

Потом предложи безопасную версию.
```

### 1.2 Factual check

```text
Проверь output на фактические риски.
Сравни каждый важный факт с исходным материалом.
Сделай таблицу:
- утверждение;
- есть ли в исходнике;
- что нужно проверить;
- риск;
- действие: оставить / уточнить / удалить / вынести в "нужно проверить".

Не переписывай текст, пока не покажешь риски.
```

### 1.3 De-AI-fy check

```text
Проверь текст на AI-гладкость.
Ищи:
- общие фразы без смысла;
- канцелярит;
- рекламный тон;
- одинаковый ритм предложений;
- пустые выводы;
- слова, которых нормальный редактор не сказал бы.

Сначала дай список проблем с примерами.
Потом предложи более человеческую версию, не добавляя новых фактов.
```

## 2. Pipeline prompts

### Pipeline 01. Text OS / материал -> текстовые форматы

Главный файл:

```text
02_pipelines/01_event_video_to_text/workflow.md
```

Prompts:

- EXO: facts / people / dates / quotes / meanings / gaps / risks;
- context briefing;
- Tone of Voice draft;
- Style Graph draft;
- Repurpose Boss map;
- context gaps;
- website article draft;
- Telegram version;
- social short;
- headline set;
- editor risk list.
- skill / workflow update proposal.

### Pipeline 02. Длинное видео -> вертикальные клипы

Главный файл:

```text
02_pipelines/02_long_video_to_vertical_clips/workflow.md
```

Prompts:

- video map;
- clip candidates;
- top-3 selection;
- hook generation;
- subtitle chunks;
- cover/title text;
- publication package;
- video QA.

### Pipeline 03. Материал -> визуал и карточки

Главный файл:

```text
02_pipelines/03_material_to_visual_cards/workflow.md
```

Prompts:

- visual angle;
- card structure;
- quote card copy;
- carousel outline;
- visual brief;
- AI asset prompt;
- visual QA.

### Pipeline 04. Материал -> аудио

Главный файл:

```text
02_pipelines/04_material_to_audio/workflow.md
```

Prompts:

- spoken script;
- intro hook;
- podcast fragment;
- natural speech pass;
- audio QA.

### Pipeline 05. Редакторский контур

Главный файл:

```text
02_pipelines/05_editorial_contour/workflow.md
```

Prompts:

- monitoring to digest;
- content grid;
- Telegram regularity;
- archive repurposing;
- tone-of-voice calibration;
- weekly analytics reflection;
- AI-hub update proposal.

## 3. Update prompt

```text
Сделай запись для weekly update log.

Укажи:
1. дата;
2. редакция;
3. workflow / pipeline;
4. какой материал использовали;
5. что AI выдал;
6. что было неправильно;
7. evidence;
8. какое поведение нужно в следующий раз;
9. update target: context / workflow / quality gate / prompt / examples / personal note;
10. severity: low / medium / high;
11. предложенный owner;
12. статус: proposed.
```

## 4. Calibration prompt

Использовать, когда придут материалы ТВ-21 и "Северного города".

```text
Проанализируй калибровочные материалы редакции.
Не делай финальные правила сразу.

Сначала собери evidence:
- recurring formats;
- typical length;
- tone markers;
- headings;
- Telegram structure;
- visual patterns;
- what sounds good;
- what sounds weak or risky;
- facts / source patterns;
- recurring entities and rubrics.

Потом предложи draft для редакционного context file:
- tone of voice;
- allowed patterns;
- avoid patterns;
- source rules;
- examples to save;
- open questions for editor.

Отдельно пометь, что требует подтверждения редакции.
```
