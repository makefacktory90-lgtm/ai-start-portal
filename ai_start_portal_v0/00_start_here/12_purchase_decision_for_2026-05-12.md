# Purchase decision for May 12

Статус: procurement v1  
Дата выдачи клиенту: утро 12 мая 2026  
Назначение: финальный список, что купить / подключить / проверить перед стартом практической части AI Start.

## Короткое решение

Для старта не покупаем "зоопарк нейросетей".

Покупаем и проверяем один базовый рабочий контур:

```text
общий LLM для практики
-> knowledge / source layer
-> video / visual pilot seats
-> transcript route
-> hub / recordings / Q&A workflow
```

## Must have до первой лекции

### 1. Основной LLM для участников

Рекомендация:

```text
ChatGPT Business или другой корпоративно разрешенный LLM.
```

Кому:

- все участники, если возможно;
- минимум: 15 доступов на 30 человек при работе парами;
- ведущая / методолог / owners - обязательно отдельные доступы.

Зачем:

- Text OS;
- Source Map;
- prompts;
- работа с файлами;
- базовая практика на каждом уроке.

Проверка готовности:

- вход не блокируется;
- можно открыть файлы / материалы;
- можно получить output по starter prompt;
- понятно, какие данные нельзя загружать.

### 2. Codex / code-agent route для hub

Рекомендация:

```text
Codex для ведущей, методолога, technical helper и hub owners.
```

Кому:

- 2-5 человек, не всем участникам.

Зачем:

- поддерживать portal / hub;
- обновлять markdown-документы;
- собирать prompt library;
- фиксировать lesson outputs;
- готовить Q&A / summary / homework.

Проверка готовности:

- открыт repo / project folder;
- agent видит файлы hub;
- есть доступ к GitHub / Pages;
- technical helper понимает publish flow.

### 3. Knowledge layer: NotebookLM / Gemini

Рекомендация:

```text
Проверить доступ NotebookLM и Gemini через Google Workspace / разрешенные аккаунты.
```

Кому:

- редакторы;
- owners;
- методолог;
- участники, если Workspace policy разрешает.

Зачем:

- работа с источниками;
- briefing docs;
- материалы клиента;
- source-grounded answers;
- быстрые summary с привязкой к источникам.

Проверка готовности:

- можно создать notebook;
- можно загрузить тестовый PDF / doc / link;
- ответы дают references / citations;
- понятно, какие материалы нельзя загружать.

### 4. Transcript route

Рекомендация:

```text
Один согласованный маршрут транскрипции.
```

Варианты:

- Whisper / MacWhisper / Superwhisper;
- Granola для созвонов, если security policy разрешает;
- встроенная транскрипция Zoom / другого сервиса;
- текущий корпоративный transcript route.

Кому:

- ведущая;
- методолог;
- video / text owners.

Зачем:

- записи уроков;
- разбор видео;
- Text OS из эфиров / интервью;
- Q&A и summary после вебинаров.

Проверка готовности:

- запись превращается в transcript;
- есть timestamps, если нужен видео-пайплайн;
- transcript можно сохранить в hub;
- есть правило, что делать с внутренними материалами.

## Pilot seats до 19 мая

### 5. Higgsfield

Рекомендация:

```text
2-3 pilot seats.
```

Кому:

- визуальный owner;
- video / SMM owner;
- методолог / ведущая.

Зачем:

- visual hypotheses;
- prompt projects;
- cover / title / image / motion seeds;
- демонстрация visual conveyor.

Не покупать всем до теста.

### 6. Один video acceleration tool

Рекомендация:

```text
Купить / подключить 1-2 pilot seats и сравнить:
OpusClip / Gling / Submagic.
```

Кому:

- видео / SMM;
- монтажер / видеоредактор;
- один owner для сравнения.

Зачем:

- captions;
- short clips;
- rough cut;
- silence / bad takes removal;
- публикационный пакет для вертикалей.

Решение:

```text
Не покупать все три на команду.
Взять 1-2 pilot-доступа, провести тест на одном безопасном видео и выбрать.
```

### 7. CapCut Pro или текущий NLE

Рекомендация:

