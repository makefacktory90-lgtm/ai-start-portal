# AI Start {rule} file naming convention - 2026-05-04

Status: draft v0.2  
Source references:

- https://pos-pipelines.netlify.app/naming.html
- `/Users/irinabuyan/Downloads/naming-convention-vault-structure.md`

Purpose: keep AI Start files searchable, stable and understandable across chats, folders, GitHub and the course hub.

## 1. Principle from POS

The useful POS principle:

```text
{project} {type} description - YYYY-MM-DD.md
```

Why it works:

- project stays visible;
- file type is explicit;
- description tells what the file is for;
- date gives version / timing context;
- related files sort and search better.

We adapt the principle, not the whole vault system. This is not an Obsidian-first project. It is a Codex/GitHub/Vercel course build with markdown content and local source files.

## 2. Our adaptation

We use two naming systems, because one rule for everything is how people create beautiful nonsense.

### A. Human-facing content files

Use POS-style names for markdown content, course docs, briefs, scripts and handoff files.

Pattern:

```text
nornikel {type} specific description - YYYY-MM-DD.md
```

Examples:

```text
nornikel {rule} file naming convention - 2026-05-04.md
nornikel {pipeline} event video to text - 2026-05-04.md
nornikel {exercise} pipeline 01 A1 safe text package - 2026-05-04.md
nornikel {deck} 14 may start map - 2026-05-04.md
nornikel {handoff} current state - 2026-05-04.md
```

Maximum:

- 80-100 characters if possible;
- no more than 2 brace codes before description;
- date always at the end.

We use ASCII hyphen `-` instead of EN DASH in filenames because this project also lives in terminal, GitHub routes and app links. Да, красиво с EN DASH. Нет, не надо устраивать типографическую ловушку для shell.

### B. Code and app files

Use normal web/code naming:

```text
kebab-case.ext
```

Examples:

```text
index.html
styles.css
script.js
deck-start-map.js
pipeline-card.tsx
```

Reason:

- imports stay clean;
- GitHub/Vercel conventions stay normal;
- no weird escaping in routes;
- frontend does not suffer for content-vault aesthetics.

## 3. Allowed type tags

Use these tags inside braces for human-facing files. Start with this set. Do not add tags casually.

| Tag | Use for |
|---|---|
| `{handoff}` | project restore / current state |
| `{decision}` | strategic or product decisions |
| `{rule}` | naming, markdown, workflow or hub rules |
| `{pipeline}` | core pipeline description |
| `{prompt}` | prompt or prompt set |
| `{gate}` | quality gate / checklist |
| `{exercise}` | participant task / A1-A2-A3 practice |
| `{material}` | synthetic or client practice material |
| `{deck}` | web-deck outline / script |
| `{script}` | facilitator script / speaking notes |
| `{summary}` | post-call summary |
| `{transcript}` | call/video transcript |
| `{recording}` | recording notes / recording placeholder |
| `{feedback}` | feedback log / issue log |
| `{template}` | reusable template |
| `{index}` | table of contents / map |
| `{source}` | source-of-truth document / source map |
| `{owner}` | owner guide / role guide |
| `{calendar}` | calendar map / schedule |
| `{mechanic}` | content release / retention mechanic |

## 3.1 Project codes

Default project code:

```text
nornikel
```

Optional secondary project codes may be used only when needed:

| Code | Use for |
|---|---|
| `tv21` | files specific to TV-21 / Murmansk |
| `sevgorod` | files specific to "Северный город" / Norilsk |
| `iraai` | reusable IraAI product/design patterns |

Do not create a new project code for every block. Project codes are stable identity, not decorative stickers.

## 4. Dates

Use ISO date:

```text
YYYY-MM-DD
```

For dated program blocks, keep the real program date in the description if useful:

```text
nornikel {deck} 14 may start map - 2026-05-04.md
```

The date after hyphen is the file creation / version date, not necessarily the meeting date.

## 5. Language

Default for filenames:

- project name: `nornikel`;
- type tag: English;
- description: English transliteration / simple English;
- file content: Russian or English as needed.

Why:

