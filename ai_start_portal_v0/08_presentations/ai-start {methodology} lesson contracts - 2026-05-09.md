# AI Start lesson contracts

Статус: methodology lock v0.1  
Назначение: контракт каждого урока. Не "о чем поговорили", а что участник сделал, проверил и сохранил.

## Правило

Каждый урок должен закончиться тремя вещами:

1. Рабочий артефакт участника.
2. Проверка через gate.
3. След в AI-hub: пример, prompt update, gate update, owner note или homework.

Если нет этих трех вещей, урок слишком абстрактный.

## Общий формат занятия

### 90 минут

```text
00-07  рамка урока и с чем уходим
07-20  метод / карта процесса
20-35  демонстрация на материале
35-60  практика участников
60-75  разбор outputs и типичных фейлов
75-85  Base / Opti / Advanced фиксация
85-90  homework и куда сохранить результат
```

### 120 минут

```text
00-10  рамка урока и рабочий outcome
10-30  метод / workflow
30-45  tool radar / demo
45-75  практика 1
75-95  практика 2 или разбор фейлов
95-110 quality gate и hub update
110-120 homework, Q&A, next step
```

## Lesson 01. Start map / AI как рабочий слой редакции

### После урока участник умеет

Поставить одну AI-задачу как рабочий brief:

```text
source
цель
формат
ограничения
что AI не имеет права делать
human gate
куда сохранить пример
```

### Входной материал

- личная повторяющаяся задача участника;
- безопасный synthetic source, если нельзя брать рабочий материал;
- карта 5 пайплайнов.

### Практика в аудитории

Участник выбирает одну задачу и заполняет task brief.

### Base

Заполнить task brief и назвать human gate.

### Opti

Понять, какой pipeline ускорит личную роль: текст, видео, визуал, аудио или контур.

### Advanced

Предложить, какой удачный / плохой output надо сохранить в hub как evidence.

### Gate

Task gate:

- есть source;
- понятен output;
- есть ограничения;
- есть owner проверки;
- нет просьбы "сделай красиво" без критерия.

### Hub output

- `role_task_brief.md`;
- первый кандидат на workflow;
- список вопросов для Deck 02.

### Homework

Принести один безопасный материал для текстового разбора или выбрать synthetic material.

## Lesson 02. Text OS / Source Map -> publication package

### После урока участник умеет

Собрать publication package из исходника без потери фактов:

```text
Source Map
-> Style / tone check
-> draft
-> Telegram / social / headline set
-> factual + plastic gate
```

### Входной материал

- новости "Без интернета" / "Мормлеки";
- текст интернет-редакции;
- Telegram examples;
- "О мой блог" как разговорный стиль;
- synthetic source как fallback.

### Практика в аудитории

1. Разобрать материал через Source Map.
2. Получить draft.
3. Поймать AI-пластик.
4. Пересобрать под сайт / Telegram / social.

### Base

Source Map + один безопасный draft + factual gate.

### Opti

Три версии под разные каналы без потери фактов.

### Advanced

Одно правило для Style Graph, prompt или gate на основе реального failure.

### Gate

Text gate:

- каждый важный факт есть в source;
- нет раздувания масштаба;
- нет универсальной AI-гладкости;
- формат соответствует каналу;
- редактор понимает, что надо проверить.

### Hub output

- approved output;
- rejected AI output;
- update proposal для prompt / Style Graph / factual gate.

### Homework

Прогнать один свой материал через Text OS и принести один удачный и один слабый output.

## Lesson 03. Video acceleration / long video -> clip candidates

### После урока участник умеет

Получить из длинного видео / транскрипта карту фрагментов и top-3 кандидата на вертикальные клипы.

### Входной материал

- транскрипт сюжета / интервью / эфира;
- описание видео с таймкодами;
- безопасный клиентский фрагмент или synthetic transcript.

### Практика в аудитории

1. Разложить видео по смысловым блокам.
2. Найти 5-7 candidates.
3. Выбрать top-3.
4. Для top-3 собрать hook, subtitle chunks, cover text, risk note.

### Base

5-7 candidates и top-3.

### Opti

