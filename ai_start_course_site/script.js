const modules = {
  intro: {
    crumb: "Start Map",
    code: "AI-START · 14 MAY",
    title: "AI Start: OS роли, редакции и компании",
    subtitle: "Они ждут промпты. Мы собираем рабочую архитектуру: как участник берет материал, где помогает AI, где проверяет человек и как личная практика становится системой редакции.",
    posterKicker: "СТАРТ ПРОГРАММЫ",
    posterTitle: "role OS → редакция → company hub",
    posterSubtitle: "промпты будут, но без архитектуры они не живут",
    sideTitle: "14 мая · старт",
    sideSummary: "Фиксируем рамку курса: OS роли, OS редакции, OS компании и пять редакционных маршрутов.",
    lessons: [
      "Снимаем ожидание, что курс - это набор промптов.",
      "Показываем смену рабочего мышления: input, AI step, human gate, saved example.",
      "Разводим OS роли, OS редакции и OS компании.",
      "Показываем helicopter view пяти пайплайнов: input, AI step, human gate, output, hub artifact.",
      "Делаем zoom-in в Text OS: EXO, ToV, Style Graph, Repurpose Boss, QA и update proposal.",
      "Показываем механику: prework, live demo, практика, запись, transcript, summary, feedback log."
    ],
    artifacts: [
      "карта OS роли / редакции / компании",
      "понимание пяти пайплайнов как рабочих контуров",
      "карта Text OS перед первым практическим занятием",
      "маршрут работы в hub",
      "первое правило: AI drafts, human owns"
    ],
    insights: [
      "Промпт без архитектуры - это разовая подсказка, а не рабочая система.",
      "У разных ролей будут разные сборки: редактору, монтажеру, SMM и руководителю не нужен одинаковый AI.",
      "Лидеры изменений решают, что из личной практики становится стандартом редакции.",
      "Случайный чат не становится командной памятью. Для этого нужен hub.",
      "AI Start не заменяет редакционное решение. Он делает первый проход управляемым."
    ],
    a1: ["A1 · понять маршрут", "Открыть hub, найти 5 пайплайнов и понять, где будут записи и задания."],
    a2: ["A2 · собрать роль", "Отметить, какой пайплайн нужен вашей роли и какие проверки должны остаться личными."],
    a3: ["A3 · общий стандарт", "Сформулировать, что из личной практики должно попасть в общий AI-hub редакции."]
  },
  text: {
    crumb: "Pipeline 01",
    code: "PIPELINE · 01",
    title: "Text OS: материал → текстовые форматы",
    subtitle: "Один исходный материал проходит EXO-разбор, контекст, Tone of Voice, Style Graph, Repurpose Boss и QA. На выходе не один текст, а управляемый publication package.",
    posterKicker: "15 МАЯ",
    posterTitle: "source → EXO → ToV → Style Graph → formats",
    posterSubtitle: "workflow и starter prompt уже в hub",
    sideTitle: "Pipeline 01",
    sideSummary: "Базовый маршрут для текста: из события, заметки, видео или расшифровки в Text OS и публикационный пакет.",
    lessons: [
      "Делаем EXO-разбор: факты, цитаты, смысл, пробелы, риски.",
      "Собираем Tone of Voice и Style Graph draft, если готовых правил еще нет.",
      "Пересобираем материал через Repurpose Boss: сайт, Telegram, social, подписи, карточки.",
      "Прогоняем output через factual, tone и editor risk gate."
    ],
    artifacts: [
      "EXO-разбор материала",
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
    ],
    a1: ["A1 · первый пакет", "Сделать EXO, check, site draft, Telegram, social и headline set."],
    a2: ["A2 · стиль и repurpose", "Собрать ToV / Style Graph draft и показать, как меняются форматы без потери фактов."],
    a3: ["A3 · update workflow", "Найти повторяющуюся редакторскую правку и предложить изменение Pipeline 01 или новый skill."]
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
    ],
    a1: ["A1 · выбрать клипы", "Получить 5-7 кандидатов и топ-3 с рисками."],
    a2: ["A2 · публикационный пакет", "Для топ-3 собрать hook, subtitles, cover text, description и Telegram-анонс."],
    a3: ["A3 · video gate", "Обновить правила отбора клипов по плохим / рискованным примерам."]
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
    ],
    a1: ["A1 · структура карточек", "Сделать смысл, факты, 3 формата и структуру карточек."],
    a2: ["A2 · visual brief", "Собрать brief для дизайнера / Figma / Canva с ограничениями."],
    a3: ["A3 · visual gate", "Добавить правила против нечитаемости, ложных фактов и перегруза."]
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
    ],
    a1: ["A1 · spoken script", "Сделать смысл, факты, intro и script на 60-90 секунд."],
    a2: ["A2 · голос ведущего", "Сравнить нейтральную и разговорную версии без лишних оценок."],
    a3: ["A3 · audio workflow", "Обновить правила, если script звучит искусственно или рискованно."]
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
    ],
    a1: ["A1 · digest", "Из строк мониторинга получить темы, важность, идеи и source risks."],
    a2: ["A2 · content grid", "Собрать неделю по каналам и привязать каждый пункт к пайплайну."],
    a3: ["A3 · hub update", "По evidence предложить update для context, workflow, prompt или gate."]
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
    ],
    a1: ["A1 · weekly use", "Один материал в неделю через пайплайн и один сохраненный output."],
    a2: ["A2 · examples", "Собрать approved / rejected examples и коротко объяснить различие."],
    a3: ["A3 · review board", "Провести keep / revise / kill / automate later для workflows."]
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

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
  $("#a1-title").textContent = data.a1[0];
  $("#a1-text").textContent = data.a1[1];
  $("#a2-title").textContent = data.a2[0];
  $("#a2-text").textContent = data.a2[1];
  $("#a3-title").textContent = data.a3[0];
  $("#a3-text").textContent = data.a3[1];

  renderList("#lesson-list", data.lessons);
  renderList("#artifact-list", data.artifacts);
  renderQuotes(data.insights);

  $$(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === id);
  });

  $$(".check-card input").forEach((input) => {
    input.checked = false;
  });
  updateCount();
}

function updateCount() {
  const inputs = $$(".check-card input");
  const checked = inputs.filter((input) => input.checked).length;
  $("#check-count").textContent = `${checked}/${inputs.length}`;
}

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setModule(button.dataset.module));
});

$$(".check-card input").forEach((input) => {
  input.addEventListener("change", updateCount);
});

setModule("intro");
