# Prompt library: AI Start v0.1

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
Проверь текст на признаки нейросетевого стиля.

Отметь точные места:
1. "Это не X, это Y" / "дело не в X, дело в Y".
2. Рубленые короткие предложения подряд.
3. "И знаете что?", "а знаете что?", "и вот что я понял(а)".
4. Исповедь без конкретной пользы для читателя.
5. Общие усилители без факта.
6. Рекламный или пресс-релизный тон.
7. Риторические финалы, которые звучат глубоко, но ничего не добавляют.

Для каждого места дай:
- цитату;
- почему плохо;
- как переписать проще и живее;
- что читатель должен забрать из этого фрагмента.

Не переписывай весь текст, пока не покажешь диагностику.
```

### 1.4 Voice dump -> editorial source

```text
Я надиктовал(а) сырой поток мыслей.

Не пиши публикацию.
Сначала преврати это в рабочую редакционную заготовку.

Сделай:
1. Главная мысль.
2. Факты, которые прозвучали.
3. Предположения и оценки отдельно от фактов.
4. Что нужно проверить.
5. Какие форматы возможны: сайт, Telegram, social, карточки, видео, аудио.
6. Что спросить у редактора перед текстом.

Если мысль обрывается или не хватает данных, не додумывай. Пометь: "нужно уточнить".
```

### 1.5 Prompt -> skill candidate

```text
Разбери этот удачный prompt chain как кандидат в skill.

Сделай:
1. Название skill.
2. Когда использовать.
3. Какие входы нужны.
4. Пошаговый workflow.
5. Output format.
6. Human gate.
7. Какие примеры сохранить.
8. Какие ошибки запретить.
9. Что положить в references.
10. Черновик SKILL.md.
```

### 1.6 No-agent Style Card

```text
Роль: ты сильный редактор-стилист и методолог текста.

Я дам тебе 3-5 моих текстов или текстов редакции.
Твоя задача: собрать практическую Style Card, чтобы новые AI-черновики можно было править ближе к этому стилю.

Важно:
- не делай красивый психологический портрет автора;
- не придумывай правила, которых нет в примерах;
- каждый вывод подтверждай evidence: короткой цитатой или точным фрагментом;
- отдельно выпиши anti-style: что точно будет звучать чужеродно;
- не обещай "идеально скопировать" стиль;
- если примеров мало, помечай вывод как гипотезу.

Собери:
1. Voice position.
2. Tone range.
3. Lexicon.
4. Syntax and rhythm.
5. Structure.
6. Evidence habits.
7. Reader relationship.
8. Formatting.
9. Punctuation / typography.
10. Anti-style.
11. Rewrite checklist.
12. Confidence: stable rule / hypothesis.

Формат ответа:
## Style Card
| аспект | правило | evidence | confidence |
## Evidence
## Anti-style
## Rewrite checklist
## Что нужно уточнить у автора
```

### 1.7 No-agent rewrite / format package

```text
Роль: ты редактор, который собирает текстовые форматы из source.

У меня есть source и Style Card.
Задача: подготовить текстовые форматы, сохранив факты, стиль и редакционную осторожность.

Работай в 4 шага:
1. Source lock: что можно использовать, что нельзя утверждать, что проверить.
2. Anti-AI gate: нейросетевые конструкции, рубленая драматизация, общие усилители без факта.
3. Draft formats: основной текст, Telegram, social, 5 заголовков.
4. Editor gate: таблица рисков.

Не добавляй факты вне source. Если факта нет, пиши "нет в source".
Сначала покажи Source lock и Anti-AI gate, потом draft formats.
```

## 2. Pipeline prompts

### Pipeline 01. Text OS / материал -> текстовые форматы

Главный файл:

```text
02_pipelines/01_event_video_to_text/workflow.md
```

Prompts:

- EXA: facts / people / dates / quotes / meanings / gaps / risks;
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
- voice dump -> editorial source.
- prompt -> skill candidate.
- no-agent Style Card.
- no-agent rewrite / format package.

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
- visual style extraction;
- image style DNA analysis;
- AI asset prompt;
- visual QA.

Отдельный prompt:

```text
04_prompt_library/visual_style_extraction_prompt.md
04_prompt_library/prompt_image_style_dna_analysis.md
```

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

### Pipeline 06. Видео -> редакционная карта сюжетов в Codex / Claude

Главный файл:

```text
02_pipelines/06_video_to_editorial_story_map/workflow.md
```

Prompts:

- empty Codex / Claude setup;
- video source profile;
- transcript extraction;
- key frame extraction;
- what happens on screen;
- what happens behind the story;
- semantic story map;
- 3 editorial angles;
- best story selection;
- production brief;
- fact-check list;
- video texture analysis prompt;
- human gate.

Отдельный prompt:

```text
04_prompt_library/prompt_video_texture_analysis.md
```

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
