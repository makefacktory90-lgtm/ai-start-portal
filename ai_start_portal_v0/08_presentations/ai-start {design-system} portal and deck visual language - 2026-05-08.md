---
tags:
  - project/ai-start
  - type/design-system
  - status/active
date: 2026-05-08
status: active
owner: Ira + Codex
refs:
  - "../../../ai_start_course_site/index.html"
  - "../../../ai_start_course_site/decks/deck-01-start.html"
---

# AI Start visual language

## Role

Единый стиль для портала, web-decks и рабочих материалов AI Start.

Визуальная идея v2:

```text
adult editorial sci-fi command room
European sci-fi linework + cinematic industrial production design
weathered robot as production assistant, not mascot
red editorial markup inside technical interfaces
paper / graphite / concrete / glass / tension
```

Ключевой арт-референс:

```text
ai_start_course_site/assets/ai-start-art-direction-keyframe-v1.png
```

Правила v2:

- рисуем мир, а не "робота в карточке";
- больше архитектуры, воздуха, напряжения, технических интерфейсов;
- робот не милый и не детский, а рабочий production assistant;
- допустимы пыльный металл, бетон, стекло, дальняя редакция, стол-монтажка, красные редакторские пометки;
- hero должен оставлять место под крупную типографику;
- запрещено: Murzilka / детский журнал / toy robot / glossy 3D / псевдотекст как главный объект.

Не делаем:

- generic corporate SaaS;
- серые карточки ради карточек;
- пластиковые AI-gradient;
- абстрактные 3D-шары;
- декоративные SVG-заглушки вместо нормального арта.

## Fonts

```css
--sans: "Inter", "Helvetica Neue", system-ui, sans-serif;
--mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--hand: "Caveat", "Comic Sans MS", cursive;
```

Usage:

- `Inter`: крупные заголовки, основной UI, плотные редакционные утверждения.
- `JetBrains Mono`: navigation, labels, pipeline names, gates, prompts, technical layer.
- `Caveat`: красные рукописные ремарки, human/editorial voice, не больше 1-2 элементов на экран.

## Colors

```css
--bg: #f6f1e7;        /* paper */
--panel: #fffdf8;     /* warm white */
--soft: #ece3d4;      /* muted paper */
--line: #d7cbbb;      /* paper rule */
--text: #171513;      /* ink */
--deep: #080706;      /* black ink */
--muted: #7f7669;     /* muted ink */
--accent: #f42a2a;    /* editorial red */
--yellow: #f1b33d;    /* sticker yellow */
--green: #6fbf8a;     /* safe/data green */
```

Usage:

- dominant: paper + ink;
- accent: red for editorial correction, warnings, active state;
- yellow only for stickers / route tags / emphasis chips;
- green only for data-safety states, not decoration.

## Shape grammar

- Main panels: 2-3px black stroke, 18-24px radius, hard black shadow.
- Pills: rounded, 2px black stroke, optional red/yellow shadow.
- Cards are allowed for repeated objects, not for every section.
- Avoid nested cards.
- Lines should feel like editorial rules or comic panel borders.

## Image grammar

Primary image style:

- raster AI-generated or curated artwork;
- beige paper texture;
- black linework;
- red markup;
- no fake logos;
- no important text baked into image;
- generous negative space for HTML typography.

Current hero asset:

```text
ai_start_course_site/assets/deck-01-hero-ai-workflow-v2.png
```

Generation model used:

```text
Higgsfield / nano_banana_2
```

Prompt summary:

```text
High-end keynote hero artwork for an AI Start editorial workshop, no text.
Clever awkward robot co-pilot inside a newsroom command center / knowledge portal,
layered documents, red editorial correction marks, workflow nodes,
Moebius-inspired European sci-fi line art, beige paper, black/warm gray, vivid red accents.
```

## Copy voice

Voice:

- direct;
- slightly nerdy;
- professional;
- no inflated AI evangelism;
- no "AI will replace everyone";
- no "100 prompts" framing.

Canonical phrases:

```text
AI drafts. Human owns.
Не промпт ради промпта, а маршрут.
Source → AI step → gate → hub.
Промпт — это упаковка метода.
Нейротекст видно не по факту AI, а по пустой гладкости.
```

## Deck/portal alignment

Deck 01 and portal must share:

- same font imports;
- same tokens;
- same hero-art family;
- same red markup language;
- same black stroke / hard shadow;
- same route vocabulary: source, AI step, human gate, hub.

Deck 02 should inherit this system and add the text-specific layer:

```text
source → EXO → Style Graph → Repurpose → QA → hub update
```
