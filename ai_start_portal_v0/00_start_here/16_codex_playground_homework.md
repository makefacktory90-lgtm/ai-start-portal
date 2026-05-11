# Homework after Deck 01: Codex playground

Домашнее задание до второго урока.

## Что делаем

До второго урока:

1. Установить / открыть Codex.
2. Создать рабочую папку на компьютере:

```text
ai-start-playground/
├── sources/
├── prompts/
├── gates/
├── outputs/
└── hub/
```

3. Сохранить первый research-skill в папку `prompts`.
4. Положить safe source в `sources`.
5. Запустить один тестовый research-прогон или хотя бы подготовить папку.
6. Все ошибки установки, доступа и непонятные места принести в чат.

## Первый skill

Референс:

- https://github.com/tonyazhuuki/deep-research-skill

Минимальная схема:

```text
папка -> source -> prompt / skill -> output -> human gate -> hub
```

## Минимальный результат до второго урока

```text
ai-start-playground/
├── sources/
│   └── safe_source.md
├── prompts/
│   └── deep_research_prompt.md
├── gates/
│   └── source_safety_gate.md
├── outputs/
│   └── first_source_map.md
└── hub/
    └── useful_findings.md
```

## Что не делаем на первом уроке

- не подключаем всем Exa API;
- не разбираем сложные установки;
- не используем внутренние материалы клиента;
- не пытаемся сразу автоматизировать весь pipeline.

## Что делаем с вопросами

Вопросы по установке, правам доступа, папкам и первому skill отправляйте в чат.

## Зачем это нужно

На втором уроке рабочая папка понадобится для Text OS:

```text
source map -> стиль -> форматы -> smell test -> publication gate -> hub
```
