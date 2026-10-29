const formats = {
  production: 'Производственный результат',
  partnership: 'Соглашение и партнёрство',
  report: 'Результаты отчёта',
  technology: 'Технология и разработка',
  ecology: 'Общественная или экологическая программа',
  people: 'Люди, награда, событие'
};
const voices = { working: 'рабочий язык', formal: 'официальный язык', clear: 'понятный язык' };
const allowed = { line: ['production', 'technology'], annual: ['report'] };
const text = {
  line: {
    production: {
      working: ['«Северный цех» ввёл линию сортировки деталей', '15 октября 2026 года учебное предприятие ввело в эксплуатацию линию автоматической сортировки в цехе № 2. Во время испытаний через неё прошли 12 480 деталей. Результат по снижению брака пока не измерен.'],
      formal: ['Введена в эксплуатацию линия сортировки деталей', 'АО «Северный цех» сообщает о вводе в эксплуатацию 15 октября 2026 года линии автоматической сортировки в цехе № 2. В ходе испытаний обработано 12 480 деталей. Данные об изменении доли брака отсутствуют.'],
      clear: ['В Кировске запустили линию, которая проверяет детали', 'На учебном предприятии «Северный цех» заработала новая линия сортировки. Она проверяет размер, массу и внешний вид деталей, а результат подтверждает оператор. Во время испытаний линия обработала 12 480 деталей.']
    },
    technology: {
      working: ['В «Северном цехе» заработала автоматическая сортировка', 'Новая линия использует камеры и весовые датчики, чтобы распределять детали по четырём категориям. После автоматической проверки результат подтверждает оператор. Оборудование ввели в эксплуатацию 15 октября 2026 года.'],
      formal: ['«Северный цех» внедрил линию автоматической сортировки', 'Линия в цехе № 2 распределяет металлические детали по четырём категориям с применением камер и весовых датчиков. Результат автоматической проверки подтверждается оператором. Ввод в эксплуатацию состоялся 15 октября 2026 года.'],
      clear: ['Камеры и датчики помогают проверять детали в «Северном цехе»', 'Новая линия сортирует металлические детали по размеру, массе и внешнему виду. Последнее слово остаётся за оператором: он подтверждает результат проверки. Линия работает с 15 октября 2026 года.']
    }
  },
  annual: {
    report: {
      working: ['«Норникель»: ключевые производственные показатели 2025 года', 'По данным Регионального атласа компании, в 2025 году из собственного сырья произведено 198 тыс. тонн никеля, 425 тыс. тонн меди и 2 725 тыс. тройских унций палладия. Это ретроспективные данные, а не сообщение о новом событии.'],
      formal: ['Опубликованы производственные показатели Группы за 2025 год', 'В Региональном атласе «Норникеля» за 2025 год приведены следующие объёмы производства из собственного сырья: никель — 198 тыс. тонн, медь — 425 тыс. тонн, палладий — 2 725 тыс. тройских унций.'],
      clear: ['Сколько металлов произвёл «Норникель» в 2025 году', 'В открытом Региональном атласе компания указала результаты за 2025 год: 198 тыс. тонн никеля, 425 тыс. тонн меди и 2 725 тыс. тройских унций палладия. Все три показателя относятся к производству из собственного сырья.']
    }
  }
};
const state = { data: 'annual', format: 'report', voice: 'working', mode: 'base' };
const preview = document.getElementById('preview-body');
const foot = document.getElementById('preview-foot');
function render() {
  const compatible = allowed[state.data].includes(state.format);
  document.getElementById('selection').textContent = `${formats[state.format]} · ${voices[state.voice]}`;
  document.getElementById('source-detail').textContent = state.data === 'line'
    ? 'Вымышленный кейс: в Кировске 15 октября 2026 года ввели линию сортировки; за испытания проверено 12 480 деталей. Эффект снижения брака не измерен.'
    : 'Открытый Региональный атлас «Норникеля»: итоги производства за 2025 год. Это опубликованные ретроспективные данные, не новая новость.';
  if (compatible) {
    document.getElementById('draft-tag').textContent = 'УЧЕБНЫЙ ЧЕРНОВИК · НЕ ДЛЯ ПУБЛИКАЦИИ';
    const [title, body] = text[state.data][state.format][state.voice];
    document.getElementById('draft-title').textContent = title;
    document.getElementById('draft-text').textContent = body;
    foot.textContent = 'Проверяем цифры, формулировки, цитату и согласование до публикации.';
    foot.classList.remove('warning');
  } else {
    document.getElementById('draft-tag').textContent = 'ПРОВЕРКА ВХОДНЫХ ДАННЫХ';
    document.getElementById('draft-title').textContent = 'Для этого формата не хватает фактов';
    document.getElementById('draft-text').textContent = 'В выбранном массиве нет подтверждённого события для такого документа. Нужен другой источник или другой формат. Не придумываем партнёра, награду, программу или производственный результат.';
    foot.textContent = 'Хороший промпт не заменяет отсутствующие данные.';
    foot.classList.add('warning');
  }
  preview.classList.remove('flash');
  void preview.offsetWidth;
  preview.classList.add('flash');
}
document.querySelectorAll('[data-data], [data-voice], [data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.data ? 'data' : button.dataset.voice ? 'voice' : 'mode';
    state[type] = button.dataset[type];
    if (type === 'data') {
      state.format = state.data === 'annual' ? 'report' : 'production';
      document.getElementById('format-select').value = state.format;
    }
    document.querySelectorAll(`[data-${type}]`).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    if (type === 'mode') {
      document.getElementById('pro-block').hidden = state.mode !== 'pro';
      document.getElementById('mode-intro').textContent = state.mode === 'pro'
        ? 'После первого черновика можно расширить библиотеку голосов и форматов, добавить проверки, редактуру и работу с ошибками.'
        : 'Сегодня все используют уже выбранные PDF за 2025 год, рабочий голос и формат «Результаты отчёта». Переключатели нужны только для сравнения после общего результата.';
    }
    render();
  });
});
document.getElementById('format-select').addEventListener('change', event => { state.format = event.target.value; render(); });
render();
if (location.hash === '#pro-block') {
  document.querySelector('[data-mode="pro"]').click();
  requestAnimationFrame(() => document.getElementById('pro-block').scrollIntoView());
}
