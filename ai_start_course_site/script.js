const modules = {
  intro: {
    crumb: "Start Map",
    code: "AI-START · 14 MAY",
    title: "AI Start: AI как рабочий слой редакции",
    subtitle: "У редакции уже есть профессия, процессы и ответственность за выпуск. На старте мы показываем, где AI может взять черновой слой, а профессиональное решение остается у команды.",
    posterKicker: "СТАРТ ПРОГРАММЫ",
    posterTitle: "материал → AI draft → human gate → hub",
    posterSubtitle: "промпты работают только вместе с задачей, форматом и проверкой",
    artUrl: "./assets/ai-start-art-direction-keyframe-v1.png",
    artAlt: "AI Start editorial sci-fi command room artwork",
    artCaption: "source → AI step → gate → hub",
    sideTitle: "14 мая · старт",
    sideSummary: "Фиксируем рамку курса: роли, редакционные маршруты, human gate и общий hub.",
    recording: {
      title: "Урок 01: запись лекции",
      summary: "Запись Zoom готова. Код доступа: UZ*t#N24. Транскрипт и summary открываются отдельными ссылками.",
      folderUrl: "../ai_start_portal_v0/10_recordings/lesson-01-start/",
      recordingUrl: "https://us06web.zoom.us/rec/share/OxKsTKtVd_BbugFLNPSryL6lJeqrDM1LVsbxg7rQE45VVYPN09tyo7l0XvvbshNs.ww4OFDKpG-Rm4smJ",
      transcriptUrl: "../ai_start_portal_v0/10_recordings/lesson-01-start/transcript.md",
      summaryUrl: "../ai_start_portal_v0/10_recordings/lesson-01-start/summary.md",
      accessCode: "UZ*t#N24",
      state: "запись доступна",
      timeline: [
        { time: "00:00", label: "Старт записи, сбор участников, технические предупреждения." },
        { time: "07:00", label: "Представление Иры и рамка: AI для контента, текстов, визуала и видео." },
        { time: "08:20", label: "Цель урока: карта практикума и почему курс может показаться сложным." },
        { time: "09:00", label: "Главный принцип: AI drafts, human owns." },
        { time: "13:00", label: "Пять тем практикума: текст, видео, визуал, аудио, редакторский контур." },
        { time: "20:00", label: "Портал курса: запись, транскрипт, домашка и материалы в одном месте." },
        { time: "25:00", label: "Безопасность: зеленый, желтый и красный уровень данных." },
        { time: "30:00", label: "Research skill для редакции и выбор темы для live demo." },
        { time: "35:00", label: "Установка и адаптация skill, зачем форкать готовые решения." },
        { time: "55:00", label: "Exa как внешний поисковый источник и связка skill + Exa." },
        { time: "65:00", label: "Демонстрация результата research skill и переход к домашке." },
        { time: "66:00", label: "Домашнее задание: три уровня работы со скиллами для ресерча." },
        { time: "85:00", label: "Финальные вопросы, группа курса, ссылка на портал." }
      ]
    },
    homework: [
      {
        level: "Уровень 1 · Базовый",
        text: "Возьмите готовые research skills: deep-research-skill и skill для телестудии. Протестируйте на своей теме. Итог: сохраненный результат ресерча, который можно взять в работу."
      },
      {
        level: "Уровень 2 · ОК",
        text: "Добавьте Exa как дополнительный источник поиска, подключите Exa к агенту и используйте связку skill + Exa. Итог: ресерч с внешним поисковым источником."
      },
      {
        level: "Уровень 3 · Продвинутый",
        text: "Форкните skill и сделайте свою версию под собственные задачи, источники и формат выдачи. Итог: свой research skill, заточенный под вашу работу."
      }
    ],
    lessons: [
      "Показываем, почему одних промптов недостаточно для редакционного производства.",
      "Собираем спокойную схему: материал, AI draft, human gate, сохраненный пример.",
      "Разделяем личные настройки роли, общие правила редакции и решения компании.",
      "Показываем helicopter view пяти пайплайнов: input, AI step, human gate, output, hub artifact.",
      "Делаем zoom-in в Text OS: Source Map, ToV, Style Graph, Repurpose Boss, QA и update proposal.",
      "Показываем механику: prework, live demo, практика, запись, transcript, summary, feedback log."
    ],
    artifacts: [
      "карта роли / редакции / компании",
      "понимание пяти пайплайнов как рабочих контуров",
      "карта Text OS перед первым практическим занятием",
      "маршрут работы в hub",
      "первое правило: AI drafts, human owns"
    ],
    insights: [
      "AI полезен, когда привязан к конкретной задаче, формату и проверке.",
      "У разных ролей будут разные настройки: редактору, оператору, монтажеру, SMM и руководителю не нужен одинаковый AI.",
      "Лидеры изменений решают, какие удачные приемы становятся стандартом редакции.",
      "Удачный чат легко потерять. Hub сохраняет примеры, правила и проверки.",
      "AI Start не заменяет редакционное решение. Он делает первый проход управляемым."
    ]
  },
  text: {
    crumb: "Text OS",
    code: "LESSON · 02",
    title: "Text OS: управляемая работа с текстом",
    subtitle: "Сначала источник и задача. Затем голос, черновик, чистка, формат, гейт и обновление правил. Есть два маршрута: без агентов через prompt pack и в агенте через TV Style Graph.",
    posterKicker: "УРОК 02 · ТЕКСТ",
    posterTitle: "source map → voice → draft → de-ai-fy → format → gate",
    posterSubtitle: "лекция, prompt pack и TV Style Graph уже в hub",
    artUrl: "./assets/portal-lesson-02-robot-writing.png",
    artAlt: "Робот пишет редакционный черновик от руки",
    artCaption: "источник → голос → черновик → проверка",
    sideTitle: "Урок 02 · Text OS",
    sideSummary: "Маршрут для редакционных текстов: от карты источника до нескольких форматов и проверяемого стайл графа.",
    recording: {
      title: "Урок 02: запись лекции",
      summary: "Запись Zoom готова. Код доступа: LL7?U29?. Транскрипт, summary и домашнее задание открываются отдельными ссылками.",
      folderUrl: "../ai_start_portal_v0/10_recordings/lesson-02-text-os/",
      recordingUrl: "https://us06web.zoom.us/rec/share/TiKykudX1PX0gb4SvPyUcTyPXD8VeGfnwz3--hj3N2A_lm3_JCPCGB4elcDR59d1.R3DFLlMN2Ent7wBh",
      transcriptUrl: "../ai_start_portal_v0/10_recordings/lesson-02-text-os/transcript.md",
      summaryUrl: "../ai_start_portal_v0/10_recordings/lesson-02-text-os/summary.md",
      accessCode: "LL7?U29?",
      state: "запись доступна",
      timeline: [
        { time: "00:00", label: "Организация: портал, запись первого урока, где лежат скиллы." },
        { time: "05:00", label: "Сергей: как открыть Claude Code и зачем агенту рабочая папка." },
        { time: "18:00", label: "Теория Text OS: источник, задача, голос, черновик, чистка, формат, проверка." },
        { time: "35:00", label: "AI-тон: почему появляется пластиковый текст и как давать правки." },
        { time: "55:00", label: "Практика без агента: No-Agent Prompt Pack, Voice DNA, Reverse Prompt." },
        { time: "70:00", label: "De-AI-fy и Humanize: как диагностировать и переписывать черновик." },
        { time: "82:00", label: "Практика с агентом: установка TV Style Graph Protocol." },
        { time: "95:00", label: "Style Graph под продукт: рубрика, формат, примеры, good/bad, decision trace." },
        { time: "125:00", label: "Вопросы и домашнее задание: Base, Normal, Advanced." }
      ]
    },
    homework: [
      {
        level: "Base",
        text: "В обычном чате: взять промпт из No-Agent Prompt Pack, создать tone of voice, написать текст с новым tone of voice и почистить AI-признаки через De-AI-fy."
      },
      {
        level: "Normal",
        text: "В агенте: создать папку под конкретный продукт, положить примеры и правила, запустить TV Style Graph, написать один текст и пройти проверку перед выпуском."
      },
      {
        level: "Advanced",
        text: "Добавить Dramaturgical Text, Format Factory, Voice to Editorial Source, Source Map Prompt или Prompt to Skill под свою передачу, рубрику или авторский формат."
      }
    ],
    lessons: [
      "Разбираем, почему AI-текст часто выглядит пластиковым и какие редакционные дефекты режут глаз.",
      "Показываем, почему хороший процесс начинается с карты источника, а не с команды 'напишите текст'.",
      "Собираем базовый путь без агентов: Reverse Prompt, Source Map, De-AI-fy, Humanize, пакет форматов.",
      "Собираем агентский путь: рабочая папка, TV Style Graph, отдельные графы под передачу, рубрику или формат.",
      "Фиксируем, что AI-черновик правится как текст младшего копирайтера: конкретно, голосом, с примерами и запретами."
    ],
    artifacts: [
      "Deck 02: Text OS",
      "No-Agent Prompt Pack",
      "TV Style Graph Protocol",
      "De-AI-fy Text",
      "Humanize Dual-Pass",
      "Dramaturgical Text",
      "Format Factory",
      "Вики-страница: признаки сгенерированности текста"
    ],
    insights: [
      "AI-текст не обязан сразу быть хорошим. Это черновик, который нужно править и обучать на конкретных примерах.",
      "Один стайл граф не подходит всей редакции: отдельные передачи, рубрики и форматы требуют отдельных графов.",
      "Если факта нет в источнике, AI не имеет права уверенно его дорисовать.",
      "Система растет только тогда, когда удачные правки, запреты и примеры сохраняются в рабочей папке."
    ]
  },
  formats: {
    crumb: "Visual + Video",
    code: "LESSON · 03",
    title: "Урок 03: визуальная и видео-фабрика",
    subtitle: "Разбираем, как снимать визуальный стиль с референса, превращать длинное видео или транскрипт в карту нарезки и собирать повторяемый процесс через промпты, гайды и visual lab.",
    posterKicker: "УРОК 03 · ВИДЕО + ВИЗУАЛ",
    posterTitle: "reference → style DNA → video map → brief → gate",
    posterSubtitle: "запись, Deck 03, visual lab, промпты и гайды уже в hub",
    artUrl: "./assets/deck-03-hero-video-robot.png",
    artAlt: "Робот собирает видео и визуальные материалы курса",
    artCaption: "style DNA → video texture → production brief",
    sideTitle: "Урок 03 · Видео + визуал",
    sideSummary: "Практика по визуальному стилю, генеративным сервисам, анализу видео и повторяемым production prompts.",
    recording: {
      title: "Урок 03: запись лекции",
      summary: "Запись Zoom готова. Код доступа: Z*Vzy2p9. Презентация, домашнее задание, гайды и промпты открываются отдельными ссылками.",
      folderUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/",
      recordingUrl: "https://us06web.zoom.us/rec/share/Qwhba1JW094TSmlk51x2_cuS3tZbj5VBDO7QdWmr6hTmn4HIHyCz59s4EuDY007A.3sOAjLuHa5MEbBHL",
      transcriptUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/transcript.md",
      summaryUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/summary.md",
      accessCode: "Z*Vzy2p9",
      state: "запись доступна",
      timeline: [
        { time: "00:00", label: "Старт урока и рамка: визуал и видео как повторяемая фабрика, а не набор разовых генераций." },
        { time: "10:00", label: "Визуальный стиль: как разбирать референс через image style DNA prompt." },
        { time: "25:00", label: "Recipe for series: цвет, свет, композиция, фактура и ограничения для серии материалов." },
        { time: "40:00", label: "Visual lab и HTML-конструктор: как собрать шаблон под карточки, обложки и повторяемые форматы." },
        { time: "60:00", label: "Генеративные сервисы и Higgsfield MCP: где ручной prompt, а где агентный маршрут." },
        { time: "80:00", label: "Видео-пайплайн: длинное видео или транскрипт превращается в карту, хуки, варианты сюжета и production brief." },
        { time: "105:00", label: "Quality gate: факты, лица, цитаты, титры, права, визуальная согласованность." },
        { time: "120:00", label: "Домашнее задание: Base, Optimal, Advanced и что сохранить в hub." }
      ]
    },
    homework: [
      {
        level: "Base",
        text: "Возьмите одно изображение-референс, разберите его через prompt-image-style-dna-analysis и сохраните RECIPE FOR SERIES. Затем возьмите длинное видео или транскрипт, прогоните через prompt-video-texture-analysis и получите карту материала, 3 сюжета и production brief."
      },
      {
        level: "Optimal",
        text: "Подключите Higgsfield через MCP по гайду или повторите маршрут вручную в выбранном генераторе. Сделайте серию изображений или video assets в одном стиле и сохраните удачный prompt / настройки как workflow."
      },
      {
        level: "Advanced",
        text: "Соберите свой HTML visual constructor и агентный видео-пайплайн: файл в папку, анализ, хуки, нарезка, brief и human gate по фактам, лицам, цитатам, титрам и правам."
      }
    ],
    lessons: [
      "Разбираем визуальный стиль не на уровне 'красиво', а как набор повторяемых решений: свет, цвет, композиция, фактура, типографика, запреты.",
      "Показываем полный image style DNA prompt и как из него получить recipe for series.",
      "Открываем Deck 03 и visual lab: участник может собрать обложку, карточку или шаблон прямо в браузере.",
      "Разбираем Higgsfield MCP guide и маршрут подключения генератора к агенту.",
      "Показываем video texture prompt: видео или транскрипт превращается в карту смыслов, хуки, варианты нарезки и production brief.",
      "Фиксируем human gate для визуала и видео: факты, лица, цитаты, титры, права и редакционная ответственность."
    ],
    artifacts: [
      "Deck 03: Visual + Video Factory",
      "Visual lab / HTML visual constructor",
      "Visual constructor guide",
      "Higgsfield MCP guide",
      "Image style DNA prompt",
      "Video texture analysis prompt",
      "Video editorial pipeline guide",
      "Домашнее задание урока 03"
    ],
    insights: [
      "Визуальная генерация становится рабочей только тогда, когда у нее есть recipe, ограничения и проверка результата.",
      "Один хороший референс можно превратить в систему: style DNA, prompt set, шаблон и quality gate.",
      "Видео-пайплайн начинается не с монтажа, а с карты материала: что есть, где смысл, какие хуки не врут источнику.",
      "Сильный prompt нужно сохранять как рабочий маршрут, иначе он снова потеряется в чате."
    ]
  },
  visual: {
    crumb: "Visual Lab",
    code: "LESSON · 03 · LAB",
    title: "Visual lab: конструктор, стиль и генерация",
    subtitle: "Практический слой третьего урока: visual builder, гайды, prompts и skill-маршруты для повторяемой визуальной серии.",
    posterKicker: "УРОК 03 · VISUAL LAB",
    posterTitle: "style recipe → constructor → series → visual gate",
    posterSubtitle: "конструктор, гайды и промпты открыты",
    artUrl: "./assets/deck-04-hero-visual-robot.png",
    artAlt: "Робот собирает визуальный стиль и карточки",
    artCaption: "visual recipe → prompt → template",
    sideTitle: "Visual lab",
    sideSummary: "Открыть visual builder, снять style DNA и сохранить повторяемый визуальный маршрут.",
    recording: {
      title: "Урок 03: запись и visual lab",
      summary: "Запись Zoom готова. Код доступа: Z*Vzy2p9. Для практики откройте Deck 03, visual builder, visual constructor guide и image style DNA prompt.",
      folderUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/",
      recordingUrl: "https://us06web.zoom.us/rec/share/Qwhba1JW094TSmlk51x2_cuS3tZbj5VBDO7QdWmr6hTmn4HIHyCz59s4EuDY007A.3sOAjLuHa5MEbBHL",
      transcriptUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/transcript.md",
      summaryUrl: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/summary.md",
      accessCode: "Z*Vzy2p9",
      state: "запись доступна",
      timeline: [
        { time: "10:00", label: "Image style DNA: как снять визуальную систему с референса." },
        { time: "40:00", label: "Visual lab: конструктор карточек и обложек." },
        { time: "60:00", label: "Higgsfield MCP и подключение генератора к агентному процессу." },
        { time: "105:00", label: "Visual gate: проверка фактов, прав и визуальной согласованности." }
      ]
    },
    homework: [
      {
        level: "Base",
        text: "Разберите один референс через image style DNA prompt и сохраните recipe for series."
      },
      {
        level: "Optimal",
        text: "Соберите серию ассетов в одном стиле через visual lab или генератор и сохраните настройки."
      },
      {
        level: "Advanced",
        text: "Соберите собственный HTML visual constructor под формат вашей редакции."
      }
    ],
    lessons: [
      "Снимаем стиль с референса через полный prompt.",
      "Собираем repeatable recipe: цвета, свет, композиция, типографика, запреты.",
      "Используем visual builder для карточки, обложки или шаблона.",
      "Сохраняем удачные настройки как prompt, skill или workflow.",
      "Проверяем результат через visual quality gate."
    ],
    artifacts: [
      "Visual builder",
      "Visual constructor guide",
      "Higgsfield MCP guide",
      "Image style DNA prompt",
      "Visual quality gate"
    ],
    insights: [
      "Стиль нужно описывать так, чтобы его можно было повторить, а не просто оценить.",
      "Конструктор нужен для стабильного формата: меньше ручной возни, больше контроля.",
      "Генеративный визуал проходит те же проверки: права, лица, факты, титры и соответствие задаче."
    ]
  },
  radar: {
    crumb: "Pipeline 04",
    code: "PIPELINE · 04",
    title: "Материал → аудио",
    subtitle: "Текстовый материал превращается в аудиоверсию, 60-90 секунд spoken script, intro hook или подкастовый фрагмент. Разговорность без выдумки, пожалуйста.",
    posterKicker: "22 МАЯ",
    posterTitle: "article → spoken script → audio fragment",
    posterSubtitle: "script, intro, podcast fragment и audio QA",
    sideTitle: "Pipeline 04",
    sideSummary: "Адаптируем письменный материал в звучащий текст, не добавляя фактов ради живости.",
    lessons: [
      "Извлекаем главный смысл и обязательные факты.",
      "Пишем intro hook и spoken script на 60-90 секунд.",
      "Делаем подкастовый фрагмент с естественными переходами.",
      "Проверяем, можно ли текст нормально произнести вслух."
    ],
    artifacts: [
      "intro hook",
      "spoken script",
      "подкастовый фрагмент",
      "места для слов ведущего",
      "audio QA checklist"
    ],
    insights: [
      "Разговорный текст не должен внезапно становиться художественной прозой.",
      "Ведущий говорит живо, но факты держатся исходника.",
      "Если текст сложно произнести вслух, его нужно адаптировать под устную речь.",
      "Аудио требует отдельной проверки ритма, произношения и точности фактов."
    ]
  },
  system: {
    crumb: "Pipeline 05",
    code: "PIPELINE · 05",
    title: "Редакторский контур: мониторинг, сетка, hub",
    subtitle: "AI помогает группировать сигналы, собирать digest, контент-сетку, Telegram-регулярность, архивные идеи, tone of voice и weekly updates. Редактор решает, что важно.",
    posterKicker: "22 МАЯ + ФИНАЛЫ",
    posterTitle: "signals → digest → content grid → update",
    posterSubtitle: "контур удержания и обновления AI-hub",
    sideTitle: "Pipeline 05",
    sideSummary: "Редакторский контур связывает мониторинг, планирование, tone of voice и еженедельное улучшение hub.",
    lessons: [
      "Собираем monitoring rows и группируем темы.",
      "Отмечаем важность, риски источников и идеи материалов.",
      "Собираем content grid на неделю.",
      "Пишем weekly update proposal для AI-hub по evidence."
    ],
    artifacts: [
      "weekly digest",
      "content grid",
      "source risk notes",
      "ideas for formats",
      "AI-hub update proposal"
    ],
    insights: [
      "Мониторинг начинается со списка источников, а не с автоматизации.",
      "AI может сгруппировать сигналы, но важность определяет редакция.",
      "Один неудачный output - пример для разбора. Повторяющаяся ошибка - кандидат на обновление workflow.",
      "Изменения в общих prompts фиксируются через evidence, owner review и changelog."
    ]
  },
  clinic: {
    crumb: "Retention",
    code: "AI-HUB · 30 DAYS",
    title: "Как удерживаем результат после встреч",
    subtitle: "После финала редакции получают 30-дневный режим применения: один материал через пайплайн, один клип, одна контент-сетка, одно еженедельное обновление.",
    posterKicker: "ПОСЛЕ ФИНАЛА",
    posterTitle: "use → save evidence → update hub",
    posterSubtitle: "летний режим применения и office hours / case clinic",
    sideTitle: "AI-hub retention",
    sideSummary: "Удержание строится на маленьком повторяемом действии и owners, а не на вдохновляющей речи.",
    lessons: [
      "Назначаем 2-3 AI-hub owners от каждой редакции.",
      "Фиксируем минимальную частоту применения.",
      "Собираем approved / rejected examples.",
      "Раз в неделю решаем: keep, revise, kill, automate later."
    ],
    artifacts: [
      "30-day adoption loop",
      "owners list",
      "feedback log",
      "approved examples",
      "workflow review board"
    ],
    insights: [
      "Курс заканчивается не последним Zoom, а первым самостоятельным применением.",
      "Если примеры не сохраняются, система не учится.",
      "AI-hub owner поддерживает общие правила, примеры и обновления workflows.",
      "Автоматизировать можно позже. Сначала надо понять, что реально работает."
    ]
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const defaultRecording = {
  title: "Запись урока и таймлайн",
  summary: "Запись, транскрипт и маршрут повторения появятся после занятия.",
  folderUrl: "../ai_start_portal_v0/10_recordings/README.md",
  recordingUrl: "../ai_start_portal_v0/10_recordings/README.md",
  transcriptUrl: "../ai_start_portal_v0/10_recordings/README.md",
  summaryUrl: "../ai_start_portal_v0/10_recordings/README.md",
  accessCode: "",
  state: "после урока",
  timeline: [
    { time: "--:--", label: "Таймлайн будет собран из Zoom transcript после занятия." },
    { time: "--:--", label: "Сюда попадут ключевые демо, вопросы и точки для повторения." }
  ]
};

const defaultHomework = [
  {
    level: "Base",
    text: "Задание появится после урока: соберем его из записи, транскрипта и демонстрации."
  },
  {
    level: "Optimal",
    text: "Задание появится после урока: добавим расширенный маршрут без лишней теории."
  },
  {
    level: "Advanced",
    text: "Задание появится после урока: сюда попадет сложная версия для тех, кто готов углубляться."
  }
];

function renderList(selector, items) {
  const el = $(selector);
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function renderQuotes(items) {
  const el = $("#insight-list");
  el.innerHTML = "";
  items.forEach((item) => {
    const quote = document.createElement("div");
    quote.className = "quote";
    quote.textContent = item;
    el.appendChild(quote);
  });
}

function renderTimeline(items) {
  const el = $("#timeline-list");
  if (!el) return;
  const transcriptUrl = $("#transcript-link")?.href || "#";
  el.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("a");
    row.className = "timeline-item";
    row.href = item.url || transcriptUrl;
    row.target = "_blank";
    row.rel = "noopener";
    row.title = "Открыть тайминг и транскрипт";

    const time = document.createElement("span");
    time.textContent = item.time;

    const label = document.createElement("small");
    label.textContent = item.label;

    row.append(time, label);
    el.appendChild(row);
  });
}

function renderHomeworkInto(selector, items) {
  const el = $(selector);
  if (!el) return;
  el.innerHTML = "";
  items.forEach((item, index) => {
    const task = document.createElement("div");
    task.className = "task";

    const marker = document.createElement("span");
    marker.className = "task-marker";
    marker.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    const title = document.createElement("b");
    title.textContent = item.level;
    const text = document.createElement("small");
    text.textContent = item.text;

    copy.append(title, text);
    task.append(marker, copy);
    el.appendChild(task);
  });
}

function renderHomework(items) {
  renderHomeworkInto("#homework-list", items);
  renderHomeworkInto("#main-homework-list", items);
}

function renderRecording(recording) {
  const recordingTitle = $("#recording-title");
  const recordingSummary = $("#recording-summary");
  const recordingFolderLink = $("#recording-folder-link");
  if (!recordingTitle || !recordingSummary || !recordingFolderLink) {
    return;
  }

  recordingTitle.textContent = recording.title;
  recordingSummary.textContent = recording.summary;
  recordingFolderLink.href = recording.folderUrl;
  const quickRecordingLink = $("#quick-recording-link");
  if (quickRecordingLink) {
    quickRecordingLink.href = recording.recordingUrl;
    quickRecordingLink.target = "_blank";
    quickRecordingLink.rel = "noopener";
  }
  const heroRecordingLink = $("#hero-recording-link");
  if (heroRecordingLink) {
    heroRecordingLink.href = recording.recordingUrl;
    heroRecordingLink.target = "_blank";
    heroRecordingLink.rel = "noopener";
  }
  const heroRecordingCode = $("#hero-recording-code");
  if (heroRecordingCode) {
    heroRecordingCode.hidden = !recording.accessCode;
    heroRecordingCode.querySelector("b").textContent = recording.accessCode || "";
  }
  const recordingLink = $("#recording-link");
  if (recordingLink) {
    recordingLink.href = recording.recordingUrl;
    recordingLink.textContent = "Смотреть запись Zoom";
    recordingLink.target = "_blank";
    recordingLink.rel = "noopener";
  }
  const recordingCode = $("#recording-code");
  if (recordingCode) {
    recordingCode.hidden = !recording.accessCode;
    recordingCode.querySelector("strong").textContent = recording.accessCode || "";
  }
  const transcriptLink = $("#transcript-link");
  if (transcriptLink) {
    transcriptLink.href = recording.transcriptUrl;
    transcriptLink.target = "_blank";
    transcriptLink.rel = "noopener";
  }
  const summaryLink = $("#summary-link");
  if (summaryLink) {
    summaryLink.href = recording.summaryUrl;
    summaryLink.target = "_blank";
    summaryLink.rel = "noopener";
  }
  const timelineState = $("#timeline-state");
  if (timelineState) timelineState.textContent = recording.state;
  $$(".status-steps span").forEach((step) => {
    step.classList.toggle("current", step.textContent.trim() === recording.state);
  });

  renderTimeline(recording.timeline);
}

function setModule(id) {
  const data = modules[id];
  if (!data) return;

  $("#crumb-title").textContent = data.crumb;
  $("#module-code").textContent = data.code;
  $("#module-title").textContent = data.title;
  $("#module-subtitle").textContent = data.subtitle;
  $("#poster-kicker").textContent = data.posterKicker;
  $("#poster-title").textContent = data.posterTitle;
  $("#poster-subtitle").textContent = data.posterSubtitle;
  const moduleArt = $("#module-art");
  const moduleArtCaption = $("#module-art-caption");
  if (moduleArt) {
    moduleArt.src = data.artUrl || "./assets/ai-start-art-direction-keyframe-v1.png";
    moduleArt.alt = data.artAlt || "";
  }
  if (moduleArtCaption) {
    moduleArtCaption.textContent = data.artCaption || "source → AI step → gate → hub";
  }
  $("#side-title").textContent = data.sideTitle;
  $("#side-summary").textContent = data.sideSummary;
  renderList("#lesson-list", data.lessons);
  renderList("#artifact-list", data.artifacts);
  renderQuotes(data.insights);
  renderRecording(data.recording || defaultRecording);
  renderHomework(data.homework || defaultHomework);

  $$(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === id);
  });

  const visualCard = $("#visual-side-card");
  if (visualCard) {
    visualCard.classList.toggle("is-hidden", id !== "visual");
  }
}

$$(".nav-item").forEach((button) => {
  if (button.disabled) return;
  button.addEventListener("click", () => setModule(button.dataset.module));
});

setModule("intro");
