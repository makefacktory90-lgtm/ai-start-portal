# Implementation ladder

Статус: adoption mechanics v0.1  
Назначение: что именно внедряем после каждого урока, чтобы к финалу было что показать.

## Принцип

Партнер прав: если участники не начнут внедрять сразу, они не начнут вообще.

Но нельзя просить редакцию "внедрить AI". Это слишком большое, мутное и никому некуда поставить в календарь.

Нужно просить маленькое действие:

```text
один материал
-> один AI-шаг
-> один human gate
-> один сохраненный evidence
```

Ограничение:

```text
Base action после урока должен занимать 20-40 минут.
Если больше - это уже проект, а не внедрение.
```

## Evidence, который нужен к финалу

К Lesson 10 у нас должны быть:

- 5-10 материалов, прогнанных через пайплайны;
- 5 approved examples;
- 5 rejected / risky AI outputs;
- 3 prompt updates;
- 3 quality gate updates;
- owner map;
- 30-day plan;
- список "что автоматизировать позже".

## Lesson-by-lesson внедрение

### После Lesson 01. Start map

Что внедряем:

```text
AI task brief перед любым AI-запросом.
```

Минимальное действие:

- участник берет одну повторяющуюся задачу;
- описывает source, output, ограничения, human gate;
- сохраняет brief в hub / shared doc.

Время:

- 20 минут.

Owner:

- сам участник;
- hub owner собирает 5-7 примеров.

Evidence:

- `role_task_brief`;
- список пайплайнов, которые реально нужны ролям.

Критерий:

- в brief есть не "сделай красиво", а проверяемый output.

### После Lesson 02. Text OS

Что внедряем:

```text
Source Map перед первым текстовым draft.
```

Минимальное действие:

- взять один безопасный текст / заметку / транскрипт;
- сделать Source Map;
- получить один draft;
- прогнать factual + plastic gate;
- сохранить approved или rejected example.

Время:

- 30-40 минут.

Owner:

- редактор / автор материала;
- text owner собирает examples.

Evidence:

- Source Map;
- draft;
- gate notes;
- один prompt / gate update.

Критерий:

- каждый важный факт привязан к source;
- AI-пластик отмечен, а не молча исправлен.

### После Lesson 03. Video acceleration

Что внедряем:

```text
Transcript-first отбор клипов.
```

Минимальное действие:

- взять один длинный материал или транскрипт;
- получить 5-7 candidates;
- выбрать top-3;
- отметить риски контекста.

Время:

- 30-40 минут, если есть транскрипт;
- 60 минут, если транскрипт надо сначала сделать.

Owner:

- видеоредактор / монтажер;
- редактор проверяет смысл и риск.

Evidence:

- таблица candidates;
- top-3;
- video gate notes.

Критерий:

- клип-кандидат не вырывает смысл и не обещает больше, чем есть в материале.

### После Lesson 04. Visual conveyor

Что внедряем:

```text
Visual brief перед генерацией / дизайном.
```

Минимальное действие:

- взять один материал;
- собрать visual brief;
- отделить факты от образа;
- описать, что должно быть редактируемым слоем;
- собрать 3 prompt options.

Время:

- 30 минут без генерации;
- 45 минут с генерацией.

Owner:

- дизайнер / SMM / visual owner;
- редактор проверяет факты.

Evidence:

- visual brief;
- prompt project;
- rejected visual risks.

Критерий:

- AI не запек важные факты / текст в картинку;
- дизайнер понимает, что можно править.

### После Lesson 05. Audio OS

Что внедряем:

```text
Read-aloud gate для spoken scripts.
```

Минимальное действие:

- взять один письменный материал;
- сделать spoken script 60-90 секунд;
- прочитать вслух;
- отметить 3 места, которые не звучат.

Время:

- 25-35 минут.

Owner:

- автор / ведущий;
- audio owner собирает фразы, которые ломаются.

Evidence:

- spoken script;
- read-aloud notes;
- audio gate update.

Критерий:

- текст можно произнести без канцелярита и без новых фактов.