```text
Не ломать существующий монтажный контур.
```

Кому:

- video / SMM, если они реально монтируют вертикали там.

Зачем:

- captions;
- fast social packaging;
- export.

Если команда уже работает в Premiere / Edius / DaVinci, это остается основой, а AI-сервисы идут как acceleration layer.

## Optional для owners / advanced

### 8. Claude / Claude Code

Рекомендация:

```text
1-3 seats для owners / методолога / advanced, если нужен второй reasoning / code-agent route.
```

Не покупать всем на старте.

Зачем:

- длинные документы;
- альтернативная структурная проверка;
- agent-like работа с файлами;
- advanced-сценарии.

### 9. Obsidian

Рекомендация:

```text
Бесплатно / optional для ведущей, методолога, owners.
```

Зачем:

- локальный markdown vault;
- заметки;
- связка transcript -> summary -> hub note;
- личная OS роли.

### 10. Google Vids / Stitch

Рекомендация:

```text
Demo / pilot, если доступно в Google-контуре.
```

Зачем:

- внутренние видео-черновики;
- быстрые visual / UI prototypes;
- не основной production-инструмент ТВ.

## Не покупать до старта

Не покупаем:

- 5-7 AI-video сервисов одновременно;
- генераторы картинок для всех;
- ElevenLabs / voice cloning без юридического согласования;
- n8n / automation seats до появления повторяемых workflows;
- сложную LMS;
- enterprise-пакеты без security / procurement решения;
- инструменты "на всякий случай".

## Как объяснить клиенту

```text
Нам не нужен набор из 20 сервисов.
Нам нужен проверенный рабочий минимум:
общий LLM,
source / knowledge layer,
транскрипция,
пилоты для видео и визуала,
и hub, куда попадают prompts, gates и examples.

После первых практик мы смотрим, что реально используется,
и только потом расширяем закупку.
```

## Таблица решения

| Приоритет | Что | Сколько | Кому | Статус |
|---|---:|---:|---|---|
| Must | ChatGPT Business / разрешенный LLM | 30 или минимум 15 | участники / пары | купить / подтвердить |
| Must | Codex / code-agent route | 2-5 | ведущая, методолог, hub owners | подключить |
| Must | NotebookLM / Gemini | по доступности | редакторы, owners | проверить доступ |
| Must | Transcript route | 1 маршрут | ведущая, video/text owners | выбрать и протестировать |
| Pilot | Higgsfield | 2-3 | visual/video/metod | купить pilot |
| Pilot | OpusClip / Gling / Submagic | 1-2 | video / SMM | выбрать pilot |
| Role-based | CapCut Pro / current NLE | 2-4, если нужно | video / SMM | не ломать текущий NLE |
| Optional | Claude / Claude Code | 1-3 | owners / advanced | только если нужен второй route |
| Optional | Obsidian | 2-5 | owners / методолог | можно без закупки |
| Optional | Google Vids / Stitch | demo | owners / visual | проверить доступ |

## Проверка до первой практики

Минимальный технический чек:

```text
[ ] основной LLM открывается у участников / пар;
[ ] hub открывается;
[ ] starter prompt копируется и запускается;
[ ] есть правило public / internal / restricted source;
[ ] transcript route протестирован на одном файле;
[ ] Higgsfield pilot сделал один тест;
[ ] video acceleration pilot принял один безопасный ролик;
[ ] понятно, куда складывать approved / rejected examples;
[ ] есть owner, кто после урока выкладывает запись, transcript, summary, Q&A.
```

## Что отправить клиенту утром 12 мая

Отправить не весь портал, а короткий пакет:

1. Этот файл: `12_purchase_decision_for_2026-05-12.md`.
2. Страница: `ai_start_course_site/purchase-stack.html`.
3. `06_participant_prework.md`.
4. `08_implementation_ladder.md`.

Сообщение:

```text
Коллеги, добрый день.
Ниже финальный v1 список доступов и проверок для старта практической части.
Логика такая: не покупаем много сервисов сразу, сначала закрываем базовый рабочий контур и 2-3 пилота для видео / визуала.
После первых практик расширяем только то, что реально встраивается в pipeline редакции.
```

