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
        text: "В обычном чате: взять один источник, собрать карту источника, запустить Reverse Prompt / Voice DNA, применить De-AI-fy и Humanize, сделать два формата текста."
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
    crumb: "Pipeline 02",
    code: "PIPELINE · 02",
    title: "Длинное видео → вертикальные клипы",
    subtitle: "Длинный сюжет, эфир или транскрипт превращается в 3-5 кандидатов на короткие вертикальные клипы с хуками, субтитрами, обложками и публикационным пакетом.",
    posterKicker: "19 МАЯ",
    posterTitle: "long video → clip candidates → package",
    posterSubtitle: "нужен видео-специалист для стека, QA и live demo",
    sideTitle: "Pipeline 02",
    sideSummary: "AI помогает найти кандидаты на клипы, но финальный смысл, контекст и монтаж проверяет человек.",
    lessons: [
      "Строим карту длинного видео или транскрипта.",
      "Выбираем 5-7 потенциальных фрагментов.",
      "Собираем hook, subtitle chunks, обложку и описание.",
      "Проверяем риск потери контекста и монтажную пригодность."
    ],
    artifacts: [
      "карта видео",
      "5-7 clip candidates",
      "топ-3 для производства",
      "hooks и subtitle chunks",
      "video QA checklist"
    ],
    insights: [
      "AI не монтирует смысл за редактора. Он предлагает кандидаты.",
      "Hook не должен обещать больше, чем есть в видео.",
      "Короткий клип должен быть понятен без потери важного контекста.",
      "Видео-специалист нужен не для красоты, а для реального производственного маршрута."
    ]
  },
  visual: {
    crumb: "Pipeline 03",
    code: "PIPELINE · 03",
    title: "Материал → визуал и карточки",
    subtitle: "Материал превращается в visual brief, карточки, обложку, quote card, простую инфографику или AI-asset. Факты остаются в редактируемом шаблоне, а не в нейрокартинке.",
    posterKicker: "19 МАЯ",
    posterTitle: "meaning → cards → visual brief",
    posterSubtitle: "шаблон держит факты, AI дает образ и варианты",
    sideTitle: "Pipeline 03",
    sideSummary: "AI помогает выбрать смысл и структуру визуала, но не пишет финальные фактические карточки как картинку.",
    lessons: [
      "Выделяем главный смысл и факты, которые нельзя исказить.",
      "Выбираем формат: обложка, карточки, инфографика, quote card.",
      "Собираем структуру карточек и visual brief.",
      "Проверяем читаемость, фактологию и риск ложного визуального факта."
    ],
    artifacts: [
      "главный смысл",
      "структура карточек",
      "текст для visual format",
      "visual brief",
      "visual quality gate"
    ],
    insights: [
      "Не просим image model писать финальный текст с цифрами и цитатами.",
      "Figma или Canva держат шаблон, AI-asset может быть только частью сборки.",
      "Визуал не должен создавать ложный смысл или неподтвержденный факт.",
      "Читаемость на мобильном важнее сложности визуального приема."
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
  $("#recording-title").textContent = recording.title;
  $("#recording-summary").textContent = recording.summary;
  $("#recording-folder-link").href = recording.folderUrl;
  $("#recording-link").href = recording.recordingUrl;
  $("#recording-link").target = "_blank";
  $("#recording-link").rel = "noopener";
  $("#transcript-link").href = recording.transcriptUrl;
  $("#transcript-link").target = "_blank";
  $("#transcript-link").rel = "noopener";
  $("#summary-link").href = recording.summaryUrl;
  $("#summary-link").target = "_blank";
  $("#summary-link").rel = "noopener";
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
