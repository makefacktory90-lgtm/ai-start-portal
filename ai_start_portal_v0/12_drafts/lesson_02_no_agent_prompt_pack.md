# Lesson 02 / No-Agent Prompt Pack

Status: hidden draft for lesson 02. Do not publish before 15 May.

## Why This Exists

У части участников может не быть рабочего места для настройки агентов и skills. Поэтому базовый маршрут второго урока должен работать в обычном ChatGPT / Claude / Gemini чате.

Этот маршрут не требует терминала, установки skill в папку или агентной среды. Он нужен, чтобы участники могли сразу применить материал к текстовым задачам.

## The No-Agent Pipeline

```text
voice / rough note / source
-> Prompt 01: structure the raw material
-> Prompt 02: build my style card
-> Prompt 03: rewrite + formats + anti-AI gate
-> human check
```

This is the base layer, not the ceiling. The course position is:

```text
Base: prompts in a normal chat
Normal: agent workflow
Advanced: growing Style Graph Protocol + skill
```

We give the base layer because some participants will not have enough computers for agents. We still push the normal level: set up the workflow properly as soon as possible. Текстовая боль снимается промптами, но редакционная память появляется в workflow.

Minimum result:

- один структурированный source;
- одна личная style card;
- один текст или пакет форматов;
- один список запретов, чтобы текст не звучал как нейросеть.

## Prompt Quality Scorecard

Порог для урока: не ниже 8/10. Если prompt не проходит проверку, он не включается в учебные материалы. Участники должны получать стабильные рабочие инструкции, а не демонстрационные заготовки.

Критерии:

1. `Task clarity`: понятно, что делать и чего не делать.
2. `Input discipline`: prompt требует source / examples / context.
3. `Output control`: задан формат ответа.
4. `Evidence`: выводы должны опираться на цитаты, source или примеры.
5. `Anti-hallucination`: запрещены новые факты и догадки.
6. `Human gate`: есть блок проверки человеком.
7. `Usability`: работает в обычном чате без агента.
8. `Repeatability`: результат можно повторить на другом материале.

Current scores after revision:

| Prompt | Score | Why |
|---|---:|---|
| 01 Voice / Rough Note -> Editorial Source | 8.4 | clear task, source discipline, good human gate |
| 02 Style Card From Examples | 8.6 | evidence-based, separates style / anti-style / rewrite rules |
| 03 Rewrite / Formats With Anti-AI Gate | 8.5 | staged output, channel logic, fact lock, QA |
| 04 Quick Anti-Neural Style Check | 8.2 | good diagnostic shortcut, less complete than full pipeline |

## Prompt 01. Voice / Rough Note -> Editorial Source

Use when a person has dictated messy thoughts, pasted a transcript, or brought a rough note.

```text
Роль: вы редакционный ассистент.

Я даю вам сырой материал: диктовку, заметки, расшифровку или источник.
Твоя задача - превратить его в рабочую редакционную заготовку.

Не пиши финальный текст.
Не добавляй факты.
Если информации нет, пиши: "нет в source".

Сделай:
1. Main point: главная мысль в 1-2 предложениях.
2. Facts: только то, что прямо есть в source.
3. Claims to verify: даты, имена, должности, числа, причинно-следственные связи.
4. Opinions / assumptions: оценки, эмоции, догадки отдельно от фактов.
5. Missing context: чего не хватает для публикации.
6. Do-not-amplify: что нельзя усиливать, обобщать или драматизировать.
7. Format fit: сайт, Telegram, social, карточки, аудио - что подходит и почему.
8. Editor questions: 3-5 вопросов автору или редактору.
9. Safe next step: какой один следующий шаг сделать до текста.

Формат ответа:
## Main point
## Facts from source
## Claims to verify
## Opinions / assumptions
## Missing context
## Do-not-amplify
## Format fit
## Editor questions
## Safe next step

Материал:
[вставьте диктовку / заметки / источник]
```

## Prompt 02. My Style Card From Examples

This is a simplified no-agent version of Style Graph. It borrows from Ira's "анализ авторского стиля" prompt, but removes the dangerous promise "в точности воспроизвести". We need a working style card, not literary taxidermy.

