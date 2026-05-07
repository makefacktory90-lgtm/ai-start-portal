# AI Start: план сборки до субботы

Дата старта: понедельник, 4 мая 2026  
Дедлайн: суббота, 9 мая 2026  
Цель: к субботе иметь готовый курс v1, который можно пройти структурно как оператор / корреспондент из Норильска, поправить, а затем на его основе собрать презентации и упражнения.

## 1. Главная мысль

Сделать всё за 5 дней можно.

Но только если не пытаться за эти же 5 дней сделать:

- идеальный LMS;
- полный клиентский портал;
- 20 workflows;
- автоматизации;
- дизайн-систему уровня продукта;
- презентации, упражнения, политику, тесты и все клиентские адаптации одновременно.

Нормальный v1:

```text
структура курса
-> портал
-> 6 модулей
-> 7 starter workflows
-> A1/A2/A3 задания
-> synthetic materials
-> quality gates
-> facilitator notes
-> презентации по блокам
-> dry run "оператор из Норильска"
```

Это реально.

## 2. Что уже есть

- research notes по governance, editorial workflows, repurposing, monitoring, visual/video, audio, adoption;
- course blueprint;
- workshop methodology;
- weekly update flow;
- portal v0;
- A1/A2/A3 methodology;
- первый workflow `note_to_news_draft`;
- factual quality gate;
- feedback log;
- weekly review template.

## 3. Что критически не хватает

### 1. Minimum viable AI policy

Одна короткая страница:

- что можно вставлять в AI;
- что нельзя;
- когда нужен редактор;
- что нельзя публиковать без проверки;
- как маркировать сомнительные факты.

### 2. Полный набор starter workflows

Нужно 7:

```text
01_note_to_news_draft
02_transcript_to_article
03_article_to_telegram
04_article_to_social_pack
05_article_to_visual_brief
06_monitoring_to_digest
07_bad_output_to_update_proposal
```

### 3. Synthetic materials

Для прохождения курса до клиентских материалов:

- заметка с события;
- messy transcript;
- пресс-релиз;
- слабый AI output;
- monitoring table;
- статья для repurposing;
- текст для visual/audio brief.

### 4. Facilitator scripts

Для каждого блока:

- что сказать в первые 5 минут;
- что показать live;
- какую ошибку AI специально показать;
- как разбирать output;
- где сохранить example.

### 5. Operator walkthrough

Нужен сценарий:

> "Я оператор / корреспондент из Норильска, я открываю курс впервые."

И пройти все A1.

### 6. Презентации

Не раньше, чем структура пройдет operator walkthrough.

Иначе сделаем красивые слайды к сырой логике. Мы так не будем, господи помилуй.

## 4. План по дням

### День 1. Понедельник, 4 мая

Цель:

- убрать AI Mindset визуал;
- привести портал к стилю IraAI;
- закрыть структуру курса;
- закрепить A1/A2/A3;
- добавить missing policy draft.

Deliverables:

- portal visual v0.2;
- `course_blueprint_and_coverage.md`;
- `five_day_delivery_plan.md`;
- `ai_use_policy.md`;
- первый workflow проверен.

Критерий готовности:

> Ира открывает портал и больше не говорит "это AI Mindset".

### День 2. Вторник, 5 мая

Цель:

- собрать все 7 starter workflows;
- каждый workflow должен иметь A1/A2/A3;
- каждый workflow должен иметь expected output и quality gate.

Deliverables:

- `02_transcript_to_article`;
- `03_article_to_telegram`;
- `04_article_to_social_pack`;
- `05_article_to_visual_brief`;
- `06_monitoring_to_digest`;
- `07_bad_output_to_update_proposal`;
- обновленный portal navigation.

Критерий готовности:

> Можно пройти A1 по каждому workflow без объяснений автора курса.

### День 3. Среда, 6 мая

Цель:

- собрать synthetic materials;
- пройти курс как "оператор из Норильска";
- найти места, где человек теряется;
- поправить входные страницы и wording.

Deliverables:

- папка `07_practice_materials`;
- 6-8 учебных материалов;
- operator walkthrough notes;
- исправления по friction.

Критерий готовности:

> Новичок может за 20-30 минут получить результат в первом workflow.

### День 4. Четверг, 7 мая

Цель:

- собрать facilitator scripts;
- собрать упражнения по каждому блоку;
- подготовить структуру презентаций.

Deliverables:

- `08_facilitator_guides`;
- упражнения A1/A2/A3 для каждого блока;
- outline презентаций;
- speaking notes.

Критерий готовности:

> Ведущий понимает, что говорить, что показывать, где участники практикуются.

### День 5. Пятница, 8 мая

Цель:

- собрать презентации;
- пройти dry run;
- поправить portal;
- упаковать final v1.

Deliverables:

- презентации по блокам;
- final portal v1;
- final AI Start Kit v1;
- список known gaps;
- facilitator checklist.

Критерий готовности:

> В субботу остается не сборка, а финальная ревизия и полировка.

### Буфер. Суббота, 9 мая

Цель:

- пройти глазами Иры;
- поправить критичные места;
- не открывать новый research rabbit hole.

Deliverables:

- final package;
- список "что делаем после клиентских материалов";
- список "что можно показывать клиенту".

## 5. Что Ира может не видеть сейчас

### 1. Главная опасность - не контент, а когнитивная перегрузка

Мы можем собрать слишком умную систему.

Антидот:

- первый экран тупо понятный;
- A1 не стыдный;
- каждый модуль имеет один главный workflow;
- все сложное уходит в process owner layer.

### 2. Презентации нельзя делать раньше практики

Сначала:

```text
workflow
-> exercise
-> operator walkthrough
-> then slides
```

Иначе слайды будут красивые, но не будут вести человека.

### 3. Клиентские материалы все равно понадобятся

Но не для старта.

Они нужны для:

- tone calibration;
- approved examples;
- forbidden wording;
- real source list;
- publication risks.

### 4. Нужно решить, где будет жить portal

Варианты:

- локальная папка / zip;
- Vercel page;
- Notion-like portal;
- внутренний диск клиента.

Для v1 можно оставить локально.

Для клиента лучше дать web link.

### 5. Нужен minimum viable policy

Без нее участники будут спрашивать:

> "А можно вставлять рабочие документы?"

И если мы заранее не ответим, начнется ад-либ.

### 6. Нужно заранее определить границу результата

К субботе готовим:

- course v1;
- portal v1;
- starter workflows;
- exercises;
- decks.

Не готовим:

- полностью кастомизированный курс на реальных материалах клиента;
- automation layer;
- production LMS;
- финальный брендбук клиента.

## 6. Режим работы

Каждый день:

```text
утро: сборка нового слоя
день: проверка на "операторе из Норильска"
вечер: правки и фиксация deliverables
```

Главный критерий:

> Если A1 непонятен - всё остальное не имеет значения.

