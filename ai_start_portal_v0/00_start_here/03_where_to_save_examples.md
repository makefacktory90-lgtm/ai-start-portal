# Куда сохранять примеры

После работы с workflow сохрани результат в одну из папок:

```text
04_examples/approved/
04_examples/rejected/
04_examples/before_after/
```

## Approved

Сюда кладем примеры, которые после человеческой правки можно считать хорошими.

Файл должен содержать:

```text
Workflow:
Input:
AI output:
Human edits:
Why approved:
```

## Rejected

Сюда кладем плохие или рискованные outputs.

Файл должен содержать:

```text
Workflow:
Input:
AI output:
What went wrong:
Risk:
Desired behavior next time:
```

## Before / After

Сюда кладем пары:

```text
AI draft:
Human final:
What changed:
What this teaches the workflow:
```

Если один и тот же тип правки повторяется 3+ раза, занеси проблему в:

```text
05_update_log/feedback_log_template.md
```

