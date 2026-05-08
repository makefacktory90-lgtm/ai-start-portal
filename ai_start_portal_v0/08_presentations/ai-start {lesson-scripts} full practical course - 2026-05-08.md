# Lesson scripts: full practical course

Статус: рабочая методология v0.1.  
Принцип: каждый урок меняет конкретный кусок рабочего таймлайна редакции.

## Общая рамка

Уровни выхода:

- Base - забирают все.
- Opti - ускорение своего рабочего места.
- Advanced - владельцы собирают систему.
- Scout - куда смотреть дальше.

После каждого вебинара:

- запись -> `10_recordings/lesson-XX/recording_link.md`;
- транскрипт -> `10_recordings/lesson-XX/transcript.md`;
- summary -> `10_recordings/lesson-XX/summary.md`;
- Q&A -> `10_recordings/lesson-XX/questions_and_answers.md`;
- homework -> `10_recordings/lesson-XX/homework.md`.

## Lesson 01. Start map / AI как рабочий слой редакции

Дека: `ai_start_course_site/decks/deck-01-start.html`

### С чем уходим

Base: участник умеет поставить одну рабочую задачу для AI через source, цель, формат, ограничения и human gate.

Opti: участник понимает, какой пайплайн ускорит его роль.

Advanced: участник видит, как удачный / неудачный output становится правилом в hub.

Scout: участник понимает, что агенты строятся вокруг задачи, инструментов, доступа, памяти и проверки.

### Тайминг 90 минут

- 10 мин - зачем курс и что обещаем клиенту.
- 15 мин - пять пайплайнов на карте редакции.
- 15 мин - возражения: клише, безопасность, вред изданию.
- 20 мин - практика: поставить задачу как brief.
- 15 мин - demo: source -> AI draft -> human gate -> hub.
- 10 мин - Base / Opti / Advanced / Scout.
- 5 мин - что сделать до Lesson 02.

### Практика

Участник выбирает одну свою задачу и заполняет:

```text
Моя задача:
Source:
Канал / формат:
Что должен сделать AI:
Что AI не имеет права делать:
Human gate:
Что сохранить в hub:
```

### До старта

- программа курса;
- уровни выхода;
- client calibration memo;
- AI policy draft;
- ссылка на запись после занятия.

## Lesson 02. Text OS / Source Map -> publication package

Дека: `ai_start_course_site/decks/deck-02-text.html`

### С чем уходим

Base: Source Map + один безопасный draft + human check.

Opti: сайт / Telegram / social / headline set без потери фактов.

Advanced: одно правило для Style Graph, prompt или QA gate.

Scout: где использовать ChatGPT / Claude / Gemini / Perplexity / Exa, и где они не заменяют редактора.

### Тайминг 120 минут

- 10 мин - рамка: не "написать красиво", а собрать редакционный пакет.
- 15 мин - Source Map и фактологический gate.
- 15 мин - Style Graph и анти-пластик.
- 20 мин - практика 1: Source Map на материале клиента.
- 20 мин - практика 2: Deplasticizer.
- 20 мин - практика 3: publication package.
- 10 мин - risks: SEO, шаблонность, доверие.
- 10 мин - что сохраняем в hub.

### Сильный prompt: Source Map

```text
Разбери материал как редакционный источник.

Не пиши финальный текст.

Сначала задай до 5 уточняющих вопросов, если без них нельзя выбрать формат.
Если вопросов нет, сразу собери Source Map.

Таблица Source Map:
1. Факт / утверждение из источника.
2. Где это видно в источнике: цитата, таймкод, абзац, документ.
3. Кто действует: человек, организация, роль.
4. Что можно сказать уверенно.
5. Что нельзя усиливать, обобщать или додумывать.
6. Какой формат подходит: сайт, Telegram, соцсети, карточки, видео.
7. Вопрос редактору перед публикацией.

Если чего-то нет в источнике, пиши: "нет в источнике".
```

### Материалы клиента

- новости: "Без интернета", "Мормлеки";
- интернет-редакция: информационные материалы;
- Telegram examples;
- "О мой блог" как отдельный разговорный стиль.

