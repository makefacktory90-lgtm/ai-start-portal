---
tags:
  - project/nornikel
  - type/system
  - status/decided
date: 2026-05-07
status: decided
owner: Ira + Codex
refs:
  - "../ai_start_portal_v0/05_update_log/feedback_log_template.md"
  - "../ai_start_portal_v0/06_process_owners/weekly_review_template.md"
  - "../ai_start_portal_v0/07_content_mechanics/release_and_retention_model.md"
---

# Knowledge base update loop

## 1. Главная проблема

База знаний не обновляется сама.

Если не задать контур обновления, через две недели hub станет кладбищем хороших намерений: промпты лежат, примеры не добавляются, непонятно, кто решает, что стало стандартом.

## 2. Решение

Обновление базы знаний строится как рабочий контур:

```text
личный output
-> example / failure
-> update proposal
-> owner review
-> approved change
-> changelog
-> next test
```

Это не CMS-задача. Это управленческая задача: кто имеет право менять общее правило и на каком основании.

## 3. Три слоя базы

### OS роли

Личная рабочая сборка участника:

- какие pipeline нужны моей роли;
- какие материалы я чаще всего обрабатываю;
- какие prompts мне подходят;
- где я должен проверять руками;
- какие примеры мне помогают.

Статус: личная практика.

### OS редакции

Командный слой:

- approved workflows;
- shared prompts;
- quality gates;
- approved / rejected examples;
- owner decisions;
- weekly updates.

Статус: редакционный стандарт.

### OS компании

Управленческий слой:

- какие практики можно переносить между редакциями;
- что остается локальным;
- что требует политики / безопасности;
- что можно полуавтоматизировать позже.

Статус: company standard / later automation candidate.

## 4. Статусы изменений

Каждое изменение в hub должно иметь статус:

```text
personal
proposed
testing
approved
rejected
archived
automate later
```

Нельзя молча править master prompt или quality gate.

## 5. Кто нужен

Минимальные роли:

- AI-hub owner: держит структуру, не дает hub превратиться в свалку;
- редакторский owner: проверяет смысл, факты, тон;
- technical helper / Codex: вносит изменения в markdown / GitHub Pages;
- change lead: решает, что становится стандартом компании.

## 6. Еженедельный review

Раз в неделю owners смотрят:

- какие outputs сохранили;
- какие ошибки повторились;
- какие prompts надо поправить;
- какие gates не сработали;
- какие examples можно утвердить;
- что оставить личной настройкой;
- что добавить в общий стандарт.

Формула решения:

```text
keep
revise
test
reject
archive
automate later
```

## 7. Что сохранять после каждого занятия

- запись;
- транскрипт;
- краткое резюме;
- live output;
- хороший example;
- плохой example с причиной;
- update proposal;
- вопросы участников;
- owner decision.

## 8. Техническая реализация v1

До субботы:

- markdown hub;
- GitHub Pages;
- ручные updates через Codex / Git;
- weekly review template;
- changelog.

После запуска:

- можно подключить GitHub Issues / Forms для update proposals;
- можно сделать простую страницу `proposed updates`;
- можно добавить Notion/Airtable только если редакции реально будут этим пользоваться.

## 9. Нужна ли консультация

По knowledge base консультация не первая необходимость.

Нам не нужен человек, который расскажет "какой выбрать Notion".

Нужен только точечный совет, если надо выбрать production-инструмент для команды:

- GitHub Pages + markdown;
- Notion;
- Google Drive / Docs;
- корпоративный SharePoint;
- отдельный portal.

До этого достаточно текущего update loop.
