# Recordings / transcripts / summaries

После каждого вебинара материалы выкладываются в один и тот же слот, чтобы участники не искали записи по чатам.

## Структура

```text
10_recordings/
  lesson-01-start/
    recording_link.md
    transcript.md
    summary.md
    questions_and_answers.md
    homework.md
  lesson-02-text-os/
    recording_link.md
    GMT20260515-053020_Recording.transcript.vtt
    transcript.md
    summary.md
    homework.md
  lesson-03-video/
  lesson-04-visual/
  lesson-05-audio/
  lesson-06-editorial-contour/
  lesson-07-hub-build/
  lesson-08-agents/
  lesson-09-practice-clinic/
  lesson-10-final-kit/
```

## Что появляется после занятия

- `recording_link.md` - ссылка на запись Zoom / диск клиента.
- `transcript.md` - расшифровка вебинара.
- `summary.md` - короткое резюме: что прошли, что показали, какие выводы.
- `questions_and_answers.md` - вопросы, которые возникли в чате / после занятия.
- `homework.md` - что сделать до следующего занятия.

## SLA и владелец

Чтобы записи не жили в стиле "где-то в чате была ссылка", после каждого вебинара назначается один publication owner.

Минимальный SLA:

```text
T+2 часа   запись сохранена, ссылка добавлена в recording_link.md
T+12 часов transcript загружен или поставлен в обработку
T+24 часа  summary, Q&A и homework опубликованы
T+48 часов хорошие / плохие outputs перенесены в hub examples
```

Если клиент хранит видео на своем диске, в portal кладется не файл, а стабильная ссылка и короткое описание доступа.

## Правило публикации

```text
вебинар закончился
-> запись и транскрипт сохраняются
-> summary + Q&A публикуются в течение 24 часов
-> хорошие / плохие outputs попадают в examples
-> повторяющиеся ошибки идут в update proposal
```

## Prompt для summary после вебинара

```text
Собери summary вебинара для практического AI-курса редакции.

Не делай красивый пересказ.

Дай:
1. что прошли;
2. что показывали на demo;
3. какая была практика;
4. какие prompts использовали;
5. какие quality gates применяли;
6. какие вопросы задали участники;
7. какие outputs получились;
8. что сохранить в hub;
9. homework до следующего занятия;
10. какие открытые риски / решения остались.
```

## Где это видно участникам

Ссылка на этот раздел должна быть в портале и в финальном слайде каждого урока.
