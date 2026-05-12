# 01 Researcher

## Назначение

Научиться искать не просто ссылки, а проверяемый материал для редакционной работы: source map, unknowns, риски и human gate.

## Когда использовать

- перед текстом, сюжетом, Telegram-постом или коротким видео;
- когда источник неполный и нужно понять, что можно утверждать;
- когда тема требует проверки по нескольким углам.

## Что нужно до старта

- безопасный source без персональных данных и внутренних документов;
- ChatGPT / Claude или другой LLM;
- Perplexity как быстрый вход без кода;
- Exa / Tavily как search API для продвинутого маршрута;
- рабочая папка `ai-start-playground`.

## Основной prompt

```text
Ты research-команда для редакции ТВ / digital.

Задача: помочь подготовить материал по source ниже.
Не пиши публикацию. Не делай финальный текст.
Сначала сделай проверяемую исследовательскую карту.

Роли:
1. SCOUT FACTS: ищет факты, даты, действующих лиц, место, первоисточники.
2. SCOUT LOCAL: ищет локальный / городской / отраслевой контекст.
3. SCOUT SKEPTIC: ищет, что может быть преувеличено, спорно или не доказано.
4. SCOUT FRESH: проверяет, что могло измениться недавно.
5. CRITIC: отсекает слабые, рекламные, непроверяемые источники.
6. ACTION MAPPER: переводит находки в редакционные действия.

Сделай:
1. Search plan: 8-10 запросов, сгруппированных по ролям.
2. Для каждого запроса: что ищем, какой источник будет сильным, какой будет слабым.
3. Source map:
   - source;
   - link;
   - что подтверждает;
   - что не подтверждает;
   - риск;
   - можно ли использовать;
   - что проверить руками.
4. Unknowns tracker: чего не хватает для уверенной публикации.
5. Anti-plastic check: какие формулировки будут звучать как AI-клише.
6. Action map: сайт, Telegram, social, что пока нельзя выпускать.
7. Human gate: список проверок перед публикацией.

Правила:
- не додумывай факты;
- не подменяй источник красивой формулировкой;
- отделяй "можно сказать" от "хочется сказать";
- если данных нет, пиши: "нет в источнике".

Source:
[вставьте материал]
```

## Output format

```text
## Search plan
## Source map
| source | link | подтверждает | не подтверждает | риск | проверить руками |
## Unknowns tracker
## Anti-plastic check
## Action map
## Human gate
```

## Human gate

- источник действительно подтверждает утверждение;
- нет персональных или внутренних данных;
- спорные места помечены как спорные;
- неизвестные не превращены в уверенный вывод;
- перед публикацией есть ответственный редактор.

## Как Показываем На Уроке

Логика для участников:

1. База: оригинальный research skill Тони показывает общий метод глубокого поиска.
2. Адаптация: `Skill Research для телестудии` показывает, как мы меняем research под редакцию, эфир, визуальность, продюсера и human gates.
3. Минимальный первый шаг: Source Map prompt, если нужен не полный production package, а быстрая карта источника.

## Домашка Base / Opti / Advanced

- Base: создать папку `ai-start-playground`, сохранить этот prompt в `prompts`.
- Opti: прогнать безопасный source и сохранить Source Map в `outputs`.
- Advanced: сравнить оригинальный deep-research-skill и TV-адаптацию, затем предложить адаптацию под свою роль.

## Ссылки и инструменты

- Exa: https://exa.ai/
- Tavily: https://tavily.com/
- Perplexity: https://www.perplexity.ai/
- Оригинальная база: Tonya deep-research-skill: https://github.com/tonyazhuuki/deep-research-skill
- TV-форк: Skill Research для телестудии: https://github.com/makefacktory90-lgtm/ai-start-skills/tree/main/skills/skill-research-tv-studio
- Source Map prompt: 07_source_map_prompt.md
- TLDR Buddy: https://github.com/tonyazhuuki/tldr_buddy
- Codex playground: ../00_start_here/16_codex_playground_homework.md
- Safe source practice: ../09_practice_materials/deck01_safe_source_practice.md