```text
Роль: вы сильный редактор-стилист и методолог текста.

Я дам вам 3-5 моих текстов или текстов редакции.
Твоя задача: собрать практическую Style Card, чтобы новые AI-черновики можно было править ближе к этому стилю.

Важно:
- не делай красивый психологический портрет автора;
- не придумывай правила, которых нет в примерах;
- каждый вывод подтверждай evidence: короткой цитатой или точным фрагментом;
- отдельно выпиши anti-style: что точно будет звучать чужеродно;
- не обещай "идеально скопировать" стиль;
- если примеров мало, помечай вывод как гипотезу.

Собери:
1. Voice position: как автор звучит и какую роль занимает.
2. Tone range: где можно быть серьезным, разговорным, ироничным, жестким.
3. Lexicon: характерные слова, обороты, допустимые термины, запрещенные слова.
4. Syntax and rhythm: длина фраз, паузы, темп, повторы, где текст "дышит".
5. Structure: как начинается текст, как развивается мысль, как заканчивается.
6. Evidence habits: как автор доказывает мысль - факт, пример, сцена, число, цитата.
7. Reader relationship: как автор обращается к читателю и работает с возражениями.
8. Formatting: абзацы, списки, заголовки, выделения.
9. Punctuation / typography: тире, скобки, кавычки, обращения, типичные знаки.
10. Anti-style: 10 признаков текста, который "не наш".
11. Rewrite checklist: 7 вопросов для проверки нового текста.
12. Confidence: какие правила устойчивые, а какие пока гипотезы.

Формат ответа:
## Style Card
| аспект | правило | evidence | confidence |

## Evidence
5-10 самых важных наблюдений с короткими цитатами.

## Anti-style
10 запретов с объяснением, почему они ломают голос.

## Rewrite checklist
7 вопросов для проверки нового текста.

## Что нужно уточнить у автора

Примеры:

## Пример 1
[текст]

## Пример 2
[текст]

## Пример 3
[текст]
```

## Prompt 03. Rewrite / Formats With Anti-AI Gate

Use after Prompt 01 and Prompt 02. This is the workhorse prompt for participants who only have a normal chat.

```text
Роль: вы редактор, который собирает текстовые форматы из source.

У меня есть source и Style Card.
Задача: подготовить текстовые форматы, сохранив факты, стиль и редакционную осторожность.

Работай в 4 шага.

Шаг 1. Source lock
- выпиши 5-10 фактов, которые можно использовать;
- выпиши, что нельзя утверждать;
- выпиши, что нужно проверить человеком.

Шаг 2. Anti-AI gate
Проверь и запрети:
- "это не X, это Y" / "дело не в X, дело в Y";
- рубленую драматизацию;
- "и знаете что?", "а знаете что?", "и вот что я понял(а)";
- исповедь без пользы для читателя;
- общие слова без факта: важный, значимый, новый уровень, большой потенциал;
- рекламный или пресс-релизный тон;
- уверенные утверждения без source.

Шаг 3. Draft formats
Собери:
1. Основной текст: заголовок, лид, 3-5 абзацев.
2. Telegram: первый экран, главный факт, причина продолжить чтение.
3. Social: одна мысль без кликбейта.
4. 5 заголовков с разным фокусом.

Шаг 4. Editor gate
Сделай таблицу:
| утверждение | есть в source? | риск | что проверить | действие |

Правила:
- не добавляй факты, которых нет в source;
- если факта нет, пиши "нет в source";
- не делай текст длиннее без причины;
- сохраняй живой, но не фальшиво драматичный ритм;
- если Style Card конфликтует с фактом или безопасностью, выбирай факт и безопасность.
- сначала покажи Source lock и Anti-AI gate, потом draft formats.

Source:
[вставьте результат Prompt 01 или исходник]

Style Card:
[вставьте результат Prompt 02]
```

## Optional Prompt 04. Quick Anti-Neural Style Check

Use when there is already an AI draft and no time for the full pipeline.

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

Текст:
[вставьте текст]
```

## How To Teach This

Base level:

- Prompt 01 + Prompt 04.
- Участник учится не получать красивую ложь.

Opti level:

- Prompt 01 + Prompt 02 + Prompt 03.
- Участник получает личный рабочий контур.

Advanced level:

- сохраняет Style Card, anti-style и удачный output в папку;
- позже превращает повторяемый маршрут в skill.

## One-Line Explanation For The Lecture

Skill - это не обязательный входной билет. Skill - это упаковка того, что уже повторилось и доказало пользу. Сначала делаем рабочий prompt pipeline. Потом, когда есть evidence, упаковываем.
