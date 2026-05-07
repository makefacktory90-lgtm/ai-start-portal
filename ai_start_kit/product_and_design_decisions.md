# AI Start Nornikel: продуктовые и дизайн-решения

Дата: 2026-05-04  
Статус: зафиксировано после выбора референсов  
Назначение: не дать проекту уехать в лишний дизайн, лишний LMS или лишние презентационные форматы.

## 1. Главные решения

### Учебная рамка

Курс не строится как "выдача промптов".

Ожидание клиента:

```text
дайте нам промпты
```

Наша рамка:

```text
поставить руки
-> показать архитектуру работы
-> собрать OS роли / специалиста
-> собрать OS редакции
-> собрать OS компании
```

Промпты входят в систему, но не являются главным продуктом курса.

Главный продукт:

- участник понимает, как перестроить свою работу с материалом;
- редакция понимает, какие workflows, gates и examples становятся общими;
- лидеры изменений понимают, что корректировать, утверждать и не брать в стандарт.

Подробно:

- `nornikel {strategy} expert os company os learning frame - 2026-05-05.md`

### Презентации

Презентации собираем как web-decks в GitHub с деплоем на Vercel / GitHub Pages.

Не делаем:

- PPTX как основной формат;
- Canva как основной формат;
- Google Slides как основной формат;
- отдельную тяжелую LMS-презентационную систему.

Почему:

- быстрее править;
- проще версионировать;
- можно держать единый стиль;
- можно добавлять ссылки на hub, prompts, записи и транскрипты;
- можно переиспользовать компоненты между лекциями.

Референс по формату web-talk:

```text
https://ai-mindset-talk.vercel.app/
```

Берем оттуда:

- web-страницу как презентационный артефакт;
- крупные смысловые блоки;
- якорную навигацию;
- cards / sections;
- GitHub/Vercel-логику публикации.

Не берем:

- тему AI Mindset;
- слишком визионерский тон;
- визуальный пафос там, где нужен рабочий training kit.

### Визуальный стиль

Стиль держим ближе к IraAI:

```text
https://iraai.ru/masterclass-hassid/
```

Берем:

- белый фон;
- черный текст;
- крупная типографика;
- моноширинные технические подписи;
- красный как акцент;
- редакционный, уверенный, не корпоративно-пластиковый тон;
- ощущение "умная рабочая страница", а не "LMS от тендерного подрядчика".

Не берем:

- лишнюю декоративность;
- перегруженные градиенты;
- корпоративные карточки ради карточек;
- маркетинговый hero.

### Портал / hub

Портал делаем как удобную оболочку knowledge base.

Референс: скриншоты AI Mindset knowledge base.

Берем структуру:

- левый sidebar с неделями / пайплайнами / материалами;
- верхние breadcrumbs;
- центральная страница текущего блока;
- правый sidebar с metadata, speakers / owners, checklist, collection;
- слоты под запись, слайды, резюме, транскрипт, чат;
- A1/A2/A3 checklist;
- быстрые tool/material buttons;
- collapsible sections для глав / материалов;
- footer / collection для связанных файлов.

Не выпендриваемся.

Главная задача интерфейса:

> человек открыл страницу блока и сразу понял, что посмотреть, что сделать, что скачать, что отметить и куда вернуться.

Если дизайн мешает этому, дизайн неправ.

## 2. Архитектура проекта

Рекомендуемая структура:

```text
ai-start-nornikel/
  apps/
    hub/                  # портал курса / knowledge base
    decks/                # web-презентации
  content/
    program/
    pipelines/
    prompt-library/
    practice-materials/
    quality-gates/
    retention/
  public/
    recordings/           # placeholders, потом ссылки на видео
    transcripts/
    images/
  docs/
    project-command-center.md
    calibration-request.md
    known-gaps.md
```

Для текущей рыбы в этом workspace:

```text
output/ai_start_course_site/      # текущий static hub prototype
output/ai_start_portal_v0/        # markdown hub content
output/ai_start_kit/              # project docs, методология, штаб
```

## 3. Формат страницы блока в hub

Каждый блок должен иметь одинаковые зоны.

```text
Header:
  breadcrumbs
  title
  subtitle
  date / duration / status
  buttons: slides / summary / transcript / chat

Main:
  recording slot
  chapters / plan
  tools
  key insights
  workflow
  practice
  after-class package

Right sidebar:
  module card
  owners / speakers
  checklist A1/A2/A3
  collection
  feedback / ask button
```

## 4. Формат web-deck

Одна презентация = одна web-page / route.

Каждый deck:

```text
01_title
02_problem
03_frame
04_pipeline
05_demo
06_practice
07_quality_gate
08_hub_action
09_homework
10_next
```

Обязательное правило:

> У каждого deck должен быть переход в действие: открыть workflow, запустить prompt, сохранить output, заполнить feedback log.

Если deck не ведет в действие, он превращается в лекцию. Лекции люди слушают, кивают и забывают. Очень мило, очень бесполезно.

## 5. Что остается placeholders

До появления клиентских материалов:

- записи Zoom;
- транскрипты;
- реальные видео;
- реальные статьи;
- Telegram examples;
- визуальные примеры;
- tone-of-voice evidence;
- engagement metrics.

В hub эти зоны должны быть видимыми как slots:

```text
Запись появится после встречи.
Транскрипт появится после встречи.
Клиентский пример будет добавлен после калибровки.
```

Не прячем дырки. Аккуратно маркируем, что это slot.

## 6. Анти-решения

До субботы не делаем:

- красивую LMS;
- сложную регистрацию;
- личные кабинеты;
- комментарии внутри портала;
- database backend;
- идеальные интерактивные графы;
- сложную аналитику прохождения;
- дизайн ради вау.

До субботы делаем:

- понятный hub;
- понятные web-deck skeletons;
- 5 пайплайнов;
- prompt library;
- practice materials;
- mechanics до / во время / после встречи;
- retention loop;
- slots под записи.
