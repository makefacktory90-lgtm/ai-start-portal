# 06 Hub Update

## Назначение

Сохранять удачные промпты, gates, examples и recordings так, чтобы редакция могла повторить результат.

## Когда использовать

- после каждого урока;
- после удачного или провального AI-прогона;
- когда нужно обновить workflow, prompt, gate или пример.

## Что нужно до старта

- рабочий output;
- исходный source или ссылка на него;
- human gate;
- короткое объяснение: что сработало, что сломалось, что менять.

## Основной prompt

```text
Ты помогаешь редакции обновлять AI-hub.

На основе прогона ниже сделай update proposal.
Не пиши мотивационный текст.
Собери рабочую карточку.

Структура:
1. Какой workflow / skill обновляем.
2. Source: что было на входе.
3. AI step: какой prompt или инструмент использовали.
4. Output: что получилось.
5. Human gate: что проверил человек.
6. Evidence: что сработало / что не сработало.
7. Решение: keep / revise / kill / automate later.
8. Что добавить в hub: prompt, gate, example, warning.

Материал прогона:
[вставьте source, prompt, output, правки]
```

## Output format

```text
## Workflow card
## Evidence
## Decision
## Hub update
## Owner / next step
```

## Human gate

- в hub сохраняется только проверяемый пример;
- не сохраняются персональные данные и внутренние материалы;
- есть человек-владелец обновления;
- слабый пример можно сохранить только как warning;
- следующий шаг сформулирован конкретно.


## Ссылки и инструменты

- Recordings: ../10_recordings/README.md
- Update log: ../05_update_log/changelog.md
- Feedback template: ../05_update_log/feedback_log_template.md
- Methodology: ../08_presentations/ai-start%20%7Bmethodology%7D%20lesson%20contracts%20-%202026-05-09.md