## Lesson 03. Video acceleration / long video -> clip candidates

Дека: `ai_start_course_site/decks/deck-03-video.html`

### С чем уходим

Base: 5-7 кандидатов на вертикальные клипы и top-3.

Opti: production pack для top-3: hook, subtitle chunks, cover text, description, risk note.

Advanced: связка transcript -> assistant -> монтажная система -> video gate.

Scout: Opus Clip, Gling, Descript, FireCut, AutoPod, ButterCut, Premiere MCP.

### Тайминг 120 минут

- 10 мин - позиция: AI не заменяет монтажера, а забирает первый проход.
- 15 мин - карта длинного видео / транскрипта.
- 15 мин - tool radar: что уже умеют сервисы.
- 25 мин - практика: 7 candidates -> top-3.
- 20 мин - demo: Gling / Opus / Descript или аналог.
- 20 мин - human gate монтажера.
- 10 мин - что сохранить в hub.
- 5 мин - homework.

### Prompt: clip candidates

```text
Ты ассистент видеоредактора.

Материал: [транскрипт / таймкоды / описание видео].
Цель публикации: [информировать / объяснить / вызвать обсуждение / анонсировать].
Аудитория: [кто смотрит].
Запреты: не вырывать из контекста, не усиливать конфликт, не обещать больше, чем есть в видео.

Сделай:
1. Карту видео по смысловым блокам с таймкодами.
2. 7 кандидатов на вертикальный клип.
3. Для каждого: hook, начало, конец, риск потери контекста.
4. Отдельно: что монтажер должен проверить руками.
5. Топ-3 для производства и почему.
```

### Источники / сервисы

- Opus Clip: `https://help.opus.pro/docs/article/clipanything-qa-3`
- Gling: `https://www.gling.ai/desktop`
- Descript: `https://help.descript.com/hc/en-us/articles/27252457732237-Meet-Underlord-your-AI-sidekick`
- AutoPod: `https://www.autopod.fm/`
- ButterCut: `https://buttercut.io/`
- Premiere MCP listing: `https://conare.ai/marketplace/mcp/adobe-premiere-pro`

## Lesson 04. Visual conveyor / reference -> prompt project -> asset

Дека: `ai_start_course_site/decks/deck-04-visual.html`

### С чем уходим

Base: visual brief с фактами, форматом, ограничениями и visual gate.

Opti: prompt project для серии визуалов.

Advanced: reference -> Higgsfield / Kling / Runway -> animation -> Figma / Canva template.

Scout: какие AI-визуальные сервисы тестировать, и где нельзя запекать текст в картинку.

### Тайминг 120 минут

- 10 мин - визуал не равен "картинка".
- 15 мин - facts in editable layer.
- 15 мин - как снимать стиль с референсов.
- 25 мин - практика: prompt project.
- 20 мин - demo: генерация ассета + анимация.
- 20 мин - visual gate.
- 10 мин - hub recipe.
- 5 мин - homework.

### Prompt: style prompt project

```text
Проанализируй визуальный стиль по референсам.

Не генерируй картинки.

Собери style prompt system:
1. Материал / фактура / линия.
2. Цвета и запреты по цвету.
3. Композиция: крупность, перспектива, пустое место.
4. Тип персонажей / объектов.
5. Что нельзя делать, чтобы стиль не стал стоком.
6. Шаблон промпта для 5 форматов: hero, card, cover, b-roll still, motion seed.

Вывод: prompt rules + 5 готовых промптов.
```

## Lesson 05. Audio OS / written material -> spoken script

Дека: `ai_start_course_site/decks/deck-05-audio.html`

### С чем уходим

Base: spoken script 60-90 секунд.

Opti: версии под эфир, Telegram audio, podcast fragment, voiceover.

Advanced: audio gate и ethics for voice tools.

Scout: Descript, Adobe Enhance, ElevenLabs, Whisper, монтажные ассистенты.

### Тайминг 120 минут

- 10 мин - письменный текст не звучит сам.
- 15 мин - spoken syntax: короткие фразы, переходы, дыхание.
- 15 мин - tool radar audio.
- 25 мин - практика: spoken script.
- 15 мин - read aloud gate.
- 20 мин - demo: transcript / cleanup / voice test.
- 10 мин - ethics and approval.
- 10 мин - hub example.