- terminal search is easier;
- GitHub routes are cleaner;
- Russian text stays inside the file where it belongs.

## 5.1 YAML frontmatter

All new human-facing markdown files should include frontmatter.

Minimum:

```yaml
---
tags:
  - project/ai-start
  - type/pipeline
  - status/draft
date: 2026-05-04
status: draft
owner: Codex
---
```

Recommended full version:

```yaml
---
tags:
  - project/ai-start
  - type/exercise
  - pipeline/01
  - status/draft
date: 2026-05-04
status: draft
owner: Codex
source:
  - "nornikel {source} final hybrid program calendar map - 2026-05-04.md"
refs:
  - "02_pipelines/01_event_video_to_text/workflow.md"
---
```

Allowed tag families:

```text
project/
type/
pipeline/
meeting/
status/
topic/
audience/
```

Use 3-6 tags. More tags usually means nobody knows what the file is about.

## 6. Folder rule

Folders should remain short and stable.

We use context folders, not type folders everywhere. Type is already in filename and frontmatter.

Use:

```text
01_rules/
02_pipelines/
03_quality_gates/
04_prompt_library/
07_content_mechanics/
08_presentations/
09_practice_materials/
_templates/
```

Do not rename numbered folders every time the content changes. Folder churn is fake progress with a nice haircut.

Top-level `output/` structure:

```text
output/
  ai_start_course_site/
  ai_start_portal_v0/
  ai_start_kit/
  doc/
  _source_of_truth/
  _incoming_client_materials/
  _exports/
  _generated/
  _archive/
```

Rule:

- project-control files live in `ai_start_kit/`;
- participant/course content lives in `ai_start_portal_v0/`;
- visual prototype lives in `ai_start_course_site/`;
- client docx outputs live in `doc/`;
- canonical source docs live in `_source_of_truth/`.

## 7. Backward compatibility

Existing files do not need immediate mass renaming.

Rule:

- new human-facing files use this convention now;
- old files can stay until they block navigation;
- if we rename an old file, update all links in the same turn.

No blind mass rename. We are building a course, not running a filesystem wellness retreat.

## 7.1 What to rename first

If we do rename existing files, start with high-value project-control markdown files, not every old note.

Candidates:

```text
HANDOFF_CURRENT_STATE.md
PROJECT_DECISION_TREE.md
project_command_center_until_saturday.md
product_and_design_decisions.md
```

But only rename when:

- links can be updated in the same pass;
- new names improve navigation;
- there is no live local server / UI depending on old paths.

## 8. Markdown title rule

The H1 should repeat the useful file identity, but in human language.

Filename:

```text
nornikel {exercise} pipeline 01 A1 safe text package - 2026-05-04.md
```

H1:

```text
# Pipeline 01 A1: safe text package
```

## 8.1 Status rule

Use these statuses in frontmatter and visible file header:

```text
draft
active
testing
approved
legacy
archived
source
```

Meaning:

| Status | Meaning |
|---|---|
| `draft` | working draft, not final |
| `active` | current working source |
| `testing` | being tested in practice |
| `approved` | ready to use |
| `legacy` | old but kept for context |
| `archived` | not active, kept only for record |
| `source` | canonical source-of-truth |

Do not use `final_final`. I will complain, and I will be right.

## 9. Search examples

Find all exercises:

```text
rg --files | rg "\\{exercise\\}"
```

Find all gates:

```text
rg --files | rg "\\{gate\\}"
```

Find all files created for a date:

```text
rg --files | rg "2026-05-04"
```

## 10. AGENTS.md integration

For Codex, use `AGENTS.md` instead of `CLAUDE.md`.

Root / important folder instruction should say:

```markdown
# AI Start Rules

## Naming

For new human-facing markdown files, use:

nornikel {type} specific description - YYYY-MM-DD.md

Include YAML frontmatter:
- project/ai-start
- type/...
- status/...
- date
- owner

Code and app files use kebab-case.

## Source of truth

Build under:
output/_source_of_truth/Финальная_гибридная_программа_AI_Start_AI Start.docx
```

Current project-level instruction is saved in:

```text
output/AGENTS.md
```
