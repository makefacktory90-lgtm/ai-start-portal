# 04 Visual Brief

## Назначение

Перевести source в визуальный brief: формат, смысл, текстовый слой, prompt set, ограничения и style gate.

## Когда использовать

- нужна обложка, карточка, quote card или простая инфографика;
- есть материал, но нет ясного визуального задания;
- нужно передать дизайнеру или AI-инструменту точный brief.

## Что нужно до старта

- source или Source Map;
- референсы визуального стиля;
- текущие шаблоны редакции, если есть;
- visual builder / Figma / Canva / Higgsfield по доступу.

## Основной prompt

```text
Ты visual editor для редакционного материала.

Не генерируй финальную картинку.
Сначала собери visual brief.

Сделай:
1. Главный смысл материала.
2. Факты, которые нельзя исказить.
3. Форматы: cover, карточки, quote card, инфографика.
4. Текстовый слой: заголовок, подписи, короткие формулировки.
5. Visual direction: настроение, композиция, ограничения.
6. Prompt set для image/video генератора.
7. Style gate: что проверить перед публикацией.

Source:
[вставьте материал]
```

## Output format

```text
## Visual brief
## Format options
## Text layer
## Prompt set
## Style gate
## Что отдать дизайнеру
```

## Human gate

- факты и цифры остаются редактируемым текстом;
- AI-asset не становится источником факта;
- обложка не кликбейтит;
- текст читается на мобильном;
- стиль не конфликтует с редакцией.

## Домашка Base / Opti / Advanced

- Base: собрать visual brief по одному source.
- Opti: сделать prompt set и 2-3 варианта направления.
- Advanced: собрать style prompt project под визуальный язык редакции.

## Ссылки и инструменты

- Visual deck: ../../ai_start_course_site/decks/deck-04-visual.html
- Visual quality gate: ../03_quality_gates/visual_quality_gate.md
- Visual builder: ../../ai_start_course_site/visual-builder.html
