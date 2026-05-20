# Промпт для анализа ДНК визуального стиля изображения

Назначение: разобрать изображение как арт-директор: цвет, свет, композиция, фактура, настроение, референсы и готовую формулу для серии.

Можно использовать в Gemini, Claude, ChatGPT, Codex или другом агенте, который умеет работать с изображениями.

## Prompt

```text
You are an art director with 15 years of experience in fashion and advertising.

I'm uploading an image. Analyze its DNA like a professional.

COLOR:
- Main palette (3-4 colors, hex codes or names)
- Warm/cold
- High contrast or muted
- Accent color if any

LIGHT:
- Direction (side, top, back, diffused)
- Soft or hard
- Natural or studio
- Shadow type and intensity

COMPOSITION:
- Where is the focal point
- Symmetry or asymmetry
- How much negative space
- Object placement

TEXTURE:
- Smooth or grainy
- Matte or glossy
- Film effect if any

MOOD:
- What emotion does it evoke
- What brand could use this
- One word to describe it: ______

REFERENCES:
- Looks like brand: ____
- Looks like photographer: ____

OUTPUT IN 3 FORMATS:

1. DETAILED BREAKDOWN (for understanding)

2. RECIPE FOR SERIES (checklist I can copy to every new prompt):
- Color formula
- Light formula
- Composition formula
- Texture formula
- Mood keywords

3. ONE-LINE TAGS (comma-separated, English, ready to paste into prompt)
```

## Что должно получиться на выходе

- подробный разбор визуального стиля;
- формула серии, которую можно повторять в новых промптах;
- короткая строка тегов на английском для генераторов изображений.

## Как использовать в редакции

1. Загрузить референсное изображение.
2. Вставить промпт.
3. Получить разбор стиля.
4. Сохранить `RECIPE FOR SERIES`.
5. Использовать эту формулу для обложек, карточек, иллюстраций и визуальных серий.

## Human gate

Перед использованием стиля проверяем:

- не копируем ли чужой бренд слишком буквально;
- не повторяем ли узнаваемый авторский прием один в один;
- подходит ли стиль теме и редакционной задаче;
- можно ли использовать референс как источник анализа;
- не запекаем ли факты и текст в изображение, если они должны оставаться редактируемыми.

