const accessKey = 'ai-transformation-access-v1';
const expectedHash = 'db3db02ba6e98b2417eac4661b2aaf823e485b660a9b751b3590d675953010e7';

async function hashValue(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

if (document.documentElement.dataset.protected === 'true' && sessionStorage.getItem(accessKey) !== 'granted') {
  location.replace('index.html');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('access-form');
  if (!form) return;

  if (sessionStorage.getItem(accessKey) === 'granted') {
    location.replace('portal.html');
    return;
  }

  const input = document.getElementById('access-code');
  const message = document.getElementById('access-message');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const enteredHash = await hashValue(input.value.trim());
    if (enteredHash === expectedHash) {
      sessionStorage.setItem(accessKey, 'granted');
      location.href = 'portal.html';
      return;
    }
    message.textContent = 'Код не подошёл. Проверьте цифры и попробуйте ещё раз.';
    input.value = '';
    input.focus();
  });
});
