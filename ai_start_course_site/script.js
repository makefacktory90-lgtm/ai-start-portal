const modules = {
  intro: {
    crumb: "Start Map",
    code: "AI-START · 14 MAY",
    title: "AI Start: AI как рабочий слой редакции",
    subtitle: "Карта курса, рабочие маршруты, правила проверки и первый безопасный research-прогон.",
    posterKicker: "СТАРТ ПРОГРАММЫ",
    posterTitle: "материал → AI draft → human gate → hub",
    posterSubtitle: "промпты работают только вместе с задачей, форматом и проверкой",
    sideTitle: "14 мая · старт",
    sideSummary: "Роли, маршруты, human gate и общий hub.",
    lessons: [
      "Разбираем структуру курса и расписание по редакциям.",
      "Показываем пять рабочих маршрутов: текст, видео, визуал, аудио, редакционный контур.",
      "Разбираем схему: source, AI step, human gate, hub.",
      "Делаем первый безопасный research-прогон.",
      "Фиксируем домашнее задание: Codex playground до второго урока.",
      "Показываем, где будут записи, задания и материалы."
    ],
    artifacts: [
      "карта курса",
      "research prompt",
      "source map",
      "human gate",
      "домашнее задание по Codex playground"
    ],
    insights: [
      "AI-запрос начинается с источника, задачи и формата.",
      "Перед публикацией нужен human gate.",
      "Удачные промпты, outputs и проверки сохраняются в hub.",
      "Материалы с ограничениями используем только после обезличивания или замены на synthetic source."
    ],
    a1: ["Base · понять маршрут", "Открыть hub, найти 5 пайплайнов и понять, где будут записи и задания."],
    a2: ["Opti · собрать роль", "Отметить, какой пайплайн нужен вашей роли и какие проверки должны остаться личными."],
    a3: ["Advanced · общий стандарт", "Сформулировать, что из личной практики должно попасть в общий AI-hub редакции."]
  },
  text: {
    crumb: "Pipeline 01",
    code: "PIPELINE · 01",
    title: "Text OS: материал → текстовые форматы",
    subtitle: "Source Map, стиль, форматы, фактчекинг и публикационный пакет.",
    posterKicker: "15 МАЯ",
    posterTitle: "source → Source Map → ToV → Style Graph → formats",
    posterSubtitle: "workflow и starter prompt уже в hub",
    sideTitle: "Pipeline 01",
    sideSummary: "Маршрут из события, заметки, видео или расшифровки в публикационный пакет.",
    lessons: [
      "Делаем Source Map-разбор: факты, цитаты, смысл, пробелы, риски.",
      "Собираем tone of voice и style draft, если готовых правил еще нет.",
      "Готовим версии для сайта, Telegram, social, подписей и карточек.",
      "Проверяем факты, тон и редакционные риски."
    ],
    artifacts: [
      "Source Map-разбор материала",
      "tone / style draft",
      "карта форматов",
      "блок 'нужно проверить'",
      "черновик для сайта",
      "Telegram и social",
      "headline set и риски"
    ],
    insights: [
      "Факт без источника отмечается как непроверенный.",
      "Для каждого канала нужен отдельный формат задачи.",
      "Проверка фиксируется перед публикацией."
    ],
    a1: ["Base · первый пакет", "Сделать Source Map, check, site draft, Telegram, social и headline set."],
    a2: ["Opti · стиль и repurpose", "Собрать ToV / Style Graph draft и показать, как меняются форматы без потери фактов."],
    a3: ["Advanced · update workflow", "Найти повторяющуюся редакторскую правку и предложить изменение Pipeline 01 или новый skill."]
  },
  formats: {
    crumb: "Pipeline 02",
    code: "PIPELINE · 02",
    title: "Длинное видео → вертикальные клипы",
    subtitle: "Отбор фрагментов, hooks, subtitles, обложки и публикационный пакет.",
    posterKicker: "19 МАЯ",
    posterTitle: "long video → clip candidates → package",
    posterSubtitle: "transcript, candidates, hooks, subtitles, covers",
    sideTitle: "Pipeline 02",
    sideSummary: "Отбор кандидатов на клипы и проверка контекста.",
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
      "Hook не должен обещать больше, чем есть в видео.",
      "Клип проверяется на контекст, смысл и монтажную пригодность.",
      "Результат сохраняется как список кандидатов и production notes."
    ],
    a1: ["Base · выбрать клипы", "Получить 5-7 кандидатов и топ-3 с рисками."],
    a2: ["Opti · публикационный пакет", "Для топ-3 собрать hook, subtitles, cover text, description и Telegram-анонс."],
    a3: ["Advanced · video gate", "Обновить правила отбора клипов по плохим / рискованным примерам."]
  },
  visual: {
    crumb: "Pipeline 03",
    code: "PIPELINE · 03",
    title: "Материал → визуал и карточки",
    subtitle: "Visual brief, карточки, обложки, quote cards и простая инфографика.",
    posterKicker: "19 МАЯ",
    posterTitle: "meaning → cards → visual brief",
    posterSubtitle: "visual brief, cards, cover, quality gate",
    sideTitle: "Pipeline 03",
    sideSummary: "Структура визуала, факты, текстовый слой и проверка.",
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
      "Факты и текстовый слой остаются редактируемыми.",
      "AI-asset используется только как часть сборки.",
      "Визуал проверяется на точность, читаемость и смысл."
    ],
    a1: ["Base · структура карточек", "Сделать смысл, факты, 3 формата и структуру карточек."],
    a2: ["Opti · visual brief", "Собрать brief для дизайнера / Figma / Canva с ограничениями."],
    a3: ["Advanced · visual gate", "Добавить правила против нечитаемости, ложных фактов и перегруза."]
  },
  radar: {
    crumb: "Pipeline 04",
    code: "PIPELINE · 04",
    title: "Материал → аудио",
    subtitle: "Аудиоверсия, spoken script, intro hook и подкастовый фрагмент.",
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
      "Spoken script проверяется чтением вслух.",
      "Факты должны соответствовать исходному материалу.",
      "Перед выпуском проверяются ритм, произношение и точность."
    ],
    a1: ["Base · spoken script", "Сделать смысл, факты, intro и script на 60-90 секунд."],
    a2: ["Opti · голос ведущего", "Сравнить нейтральную и разговорную версии без лишних оценок."],
    a3: ["Advanced · audio workflow", "Обновить правила, если script звучит искусственно или рискованно."]
  },
  system: {
    crumb: "Pipeline 05",
    code: "PIPELINE · 05",
    title: "Редакторский контур: мониторинг, сетка, hub",
    subtitle: "Мониторинг, digest, контент-сетка, Telegram-регулярность и обновления hub.",
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
      "Мониторинг начинается со списка источников.",
      "Сигналы группируются по темам, рискам и форматам.",
      "Повторяющиеся ошибки становятся обновлениями workflow или gate."
    ],
    a1: ["Base · digest", "Из строк мониторинга получить темы, важность, идеи и source risks."],
    a2: ["Opti · content grid", "Собрать неделю по каналам и привязать каждый пункт к пайплайну."],
    a3: ["Advanced · hub update", "По evidence предложить update для context, workflow, prompt или gate."]
  },
  clinic: {
    crumb: "Retention",
    code: "AI-HUB · 30 DAYS",
    title: "Как удерживаем результат после встреч",
    subtitle: "30-дневный режим применения: материалы, примеры, owners и обновления hub.",
    posterKicker: "ПОСЛЕ ФИНАЛА",
    posterTitle: "use → save evidence → update hub",
    posterSubtitle: "летний режим применения и case clinic",
    sideTitle: "AI-hub retention",
    sideSummary: "Регулярное применение, owners, примеры и обновления.",
    lessons: [
      "Назначаем 2-3 AI-hub owners от каждой редакции.",
      "Фиксируем минимальную частоту применения.",
      "Собираем approved / rejected examples.",
      "Раз в неделю решаем: keep, revise, kill, automate later."
    ],
    artifacts: [
      "30-day adoption loop",
      "owners list",
      "список вопросов и улучшений",
      "approved examples",
      "workflow review board"
    ],
    insights: [
      "Каждую неделю сохраняется один проверенный пример.",
      "Owners поддерживают правила, примеры и обновления workflows.",
      "Автоматизация рассматривается после проверки рабочего маршрута."
    ],
    a1: ["Base · weekly use", "Один материал в неделю через пайплайн и один сохраненный output."],
    a2: ["Opti · examples", "Собрать approved / rejected examples и коротко объяснить различие."],
    a3: ["Advanced · review board", "Провести keep / revise / kill / automate later для workflows."]
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
