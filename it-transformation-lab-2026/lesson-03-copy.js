document.querySelectorAll('[data-copy]').forEach(button => {
  const label = button.textContent;
  button.addEventListener('click', async () => {
    const value = document.getElementById(button.dataset.copy).textContent.trim();
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        copied = true;
      } catch {}
    }
    if (!copied) {
      const field = document.createElement('textarea');
      field.value = value;
      field.style.position = 'fixed';
      field.style.left = '-9999px';
      document.body.append(field);
      field.select();
      copied = document.execCommand('copy');
      field.remove();
    }
    button.textContent = copied ? 'Скопировано' : 'Откройте текст команды';
    setTimeout(() => { button.textContent = label; }, 1800);
  });
});