### После Lesson 06. Editorial contour

Что внедряем:

```text
Weekly AI-assisted digest.
```

Минимальное действие:

- собрать 10-20 сигналов;
- сгруппировать их;
- выбрать 3-5 идей в content grid;
- назначить owner.

Время:

- 35-40 минут.

Owner:

- выпускающий / редактор контура.

Evidence:

- weekly digest;
- content grid;
- source risk notes.

Критерий:

- у каждой идеи есть source, owner и next action.

### После Lesson 07. Hub build

Что внедряем:

```text
Approved / rejected examples в hub.
```

Минимальное действие:

- каждый owner приносит 1 approved и 1 rejected AI-output;
- команда подписывает, почему пример полезен;
- фиксирует одно правило.

Время:

- 30 минут.

Owner:

- hub owner;
- role owners.

Evidence:

- approved example;
- rejected example;
- changelog entry.

Критерий:

- пример можно использовать для обучения следующего человека.

### После Lesson 08. Agents

Что внедряем:

```text
Automation candidate list.
```

Минимальное действие:

- выбрать одну повторяющуюся задачу;
- описать manual / semi-auto / future agent version;
- отметить source, tools, memory, human gate.

Время:

- 30-40 минут.

Owner:

- process owner;
- security / policy contact, если есть ограничения.

Evidence:

- agent task brief;
- список рисков;
- next experiment.

Критерий:

- есть задача и human gate, нет фантазии "пусть AI сам публикует".

### После Lesson 09. Practice clinic

Что внедряем:

```text
Friction-to-update loop.
```

Минимальное действие:

- взять один реальный failure;
- определить, что сломалось: prompt, context, gate, tool, owner;
- сделать update proposal.

Время:

- 30 минут.

Owner:

- автор кейса;
- hub owner принимает / отклоняет update.

Evidence:

- case note;
- update proposal;
- решение keep / revise / kill / automate later.

Критерий:

- проблема превращена в изменение системы, а не в "ну AI пока тупит".

### После Lesson 10. Final kit

Что внедряем:

```text
30-day adoption loop.
```

Минимальное действие:

- назначить owners;
- выбрать 3 обязательных weekly actions;
- открыть dashboard;
- поставить дату первого review.

Время:

- 40 минут.

Owner:

- редакционный sponsor;
- hub owner;
- role owners.

Evidence:

- final kit checklist;
- 30-day dashboard;
- first review date.

Критерий:

- понятно, кто и что делает на следующей неделе.

## Q&A chat model

Чат нужен, но не как сливная яма "а подскажите промптик".

Нужны правила.

### Каналы

```text
#ai-start-questions     вопросы по урокам
#ai-start-outputs       участники кидают outputs на разбор
#ai-start-risks         безопасность, факты, публикационные риски
#ai-start-updates       accepted prompt / gate / workflow updates
```

Если каналов нельзя несколько, используем теги:

```text
[QUESTION]
[OUTPUT]
[RISK]
[UPDATE]
[TOOL]
```

### Правило ответа

На вопрос отвечаем не только текстом, а маршрутом:

```text
вопрос
-> какой pipeline
-> какой prompt / gate
-> что попробовать
-> что сохранить в hub
```

### SLA

```text
рабочий день: ответ в течение 24 часов
после вебинара: сбор вопросов в Q&A.md
еженедельно: 5 повторяющихся вопросов -> update в hub
```

### Что не делаем в чате

- не проверяем конфиденциальные материалы без разрешения;
- не превращаем чат в бесконечный консалтинг;
- не даем "универсальные промптики" без source и gate;
- не принимаем output как готовый к публикации.

## Как это сказать участникам

```text
После каждого занятия у вас будет не домашка, а маленькое внедрение.
Один материал, один AI-шаг, одна проверка, один след в hub.
Если это занимает больше 40 минут, мы режем задачу.
Наша цель - не чтобы вы героически делали курс по ночам.
Наша цель - чтобы к финалу у редакции уже были реальные examples, working prompts и понятные gates.
```

