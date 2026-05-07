---
tags:
  - project/ai-start
  - type/brief
  - status/draft
date: 2026-05-07
status: draft
owner: Ira + Codex
refs:
  - "nornikel {guide} 19 may video stack alignment - 2026-05-05.md"
  - "../ai_start_portal_v0/02_pipelines/02_long_video_to_vertical_clips/workflow.md"
  - "../ai_start_portal_v0/03_quality_gates/video_quality_gate.md"
---

# Brief: консультация по видео-уроку 19 мая

## 1. Почему консультация нужна

Видео-блок сейчас самый рискованный.

У нас есть правильная рамка:

```text
long video / transcript
-> clip candidates
-> top-3
-> hook / subtitles / cover / description
-> editor + montage QA
-> publishing package
-> hub examples
```

Но пока не хватает production уверенности:

- какая связка инструментов реально быстрее для ТВ-материала;
- что можно показать live за 2 часа без провала;
- как работать, если нельзя загружать видео в сервисы;
- как не уйти в обзор модных AI-video tools;
- где нужен монтажер, а где достаточно transcript + LLM.

## 2. Кого искать

Нужен не "AI-видео эксперт".

Нужен человек, который понимает:

- телевизионный / редакционный монтаж;
- short-form repurposing;
- subtitles / captions;
- cover / first frame / title card;
- ограничения прав и загрузки материалов;
- CapCut / Premiere / DaVinci / Descript или их рабочие аналоги.

## 3. Формат консультации

Оптимально:

```text
90 минут
```

Цель: не лекция, а калибровка production route.

## 4. Что показать консультанту

- Pipeline 02 workflow;
- video quality gate;
- synthetic transcript Material 02;
- alignment brief 19 мая;
- visual-builder как связанный слой cover/title/intertitle.

## 5. Вопросы на консультацию

1. Какой минимум инструментов нужен, чтобы из 6-8 минутного ТВ-сюжета сделать 1-3 вертикалки?
2. Что делать, если есть только видео, но нет проекта монтажа?
3. Что делать, если нельзя загружать видео во внешние сервисы?
4. Достаточно ли transcript + LLM для отбора кандидатов?
5. Где CapCut/Descript помогают, а где мешают?
6. Что реально показать live за 2 часа?
7. Какие ошибки участники точно сделают при выборе клипов?
8. Какой output должен остаться в hub после занятия?

## 6. Deliverables после консультации

Консультация считается полезной, если после нее есть:

- основная связка инструментов;
- fallback связка;
- live demo plan на 2 часа;
- список запретов / рисков;
- 1 пример publication package;
- обновления для video quality gate;
- список того, что должен принести видео-специалист 19 мая.

## 7. Решение

Консультацию брать стоит.

Но только точечно: не "расскажите нам про AI video", а "проверьте production route для блока 19 мая".
