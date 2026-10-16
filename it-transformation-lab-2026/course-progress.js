(() => {
  const panel = document.querySelector('.course-progress');
  if (!panel) return;
  const lessons = [...document.querySelectorAll('.session-list .session')];
  const completed = lessons.filter(lesson => lesson.dataset.completed === 'true').length;
  const total = lessons.length;
  const percent = total ? completed / total * 100 : 0;
  panel.querySelector('.course-progress-count').textContent = `${completed} из ${total}`;
  panel.querySelector('.course-progress-percent').textContent = `${Math.round(percent)}%`;
  const bar = panel.querySelector('[role="progressbar"]');
  bar.setAttribute('aria-valuemax', total);
  bar.setAttribute('aria-valuenow', completed);
  bar.setAttribute('aria-valuetext', `Пройдено встреч: ${completed} из ${total}`);
  panel.style.setProperty('--progress', `${percent}%`);
  panel.querySelector('.course-progress-fill').style.height = `${percent}%`;
})();