Production pack для top-3.

### Advanced

Схема transcript -> assistant -> монтажная система -> video gate.

### Gate

Video gate:

- hook не врет;
- клип понятен без опасной потери контекста;
- начало работает первые 3 секунды;
- есть проверка монтажера;
- есть риск-note для редактора.

### Hub output

- таблица clip candidates;
- video gate update;
- список инструментов, которые стоит протестировать редакции.

### Homework

Выбрать один реальный длинный материал и принести transcript / таймкоды для clinic.

## Lesson 04. Visual conveyor / reference -> prompt project -> asset

### После урока участник умеет

Собрать visual production pack, а не просто попросить "сделай картинку".

### Входной материал

- текст / новость / рубрика;
- визуалы клиента из папки `04 Визуал`;
- 2-3 референса стиля;
- synthetic source как fallback.

### Практика в аудитории

1. Выбрать смысл визуала.
2. Отделить факты от образа.
3. Снять style rules с референсов.
4. Собрать prompt project для hero / card / cover / b-roll still / motion seed.

### Base

Visual brief: смысл, формат, ограничения, редактируемый текстовый слой, visual gate.

### Opti

Prompt project для серии.

### Advanced

Reference -> Higgsfield / Kling / Runway -> animation -> Figma / Canva template.

### Gate

Visual gate:

- текст и факты не запечены в AI-картинку;
- визуал не создает ложный факт;
- читаемость держится на мобильном;
- стиль не превращается в stock;
- есть место для редакторской правки.

### Hub output

- visual brief;
- prompt project;
- rejected visual patterns.

### Homework

Собрать один visual brief под реальную рубрику и принести reference set.

## Lesson 05. Audio OS / written material -> spoken script

### После урока участник умеет

Перевести письменный материал в звучащий script без выдумки и лишней драматизации.

### Входной материал

- текстовая новость;
- "О мой блог" как пример разговорного ритма;
- Telegram / сайт как исходник;
- synthetic source.

### Практика в аудитории

1. Вытащить главный смысл и обязательные факты.
2. Написать spoken script 60-90 секунд.
3. Прочитать вслух.
4. Исправить места, которые не произносятся.

### Base

Spoken script 60-90 секунд.

### Opti

Версии под эфир, Telegram audio, podcast fragment, voiceover.

### Advanced

Audio gate и правила этичного использования voice tools.

### Gate

Audio gate:

- можно произнести вслух;
- нет новых фактов;
- нет лишней оценки;
- ведущему оставлено место для живой интонации;
- voice tools не используются без разрешения.

### Hub output

- approved spoken script;
- список непроизносимых фраз;
- audio gate update.

### Homework

Записать короткий voice test или принести script с пометками, где текст ломается вслух.

## Lesson 06. Editorial contour / monitoring -> digest -> content grid

### После урока участник умеет

Превратить список сигналов в weekly digest и content grid с owner'ами и рисками.

### Входной материал

- список тем / рубрик / приоритетов клиента;
- Telegram examples;
- текущие редакционные сигналы;
- synthetic monitoring list.

### Практика в аудитории

1. Сгруппировать сигналы.
2. Отметить источник, доверие, риск.
3. Собрать weekly digest.
4. Перевести digest в content grid.

### Base

Weekly digest из сигналов.

### Opti

Content grid по каналам и владельцам.

### Advanced

Keep / revise / kill / automate later для workflows.

### Gate

Editorial contour gate:

- AI не назначает важность без редактора;
- источник виден;
- есть владелец;
- есть next action;
- риск не спрятан в красивой формулировке.

### Hub output

- weekly digest;
- content grid;
- update proposal.

### Homework

Принести один реальный friction case: где AI не помог, ошибся или замедлил.

## Lesson 07. Hub build / память редакции

### После урока участник умеет

Понимать hub не как папку, а как живую память редакции.

### Входной материал

- approved outputs;
- rejected AI outputs;
- вопросы клиента;
- пустая ToV-папка как кейс.

### Практика в аудитории

1. Разобрать approved / rejected examples.
2. Сформулировать правило.
3. Назначить owner.
4. Сделать changelog entry.

