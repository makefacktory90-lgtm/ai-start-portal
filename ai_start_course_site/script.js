const modules = {
  intro: {
    crumb: "Start Map",
    code: "AI-START · 14 MAY",
    title: "AI Start: AI как рабочий слой редакции",
    subtitle: "У редакции уже есть профессия, процессы и ответственность за выпуск. На старте мы показываем, где AI может взять черновой слой, а профессиональное решение остается у команды.",
    posterKicker: "СТАРТ ПРОГРАММЫ",
    posterTitle: "материал → AI draft → human gate → hub",
    posterSubtitle: "промпты работают только вместе с задачей, форматом и проверкой",
    sideTitle: "14 мая · старт",
    sideSummary: "Фиксируем рамку курса: роли, редакционные маршруты, human gate и общий hub.",
    recording: {
      title: "Урок 01: запись, таймлайн и материалы",
      summary: "Запись Zoom подключена. Код доступа: UZ*t#N24. В таймлайне отмечены ключевые блоки: рамка курса, безопасность, skills, Exa, домашка и вопросы.",
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
    crumb: "Pipeline 01",
    code: "PIPELINE · 01",
    title: "Text OS: материал → текстовые форматы",
    subtitle: "Один исходный материал проходит Source Map-разбор, контекст, Tone of Voice, Style Graph, Repurpose Boss и QA. На выходе не один текст, а управляемый publication package.",
    posterKicker: "15 МАЯ",
    posterTitle: "source → Source Map → ToV → Style Graph → formats",
    posterSubtitle: "workflow и starter prompt уже в hub",
    sideTitle: "Pipeline 01",
    sideSummary: "Базовый маршрут для текста: из события, заметки, видео или расшифровки в Text OS и публикационный пакет.",
    lessons: [
      "Делаем Source Map-разбор: факты, цитаты, смысл, пробелы, риски.",
      "Собираем Tone of Voice и Style Graph draft, если готовых правил еще нет.",
      "Пересобираем материал через Repurpose Boss: сайт, Telegram, social, подписи, карточки.",
      "Прогоняем output через factual, tone и editor risk gate."
    ],
    artifacts: [
      "Source Map-разбор материала",
      "ToV / Style Graph draft",
      "Repurpose Boss map",
      "блок 'нужно проверить'",
      "черновик для сайта",
      "Telegram и social",
      "headline set и риски"
    ],
    insights: [
      "Если факта нет в исходнике, AI не имеет права его уверенно дорисовать.",
      "Репаковка - это смена задачи формата, а не команда 'укороти'.",
      "Плохой output полезен, если мы сохранили evidence.",
      "Редактору нужен проверяемый черновик, а не гладкая фантазия."
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

  const videoSlot = $("#video-slot");
  videoSlot.innerHTML = "";
  if (recording.videoUrl) {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.src = recording.videoUrl;
    videoSlot.appendChild(video);
  } else {
    const link = document.createElement("a");
    link.className = "video-open-link";
    link.href = recording.recordingUrl;
    link.target = "_blank";
    link.rel = "noopener";

    const kicker = document.createElement("span");
    kicker.textContent = "ZOOM RECORDING";
    const title = document.createElement("strong");
    title.textContent = "открыть запись в zoom";
    const hint = document.createElement("em");
    hint.textContent = "в новом окне можно смотреть на весь экран";
    link.append(kicker, title, hint);
    videoSlot.appendChild(link);
    if (recording.accessCode) {
      const code = document.createElement("small");
      code.className = "access-code";
      code.textContent = `код доступа: ${recording.accessCode}`;
      videoSlot.appendChild(code);
    }
  }

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
