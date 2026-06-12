const modules = {
  intro: {
    crumb: "Старт курса",
    code: "УРОК · 01",
    title: "Урок 01: старт курса и карта программы",
    subtitle: "У редакции уже есть профессия, процессы и ответственность за выпуск. На старте мы показываем, где AI может взять черновой слой, а профессиональное решение остается у команды.",
    posterKicker: "СТАРТ ПРОГРАММЫ",
    posterTitle: "материал → AI draft → human gate → hub",
    posterSubtitle: "промпты работают только вместе с задачей, форматом и проверкой",
    artUrl: "./assets/ai-start-art-direction-keyframe-v1.png",
    artAlt: "AI Start editorial sci-fi command room artwork",
    artCaption: "source → AI step → gate → hub",
    sideTitle: "Урок 01 · Старт курса",
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
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/OxKsTKtVd_BbugFLNPSryL6lJeqrDM1LVsbxg7rQE45VVYPN09tyo7l0XvvbshNs.ww4OFDKpG-Rm4smJ", external: true },
      { label: "Презентация", href: "./decks/deck-01-start.html" },
      { label: "Транскрипт", href: "../ai_start_portal_v0/10_recordings/lesson-01-start/transcript.md" },
      { label: "Краткое резюме", href: "../ai_start_portal_v0/10_recordings/lesson-01-start/summary.md" }
    ]
  },
  text: {
    crumb: "Урок 02",
    code: "УРОК · 02",
    title: "Урок 02: управляемая работа с текстом",
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
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/TiKykudX1PX0gb4SvPyUcTyPXD8VeGfnwz3--hj3N2A_lm3_JCPCGB4elcDR59d1.R3DFLlMN2Ent7wBh", external: true },
      { label: "Презентация", href: "./decks/deck-02-text.html" },
      { label: "Транскрипт", href: "../ai_start_portal_v0/10_recordings/lesson-02-text-os/transcript.md" },
      { label: "Краткое резюме", href: "../ai_start_portal_v0/10_recordings/lesson-02-text-os/summary.md" },
      { label: "Домашнее задание", href: "./decks/deck-02-text.html#s18" }
    ]
  },
  formats: {
    crumb: "Урок 03",
    code: "УРОК · 03",
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
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/Qwhba1JW094TSmlk51x2_cuS3tZbj5VBDO7QdWmr6hTmn4HIHyCz59s4EuDY007A.3sOAjLuHa5MEbBHL", external: true },
      { label: "Презентация", href: "./decks/deck-03-video.html" },
      { label: "Визуальный конструктор", href: "./visual-builder.html" },
      { label: "Домашнее задание", href: "../ai_start_portal_v0/10_recordings/lesson-03-visual-video/summary.md" }
    ]
  },
  radar: {
    crumb: "Урок 04",
    code: "УРОК · 04",
    title: "Урок 04: аудио и редакторский контур",
    subtitle: "Запись урока, презентация, аудио-примеры и блок промптов уже открыты на портале. Модуль собран как рабочий маршрут: аудио, Suno, примеры, редакторский контур и prompt-блок.",
    posterKicker: "УРОК 04 · АУДИО + КОНТУР",
    posterTitle: "audio → examples → prompts → editorial contour",
    posterSubtitle: "запись, deck и примеры уже доступны",
    artUrl: "./assets/deck-05-hero-audio-robot.png",
    artAlt: "Робот работает с аудио и редакторскими материалами",
    artCaption: "audio → prompts → contour",
    sideTitle: "Урок 04 · открыт",
    sideSummary: "Аудио, Suno, примеры дорожек и редакторский контур уже доступны в portal и в deck.",
    recording: {
      title: "Урок 04: запись лекции",
      summary: "Запись Zoom готова. Код доступа: ?+#LG6Jx. Deck, аудио-примеры и prompt-блок уже открыты.",
      folderUrl: "./decks/deck-04-audio-editorial-contour.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/zz0mKewp3bP6veqIoLr87t-FmuWXyp9Lsmet1_xfAGSaCm3axK7StvB6IRr2ons.wS4wJ1PpFEC6QJTJ",
      transcriptUrl: "./decks/deck-04-audio-editorial-contour.html#s14",
      summaryUrl: "./decks/deck-04-audio-editorial-contour.html",
      accessCode: "?+#LG6Jx",
      state: "запись доступна",
      timeline: [
        { time: "audio", label: "Инструменты для озвучки, подкастов, музыкальной подложки и чистки звука." },
        { time: "suno", label: "Разница между базовым и профессиональным промптом, примеры и источники для обучения." },
        { time: "examples", label: "Подкастовый пример и два трека Suno для сравнения результата." },
        { time: "contour", label: "Редакторский контур: сигналы, дайджест, план выпуска и рабочее ТЗ." }
      ]
    },
    homework: [
      {
        level: "Base",
        text: "Подготовить одно аудио: текст для озвучки, промпт для подложки и короткую проверку результата."
      },
      {
        level: "Optimal",
        text: "Собрать редакторский дайджест из 8-12 материалов и на его основе подготовить план выпуска на неделю."
      },
      {
        level: "Hub",
        text: "Сложить в одно место правила, обязательные промпты, один удачный пример и одно предложение по обновлению правила."
      }
    ],
    lessons: [
      "Разбираем аудио-инструменты для озвучки, подкастов, музыкальной подложки и чистки звука.",
      "Показываем блок Suno: разница между базовым и профессиональным промптом, а также источники для обучения.",
      "Слушаем подкастовый пример и два музыкальных примера, встроенных прямо в презентацию.",
      "Переходим к редакторскому контуру: сигналы, дайджест, план выпуска и рабочее задание для команды."
    ],
    artifacts: [
      "Deck 04: аудио + редакторский контур",
      "Zoom-запись урока 04",
      "Suno prompts: базовый и профессиональный",
      "Аудио-примеры: подкаст + 2 Suno tracks"
    ],
    insights: [
      "Сохраняем удачные результаты как опорные примеры для команды и следующих запусков.",
      "Сохраняем неудачные результаты и формулировки промптов, чтобы разбирать ошибки и уточнять правила работы.",
      "Обновляем базу по итогам практики: фиксируем, что сработало, что не сработало и что требует уточнения.",
      "Сохраняем результат в общем контуре: промпты, примеры, ограничения и проверенные сценарии использования."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/zz0mKewp3bP6veqIoLr87t-FmuWXyp9Lsmet1_xfAGSaCm3axK7StvB6IRr2ons.wS4wJ1PpFEC6QJTJ", external: true },
      { label: "Презентация", href: "./decks/deck-04-audio-editorial-contour.html" },
      { label: "Аудио-примеры", href: "./decks/deck-04-audio-editorial-contour.html#s08" },
      { label: "Промпты урока", href: "./decks/deck-04-audio-editorial-contour.html#s05" },
      { label: "Домашнее задание", href: "./decks/deck-04-audio-editorial-contour.html#s21" }
    ]
  },
  system: {
    crumb: "Урок 05",
    code: "УРОК · 05",
    title: "Урок 05: AI-hub и репозитории редакции",
    subtitle: "Запись урока, презентация, гайд и домашнее задание открыты на портале. Модуль показывает, как хранить материалы, базовые промпты, рабочие промпты и обновления в управляемом репозитории.",
    posterKicker: "УРОК 05 · AI-HUB + РЕПОЗИТОРИИ",
    posterTitle: "portal → repository → prompts → update loop",
    posterSubtitle: "запись, презентация, гайд и домашнее задание доступны",
    artUrl: "./assets/deck-07-hero-hub-robot.png",
    artAlt: "Робот организует редакционный AI-hub и репозиторий",
    artCaption: "hub → storage → repository → update loop",
    sideTitle: "Урок 05 · AI-hub",
    sideSummary: "Портал, репозиторий редакции, Яндекс.Диск, GitHub, Claude и регулярное обновление рабочих промптов.",
    recording: {
      title: "Урок 05: запись лекции",
      summary: "Запись Zoom готова. Код доступа: Y!&hzAf0. Презентация, гайд и домашнее задание открываются по ссылкам этого урока.",
      folderUrl: "./decks/deck-05-ai-hub-repository-tv21.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/2zPPom3yDm10XtDRLGQXP_GgjwptkALRCe_TbhWqZpZip8g2Ctv_tSyUMu2owNdn.7VYSSSuikROgpAVZ",
      transcriptUrl: "./assets/guides/yandex-disk-claude-repository-guide.pdf",
      summaryUrl: "./decks/deck-05-ai-hub-repository-tv21.html#s07",
      accessCode: "Y!&hzAf0",
      state: "запись доступна",
      timeline: [
        { time: "portal", label: "Показываем структуру портала: уроки, записи, промпты, skills, гайды и рабочие ссылки." },
        { time: "disk", label: "Собираем репозиторий редакции на Яндекс.Диске и разделяем базовые и рабочие промпты." },
        { time: "github", label: "Показываем продвинутый вариант: репозиторий в GitHub, README, роли и правила обновления." },
        { time: "homework", label: "Фиксируем домашнее задание: Яндекс.Диск, GitHub и ежемесячный update loop через Claude." }
      ]
    },
    homework: [
      {
        level: "Base · Яндекс.Диск",
        text: "Начать работать с репозиторием редакции на Яндекс.Диске: создать структуру, разнести материалы, базовые промпты и рабочие промпты по отдельным папкам."
      },
      {
        level: "Advanced · GitHub",
        text: "Начать работать с репозиторием в GitHub: перенести структуру, оформить README, зафиксировать правила обновления и роли владельцев."
      },
      {
        level: "Update loop · Claude",
        text: "Подключить репозиторий к Claude и настроить минимум ежемесячное обновление папки рабочих промптов на основе практики редакции."
      }
    ],
    lessons: [
      "Показываем, как устроен портал: где лежат записи, презентации, промпты, гайды и рабочие ссылки.",
      "Собираем структуру хранения для редакции: источники, базовые промпты, рабочие промпты, примеры, gates и updates.",
      "Разбираем базовый вариант репозитория на Яндекс.Диске и продвинутый вариант в GitHub.",
      "Фиксируем порядок регулярного обновления рабочих промптов через Claude на основе практики редакции."
    ],
    artifacts: [
      "Deck 05: AI-hub и репозитории редакции",
      "Zoom-запись урока 05",
      "Гайд: Яндекс.Диск + Claude",
      "Домашнее задание по двум уровням репозитория",
      "Update loop для рабочих промптов"
    ],
    insights: [
      "Базовые промпты хранятся как стабильная основа курса.",
      "Рабочие промпты обновляются по результатам применения, правок редактора и повторяющихся задач.",
      "Яндекс.Диск используется как синхронизированная рабочая папка, которую можно открыть в Claude / Codex Work.",
      "GitHub подходит для продвинутого варианта, где важны версии, README, changelog и роли владельцев."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/2zPPom3yDm10XtDRLGQXP_GgjwptkALRCe_TbhWqZpZip8g2Ctv_tSyUMu2owNdn.7VYSSSuikROgpAVZ", external: true },
      { label: "Презентация", href: "./decks/deck-05-ai-hub-repository-tv21.html" },
      { label: "Домашнее задание", href: "./decks/deck-05-ai-hub-repository-tv21.html#s07" },
      { label: "Гайд PDF", href: "./assets/guides/yandex-disk-claude-repository-guide.pdf" },
      { label: "Гайд Markdown", href: "./assets/guides/yandex-disk-claude-repository-guide.md" }
    ]
  },
  clinic: {
    crumb: "Урок 06",
    code: "УРОК · 06",
    title: "Урок 06: финальная сборка AI Start Kit для Мурманска",
    subtitle: "Фиксируем порядок внедрения на 3 месяца: единые принципы постановки задачи, пилоты по отделам, ответственные, review loop и критерии результата.",
    posterKicker: "ФИНАЛЬНАЯ СБОРКА",
    posterTitle: "prompt guide → pilots → 3-month rollout",
    posterSubtitle: "финальный модуль для Мурманска: внедрение, рабочие шаблоны и review loop",
    sideTitle: "Final kit for June",
    sideSummary: "Финальная встреча закрепляет порядок внедрения и переводит практику в регулярный рабочий режим.",
    recording: {
      title: "Урок 06: финальный пакет урока",
      summary: "Презентация, summary, план выступления и методические материалы уже открыты. Ссылка на саму запись будет добавлена отдельно после выбора канала публикации.",
      folderUrl: "../ai_start_portal_v0/10_recordings/lesson-06-final-tv21/",
      recordingUrl: "../ai_start_portal_v0/10_recordings/lesson-06-final-tv21/recording_link.md",
      transcriptUrl: "../ai_start_portal_v0/10_recordings/lesson-06-final-tv21/recording_link.md",
      summaryUrl: "../ai_start_portal_v0/10_recordings/lesson-06-final-tv21/summary.md",
      accessCode: "",
      state: "материалы доступны",
      timeline: [
        { time: "prompt", label: "База по промптингу: ДНК промпта, правила усиления и форматы мышления." },
        { time: "marketing", label: "Маркетинговые сценарии: аудитория, бриф кампании, мониторинг, качество контента и страниц." },
        { time: "rollout", label: "Трехмесячный план внедрения: выбрать участок, добиться стабильности, сохранить в hub, расширить." },
        { time: "infra", label: "Проекты, разделение контекста, удаленный контур и серверные провайдеры." }
      ]
    },
    homework: [
      {
        level: "База",
        text: "Каждый отдел выбирает один повторяющийся участок работы, описывает его через ДНК промпта и фиксирует ручную проверку."
      },
      {
        level: "Пилот",
        text: "Сделать 3-5 прогонов на одном сценарии, сохранить удачный и неудачный пример, а также правку, которая усилила результат."
      },
      {
        level: "Внедрение",
        text: "Назначить ответственного за шаблон, сбор примеров и weekly review; решить, что масштабировать следующим шагом."
      }
    ],
    lessons: [
      "Фиксируем универсальную формулу промпта для маркетинга, HR, аналитики и редакции.",
      "Определяем, какие marketing pipelines полезны корпоративной команде: ICP, campaign brief, monitoring, quality gate.",
      "Собираем 3-месячный план внедрения: текстовый контур, visual/audio repurposing, review loop.",
      "Согласовываем пилотные кейсы, ответственных и критерии полезности: approved example, rejected example, доработка или исключение."
    ],
    artifacts: [
      "universal prompt guide",
      "3-month implementation plan",
      "owners list",
      "test materials list",
      "success criteria"
    ],
    insights: [
      "Промпт следует рассматривать как краткое рабочее задание, а не как самостоятельный результат.",
      "Разные проекты не должны делить продуктовые правила через общий верхний слой.",
      "Внедрение начинается с ограниченного числа пилотных кейсов, а не с максимального охвата сценариев.",
      "Автоматизацию и сложную инфраструктуру имеет смысл расширять только после первых стабильных кейсов."
    ],
    resources: [
      { label: "Презентация урока", href: "./decks/deck-10-final-kit.html" },
      { label: "Summary урока", href: "../ai_start_portal_v0/10_recordings/lesson-06-final-tv21/summary.md" },
      { label: "План выступления", href: "../ai_start_portal_v0/08_presentations/ai-start%20%7Brun-of-show%7D%20tv21%20final%20lecture%2040%20min%20-%202026-05-28.md" },
      { label: "Speaker notes", href: "../ai_start_portal_v0/08_presentations/ai-start%20%7Bspeaker-notes%7D%20deck%2010%20final%20kit%20-%202026-05-28.md" },
      { label: "Prompt guide", href: "../ai_start_portal_v0/08_presentations/ai-start%20%7Bguide%7D%20prompt%20dna%20for%20tv%20company%20-%202026-05-28.md" },
      { label: "Zoom Whiteboard guide", href: "../ai_start_portal_v0/08_presentations/ai-start%20%7Bguide%7D%20zoom%20whiteboard%20prep%20for%20final%20lecture%20-%202026-05-28.md" },
      { label: "Провайдеры серверов и удаленный контур", href: "https://iraai.ru/ai-agent-server-providers-page/", external: true }
    ]
  },
  north01: {
    crumb: "Июнь · Северный город",
    code: "SG · 01",
    title: "Северный город: hub и репозитории",
    subtitle: "Лекция от 2 июня: как хранить материалы, базовые промпты, рабочие промпты и обновления в управляемом репозитории.",
    posterKicker: "СЕВЕРНЫЙ ГОРОД · ИЮНЬ",
    posterTitle: "portal -> repository -> prompts -> update loop",
    posterSubtitle: "отдельный микро-раздел на 4 июньских занятия",
    sideTitle: "Северный город · модуль 1",
    sideSummary: "Первый июньский слот: AI-hub, репозиторий, структура материалов и порядок обновления рабочих промптов.",
    recording: {
      title: "SG-01: лекция от 2 июня · hub и репозиторий",
      summary: "Запись Zoom готова. Код доступа: F&m!A3kh. Презентация и домашнее задание открываются по ссылкам этого урока.",
      folderUrl: "./decks/deck-05-ai-hub-repository-tv21.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/l_W_ijQiG3kmRtYDMn6sdzML1WeY7m3jLONhPihyZLZZq5TVcdr5fwhZRNLvSKyr.rvDepvfn0o-jxX6f",
      transcriptUrl: "./decks/deck-05-ai-hub-repository-tv21.html",
      summaryUrl: "./decks/deck-05-ai-hub-repository-tv21.html#s07",
      accessCode: "F&m!A3kh",
      state: "запись доступна",
      timeline: [
        { time: "portal", label: "Карта портала: уроки, записи, презентации, промпты, skills, гайды и рабочие ссылки." },
        { time: "repository", label: "Структура репозитория редакции: источники, базовые промпты, рабочие промпты, gates и updates." },
        { time: "storage", label: "Базовый вариант на Яндекс.Диске и продвинутый вариант в GitHub." },
        { time: "loop", label: "Как регулярно обновлять рабочие промпты по итогам практики команды." }
      ]
    },
    homework: [
      {
        level: "Base · Яндекс.Диск",
        text: "Начать работать с репозиторием редакции на Яндекс.Диске: создать структуру, разнести материалы, базовые промпты и рабочие промпты по отдельным папкам."
      },
      {
        level: "Advanced · GitHub",
        text: "Начать работать с репозиторием в GitHub: перенести структуру, оформить README, зафиксировать правила обновления и роли владельцев."
      },
      {
        level: "Update loop · Claude",
        text: "Подключить репозиторий к Claude и настроить минимум ежемесячное обновление папки рабочих промптов на основе практики редакции."
      }
    ],
    lessons: [
      "Показываем, как устроен портал: где лежат записи, презентации, промпты, гайды и рабочие ссылки.",
      "Собираем структуру хранения для редакции: источники, базовые промпты, рабочие промпты, примеры, gates и updates.",
      "Разбираем базовый вариант репозитория на Яндекс.Диске и продвинутый вариант в GitHub.",
      "Фиксируем порядок регулярного обновления рабочих промптов через Claude на основе практики редакции."
    ],
    artifacts: [
      "Deck 05: AI-hub и репозитории редакции",
      "Zoom-запись от 2 июня",
      "Гайд: Яндекс.Диск + Claude",
      "Домашнее задание по двум уровням репозитория",
      "Update loop для рабочих промптов"
    ],
    insights: [
      "Базовые промпты хранятся как стабильная основа курса.",
      "Рабочие промпты обновляются по результатам применения, правок редактора и повторяющихся задач.",
      "Яндекс.Диск используется как синхронизированная рабочая папка, которую можно открыть в Claude / Codex Work.",
      "GitHub подходит для продвинутого варианта, где важны версии, README, changelog и роли владельцев."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/l_W_ijQiG3kmRtYDMn6sdzML1WeY7m3jLONhPihyZLZZq5TVcdr5fwhZRNLvSKyr.rvDepvfn0o-jxX6f", external: true },
      { label: "Презентация", href: "./decks/deck-05-ai-hub-repository-tv21.html" },
      { label: "Домашнее задание", href: "./decks/deck-05-ai-hub-repository-tv21.html#s07" },
      { label: "Гайд PDF", href: "./assets/guides/yandex-disk-claude-repository-guide.pdf" },
      { label: "Гайд Markdown", href: "./assets/guides/yandex-disk-claude-repository-guide.md" }
    ]
  },
  north02: {
    crumb: "Июнь · Северный город",
    code: "SG · 02",
    title: "Северный город: агентные системы для команды",
    subtitle: "Лекция от 5 июня: агентные системы, полуавтомат, автомат и human-in-the-loop маршруты для команды.",
    posterKicker: "СЕВЕРНЫЙ ГОРОД · ИЮНЬ",
    posterTitle: "agent systems -> human gate -> next steps",
    posterSubtitle: "второй июньский слот: агентные системы и практический маршрут",
    sideTitle: "Северный город · модуль 2",
    sideSummary: "Агентные системы, полуавтомат, автомат, ручная проверка и практический маршрут для команды.",
    recording: {
      title: "SG-02: лекция от 5 июня · агентные системы",
      summary: "Запись Zoom готова. Код доступа: D*rJZg9c. Домашнее задание уже встроено в презентацию лекции 07.",
      folderUrl: "./decks/deck-07-agent-systems-design.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/a1PiFm2_bUwImvioflS3pWc4tmxSaNRVxSB-gIbbhDCZ6PAIsooVxfWKO06y0k7A.c4FkQHnqasgXv9B3",
      transcriptUrl: "./decks/deck-07-agent-systems-design.html",
      summaryUrl: "./decks/deck-07-agent-systems-design.html#s13",
      accessCode: "D*rJZg9c",
      state: "запись доступна",
      timeline: [
        { time: "levels", label: "Ручной маршрут, полуавтомат и автомат: где команде полезно начинать и где нужен human gate." },
        { time: "design", label: "Как дизайнеру работать со стилем, промптами, проектом и 3-5 итерациями до устойчивой visual deck." },
        { time: "gate", label: "Что важно оставлять у человека: бренд, факты, текст, публикационное решение и финальная проверка." },
        { time: "next", label: "Что делать дальше: один пилотный участок, recipe for series, working prompts и понятный следующий шаг." }
      ]
    },
    homework: [
      {
        level: "База",
        text: "Выбрать один повторяющийся визуальный или редакционный сценарий и описать его через вход, AI-шаг, ручную проверку, выход и ограничения."
      },
      {
        level: "Пилот",
        text: "Собрать один полуавтоматный сценарий: стиль -> prompt set, материал -> visual deck, transcript -> clip candidates или article -> channel package."
      },
      {
        level: "Внедрение",
        text: "Оценить, что можно полуавтоматизировать позже, а что должно остаться у редактора по фактам, правам и публикации."
      }
    ],
    lessons: [
      "Показываем, как разложить агентную систему на понятные уровни: ручной, полуавтомат и автомат.",
      "Собираем human-in-the-loop маршрут: вход, анализ стиля или материала, AI-шаг, human check и выход.",
      "Разбираем, как сохранять working prompts, approved examples, rejected examples и quality gates.",
      "Фиксируем список сценариев, которые можно переводить в полуавтоматический режим только после накопления устойчивых примеров."
    ],
    artifacts: [
      "карта agent systems маршрута",
      "список automation candidates",
      "лекция 07 по агентным системам",
      "домашнее задание внутри презентации"
    ],
    insights: [
      "Агент полезен как рабочий слой, но не как самостоятельный владелец результата.",
      "Сначала сохраняются шаблоны, примеры и quality gates, потом обсуждается автоматизация.",
      "Полуавтомат лучше работает там, где уже есть стиль, структура и понятный human review.",
      "Домашнее задание и следующий шаг удобнее держать прямо в лекционной деке, а не в отдельном документе."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/a1PiFm2_bUwImvioflS3pWc4tmxSaNRVxSB-gIbbhDCZ6PAIsooVxfWKO06y0k7A.c4FkQHnqasgXv9B3", external: true },
      { label: "Презентация · Лекция 07", href: "./decks/deck-07-agent-systems-design.html" },
      { label: "Домашнее задание", href: "./decks/deck-07-agent-systems-design.html#s13" },
      { label: "Review pack", href: "./nornikel-review-pack.html" },
      { label: "Гайд · visual DNA prompt", href: "./assets/prompts/prompt-image-style-dna-analysis.pdf" }
    ]
  },
  north03: {
    crumb: "Июнь · Северный город",
    code: "SG · 03",
    title: "Северный город: практика применения и амбассадоры",
    subtitle: "Лекция от 9 июня: реальные материалы команды, approved и rejected examples, роли амбассадоров и weekly review.",
    posterKicker: "СЕВЕРНЫЙ ГОРОД · ИЮНЬ",
    posterTitle: "real material → review → ambassadors",
    posterSubtitle: "третий июньский слот: реальные кейсы, board примеров и амбассадоры",
    sideTitle: "Северный город · модуль 3",
    sideSummary: "Слот под практику применения: реальные материалы, board примеров и ответственные за обновление базы.",
    recording: {
      title: "SG-03: лекция от 9 июня · амбассадоры",
      summary: "Запись Zoom подключена. Лекция посвящена амбассадорам, практике применения, approved/rejected examples и weekly review.",
      folderUrl: "./decks/deck-08-ambassadors-change.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/vNPE972VgQRrCo2O0rYZDmbqWDzVgHsn8SFop9wOcRp9WKTI4uiTK1L8p8Tb7KeE.NORtRNvoswJhmnXk",
      transcriptUrl: "./decks/deck-08-ambassadors-change.html",
      summaryUrl: "./decks/deck-08-ambassadors-change.html",
      accessCode: "zS4+kYjE",
      state: "запись доступна",
      timeline: [
        { time: "cases", label: "Разбор реальных материалов команды и сохранение evidence." },
        { time: "review", label: "Approved examples, rejected examples и useful failures." },
        { time: "roles", label: "Роли амбассадоров: hub, examples, prompts и weekly review." },
        { time: "next", label: "Как удержать практику после лекции и не потерять рабочие выводы." }
      ]
    },
    lessons: [
      "Каждый участник приносит один реальный материал и показывает input, pipeline, output и gate.",
      "Группа выбирает approved example, rejected example и useful failure.",
      "Назначаются амбассадоры: hub, examples, prompts, weekly review."
    ],
    artifacts: [
      "example board",
      "ambassadors map",
      "weekly review roles"
    ],
    insights: [
      "Без носителей практики база быстро умирает.",
      "Полезен не только удачный пример, но и понятный провал с выводом."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/vNPE972VgQRrCo2O0rYZDmbqWDzVgHsn8SFop9wOcRp9WKTI4uiTK1L8p8Tb7KeE.NORtRNvoswJhmnXk", external: true },
      { label: "Презентация · Амбассадоры", href: "./decks/deck-08-ambassadors-change.html" }
    ]
  },
  north04: {
    crumb: "Июнь · Северный город",
    code: "SG · 04",
    title: "Северный город: 30-дневный контур применения",
    subtitle: "Четвертый июньский слот: weekly loop, 30-day adoption, review cadence и план, как не потерять результат после серии занятий.",
    posterKicker: "СЕВЕРНЫЙ ГОРОД · ИЮНЬ",
    posterTitle: "use → save evidence → update",
    posterSubtitle: "после занятий начинается нормальная работа, а не пустой энтузиазм",
    sideTitle: "Северный город · модуль 4",
    sideSummary: "Слот под режим применения: 1 материал в неделю, review, обновление базы и следующий пересмотр.",
    recording: {
      title: "SG-04: финальная лекция Северного города",
      summary: "Запись Zoom подключена. Это финальная лекция Северного города; для нее используется та же финальная презентация, что и для последней лекции ТВ-21.",
      folderUrl: "./decks/deck-10-final-kit.html",
      recordingUrl: "https://us06web.zoom.us/rec/share/mMh0UaX3C2325o5bbqFWp8EY4-KJW6VYpuntSIpU_yFMcqqw3neW6eKfoUq_p3Rx.MHia5-0yYqwtgvfb",
      transcriptUrl: "./decks/deck-10-final-kit.html",
      summaryUrl: "./decks/deck-10-final-kit.html",
      accessCode: "TLwg%b2=",
      state: "запись доступна",
      timeline: [
        { time: "final", label: "Финальная сборка рабочего режима после серии занятий." },
        { time: "rollout", label: "30-дневный контур применения: use, gate, save evidence, update." },
        { time: "hub", label: "Как не потерять результат после Zoom: владельцы, review cadence и обновление базы." },
        { time: "next", label: "Что считать устойчивым эффектом и когда переходить к следующему уровню." }
      ]
    },
    lessons: [
      "Собираем 30-дневный контур применения после июньской серии.",
      "Фиксируем weekly cadence: use, gate, save evidence, update.",
      "Определяем, когда пересматривать hub и что считать устойчивым эффектом."
    ],
    artifacts: [
      "30-day adoption loop",
      "review cadence",
      "next-stage roadmap"
    ],
    insights: [
      "После финального Zoom начинается внедрение, а не заканчивается программа.",
      "Если evidence не сохраняется, команда каждый раз начинает заново."
    ],
    resources: [
      { label: "Запись Zoom", href: "https://us06web.zoom.us/rec/share/mMh0UaX3C2325o5bbqFWp8EY4-KJW6VYpuntSIpU_yFMcqqw3neW6eKfoUq_p3Rx.MHia5-0yYqwtgvfb", external: true },
      { label: "Презентация", href: "./decks/deck-10-final-kit.html" }
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

  const fallbackSlots = [
    { title: "#a1-title", text: "#a1-text" },
    { title: "#a2-title", text: "#a2-text" },
    { title: "#a3-title", text: "#a3-text" }
  ];

  fallbackSlots.forEach((slot, index) => {
    const item = items[index];
    const titleEl = $(slot.title);
    const textEl = $(slot.text);
    if (!titleEl || !textEl || !item) return;
    titleEl.textContent = item.level;
    textEl.textContent = item.text;
  });
}

function renderLessonMaterials(items) {
  const el = $("#lesson-materials");
  if (!el) return;
  el.innerHTML = "";
  (items || []).forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.external) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    el.appendChild(link);
  });
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
  renderLessonMaterials(data.resources || []);

  $$(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === id);
  });

}

$$(".nav-item").forEach((button) => {
  if (button.disabled) return;
  button.addEventListener("click", () => setModule(button.dataset.module));
});

setModule("radar");
