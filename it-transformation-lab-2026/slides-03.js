const slides = [
  'Сначала ответим в опросе',
  'Комментарий к речи Сергея',
  'Сегодня делаем один черновик',
  'Архив с тремя файлами',
  'Откройте новый чат',
  'Прикрепите три файла',
  'Получите карту фактов',
  'Получите черновик релиза',
  'Проверьте и исправьте черновик',
  'Откройте исправленный текст как страницу',
  'Страница готова. Дальше вопросы'
];

const slideSrc = index => `assets/slides-03/slide-${index + 1}.png`;
let current = 0;

if (document.body.dataset.view === 'board') {
  const viewport = document.getElementById('board-viewport');
  const canvas = document.getElementById('board-canvas');
  const dialog = document.getElementById('lightbox');
  const large = document.getElementById('lightbox-image');
  let scale = 0.6;
  let x = 20;
  let y = 20;
  let drag = null;
  let moved = false;

  slides.forEach((title, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'slide-card';
    card.setAttribute('aria-label', `Открыть слайд ${index + 1}: ${title}`);
    const img = document.createElement('img');
    img.src = slideSrc(index);
    img.alt = title;
    img.draggable = false;
    const label = document.createElement('span');
    label.textContent = `${String(index + 1).padStart(2, '0')} · ${title}`;
    card.append(img, label);
    card.addEventListener('click', () => {
      if (moved) return;
      show(index);
    });
    canvas.append(card);
  });

  function draw() {
    canvas.style.transform = `translate(${x}px,${y}px) scale(${scale})`;
    document.getElementById('zoom-value').textContent = `${Math.round(scale * 100)}%`;
  }

  function zoom(factor, cx = viewport.clientWidth / 2, cy = viewport.clientHeight / 2) {
    const old = scale;
    scale = Math.max(0.15, Math.min(2.5, scale * factor));
    x = cx - (cx - x) * scale / old;
    y = cy - (cy - y) * scale / old;
    draw();
  }

  function fit() {
    scale = Math.min((viewport.clientWidth - 30) / canvas.offsetWidth, (viewport.clientHeight - 30) / canvas.offsetHeight, 1);
    x = (viewport.clientWidth - canvas.offsetWidth * scale) / 2;
    y = Math.max(15, (viewport.clientHeight - canvas.offsetHeight * scale) / 2);
    draw();
  }

  function show(index) {
    current = (index + slides.length) % slides.length;
    large.src = slideSrc(current);
    large.alt = `Слайд ${current + 1}: ${slides[current]}`;
    document.getElementById('lightbox-label').textContent = `${current + 1} / ${slides.length} · ${slides[current]}`;
    if (!dialog.open) dialog.showModal();
  }

  document.getElementById('zoom-out').addEventListener('click', () => zoom(0.8));
  document.getElementById('zoom-in').addEventListener('click', () => zoom(1.25));
  document.getElementById('fit').addEventListener('click', fit);
  document.getElementById('lightbox-prev').addEventListener('click', () => show(current - 1));
  document.getElementById('lightbox-next').addEventListener('click', () => show(current + 1));
  document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    const rect = viewport.getBoundingClientRect();
    zoom(Math.exp(-event.deltaY * 0.0015), event.clientX - rect.left, event.clientY - rect.top);
  }, {passive: false});
  viewport.addEventListener('pointerdown', event => {
    drag = {px: event.clientX, py: event.clientY, x, y};
    moved = false;
    if (!event.target.closest('.slide-card')) viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag) return;
    const dx = event.clientX - drag.px;
    const dy = event.clientY - drag.py;
    if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
    x = drag.x + dx;
    y = drag.y + dy;
    draw();
  });
  viewport.addEventListener('pointerup', () => {
    drag = null;
    viewport.classList.remove('dragging');
    setTimeout(() => { moved = false; }, 0);
  });
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  addEventListener('resize', fit);
  fit();
} else {
  const image = document.getElementById('stage-image');
  const count = document.getElementById('stage-count');

  function show(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    image.src = slideSrc(current);
    image.alt = `Слайд ${current + 1}: ${slides[current]}`;
    count.textContent = `${current + 1} / ${slides.length}`;
    document.getElementById('stage-prev').disabled = current === 0;
    document.getElementById('stage-next').disabled = current === slides.length - 1;
  }

  document.getElementById('stage-prev').addEventListener('click', () => show(current - 1));
  document.getElementById('stage-next').addEventListener('click', () => show(current + 1));
  document.getElementById('fullscreen').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.body.requestFullscreen();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight' || event.key === ' ') {
      event.preventDefault();
      show(current + 1);
    }
  });
  show(0);
}