### Base

Минимальная структура hub.

### Opti

Роли и правила добавления примеров.

### Advanced

Style Graph и prompt updates через evidence.

### Gate

Hub gate:

- пример подписан;
- понятно, почему он approved / rejected;
- есть owner;
- есть дата;
- понятно, какое правило изменилось.

### Hub output

- hub structure;
- owner map;
- first changelog entry.

### Homework

Каждая роль приносит один example для hub: хороший, слабый или спорный.

## Lesson 08. Agents / task systems

### После урока участник умеет

Описать agent-like сценарий как задачу, а не как мечту "пусть AI сам все делает".

### Входной материал

- один повторяющийся workflow;
- tool list клиента;
- tool radar;
- ограничения безопасности.

### Практика в аудитории

1. Выбрать повторяющуюся задачу.
2. Описать input, tools, memory, constraints, gate.
3. Разделить manual / semi-auto / agentic future.

### Base

Agent task brief.

### Opti

Tool chain под роль.

### Advanced

MCP / API scenario для будущей полуавтоматизации.

### Gate

Agent gate:

- есть бизнес-задача;
- есть разрешенные источники;
- есть human gate;
- нет автоматической публикации без человека;
- понятно, что хранится в памяти.

### Hub output

- agent task brief;
- automation candidate list;
- security questions.

### Homework

Описать одну automation candidate с рисками и человеческой проверкой.

## Lesson 09. Practice clinic / реальные кейсы

### После урока участник умеет

Прогнать реальный кейс через pipeline и превратить проблему в update.

### Входной материал

- реальные материалы участников;
- outputs из уроков 02-08;
- friction cases;
- вопросы клиента.

### Практика в аудитории

1. Выбрать кейс.
2. Пройти pipeline.
3. Найти failure / bottleneck.
4. Решить: prompt, gate, context, tool stack или owner.

### Base

Один реальный кейс через pipeline.

### Opti

Сравнение: быстрее руками или быстрее через AI.

### Advanced

Update proposal по реальному failure.

### Gate

Clinic gate:

- кейс не обсуждается абстрактно;
- есть материал;
- есть output;
- есть failure / success evidence;
- есть следующее действие.

### Hub output

- case note;
- update proposal;
- ambassador / owner list.

### Homework

До финала выбрать, какие 3-5 элементов попадут в AI Start Kit редакции.

## Lesson 10. Final kit / 30-day adoption loop

### После урока участник умеет

Пользоваться AI Start Kit как рабочей системой на 30 дней.

### Входной материал

- все workflows;
- prompts;
- gates;
- examples;
- owner notes;
- recordings / Q&A.

### Практика в аудитории

1. Проверить kit.
2. Назначить owners.
3. Собрать 30-day use plan.
4. Выбрать next bets.

### Base

Готовый AI Start Kit.

### Opti

Weekly use plan.

### Advanced

Owners, review board, next bets.

### Gate

Final kit gate:

- есть 5 workflows;
- есть prompt library;
- есть quality gates;
- есть examples;
- есть recordings slot;
- есть owners;
- есть 30-day loop.

### Hub output

- final kit checklist;
- owner map;
- 30-day dashboard;
- next bets list.

### Homework

Запустить 30-дневный контур: один материал в неделю через pipeline, один update proposal, один review slot.

## 30-day dashboard

Минимальные метрики:

```text
materials_processed
accepted_outputs
rejected_outputs
prompt_updates
gate_updates
time_saved_estimate
open_risks
owner_next_action
```

Плохая метрика: "сколько раз открывали ChatGPT".  
Нормальная метрика: "сколько рабочих материалов прошли через pipeline и что изменилось в качестве / скорости".

## Что говорить клиенту про практику

Практика предусмотрена внутри каждого занятия. Это не компьютерный класс и не марафон "все молча сидят по индивидуальным местам".

Формат:

```text
демо на экране
-> 10-25 минут индивидуальной / парной работы
-> разбор outputs
-> сохранение example / update в hub
-> homework на реальном материале
```

Так мы не превращаем занятия в Q&A, но закрываем реальные вопросы через действия.