## Lesson 06. Editorial contour / monitoring -> digest -> content grid

Дека: `ai_start_course_site/decks/deck-06-editorial-contour.html`

### С чем уходим

Base: weekly digest из сигналов.

Opti: content grid по каналам и владельцам.

Advanced: keep / revise / kill / automate later.

Scout: что можно автоматизировать после ручной валидации.

### Тайминг 120 минут

- 10 мин - AI держит контур, но не определяет важность.
- 15 мин - источники, рубрики, риски.
- 20 мин - practice: digest.
- 20 мин - practice: content grid.
- 20 мин - update proposal.
- 20 мин - редакционный gate.
- 15 мин - 30-day loop.

## Lesson 07. Hub build / память редакции

Дека: `ai_start_course_site/decks/deck-07-hub-tv21.html`

### С чем уходим

Base: структура hub.

Opti: owners and rules.

Advanced: Style Graph / prompt updates through evidence.

Scout: что потом можно подключать через agents / MCP.

### Тайминг 90 минут

- 10 мин - hub не папка, а память редакции.
- 15 мин - структура: workflows, prompts, gates, examples.
- 15 мин - ToV без "как не надо".
- 25 мин - практика: approved / rejected AI output.
- 15 мин - owners and changelog.
- 10 мин - next update.

## Lesson 08. Agents / task systems

Дека: `ai_start_course_site/decks/deck-08-agents.html`

### С чем уходим

Base: agent task brief.

Opti: tool chain под роль.

Advanced: MCP / API scenario для будущей полуавтоматизации.

Scout: agentic editing, monitoring agents, visual prompt agents.

### Тайминг 90 минут

- 10 мин - агент не магический сотрудник.
- 15 мин - job -> tools -> memory -> gate.
- 20 мин - примеры: text agent, video agent, visual agent, hub agent.
- 25 мин - практика: описать один agent-like сценарий.
- 10 мин - что нельзя автоматизировать.
- 10 мин - next bets.

## Lesson 09. Practice clinic / реальные кейсы

Дека: `ai_start_course_site/decks/deck-09-practice-clinic.html`

### С чем уходим

Base: один реальный кейс через pipeline.

Opti: сравнение быстрее руками / быстрее через AI.

Advanced: update proposal по реальному фейлу.

Scout: ambassadors and friction cases.

### Тайминг 90 минут

- 10 мин - правила clinic.
- 15 мин - выбор кейсов.
- 35 мин - практика в группах.
- 15 мин - разбор фейлов.
- 10 мин - update proposals.
- 5 мин - owners.

## Lesson 10. Final kit / 30-day adoption loop

Дека: `ai_start_course_site/decks/deck-10-final-kit.html`

### С чем уходим

Base: готовый AI Start Kit.

Opti: weekly use plan.

Advanced: owners, review board, next bets.

Scout: какие инструменты и автоматизации тестировать дальше.

### Тайминг 60 минут

- 10 мин - что собрано.
- 15 мин - workflows / examples / gates / owners.
- 15 мин - 30-day adoption loop.
- 10 мин - next bets.
- 10 мин - финальные решения и owners.

## Общий список репозиториев / технических направлений для Advanced

Показывать как направления для продвинутого слоя, не как обязательный стек:

- Model Context Protocol: `https://github.com/modelcontextprotocol`
- MCP servers collection: `https://github.com/modelcontextprotocol/servers`
- Awesome MCP servers: `https://github.com/punkpeye/awesome-mcp-servers`
- Whisper: `https://github.com/openai/whisper`
- yt-dlp: `https://github.com/yt-dlp/yt-dlp`
- FFmpeg: `https://github.com/FFmpeg/FFmpeg`
- WhisperX: `https://github.com/m-bain/whisperX`
- ComfyUI: `https://github.com/comfyanonymous/ComfyUI`
- Open WebUI: `https://github.com/open-webui/open-webui`

Правило:

```text
показываем репозитории только после business case
не наоборот
```
