# 12 Prompt To Skill

Status: draft for lesson 02. Do not publish before 15 May.

## Назначение

Показать переход от хорошего prompt chain к reusable skill: когда повторяемый редакционный маршрут нужно сохранить как рабочую инструкцию, а не каждый раз заново описывать его в чате.

Цель skill - повысить повторяемость результата и снизить зависимость от длинных ручных инструкций.

## Когда использовать

- один prompt chain сработал на нескольких материалах;
- у редакции появился повторяемый workflow;
- участники хотят закрепить ToV, Style Graph, gate или production package;
- нужно подготовить `SKILL.md` для внутренней папки / проекта / агента.

## Основной prompt

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

Материал:
[prompt chain + source + output + human edits]
```

## Минимальная структура SKILL.md

```text
---
name: editorial-format-factory
description: Use when a newsroom needs to turn a verified Source Map into several channel formats while preserving facts, tone, and human review gates.
---

# Editorial Format Factory

## When to use
## Inputs
## Workflow
## Output format
## Human gate
## Examples to save
## Anti-patterns
```

## Что объяснять участникам

Prompt - это разовый запрос.

Prompt chain - маршрут из нескольких запросов.

Project folder - место, где лежат примеры, промпты, gates и outputs.

Style Graph - накопленная карта голоса по evidence.

Skill - упакованный повторяемый workflow, который можно переиспользовать и улучшать.

## Human gate

- не превращать один удачный пример в стандарт;
- skill появляется после evidence, а не после восторга;
- в skill нельзя класть внутренние данные без разрешения;
- каждый skill должен иметь owner и changelog;
- подозрительные сторонние skills не ставить без проверки.

## Домашка Base / Opti / Advanced

- Base: описать один удачный prompt как repeatable step.
- Opti: собрать маленький `SKILL.md` без кода.
- Advanced: добавить references: approved example, rejected example, quality gate.
