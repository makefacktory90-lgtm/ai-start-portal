const accessKey = 'ai-transformation-access-v1';
const returnKey = 'ai-transformation-return-v1';
const expectedHash = 'db3db02ba6e98b2417eac4661b2aaf823e485b660a9b751b3590d675953010e7';

async function hashValue(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

if (document.documentElement.dataset.protected === 'true' && sessionStorage.getItem(accessKey) !== 'granted') {
  sessionStorage.setItem(returnKey, location.pathname.split('/').pop() + location.search + location.hash);
  location.replace('index.html');
}

function returnAfterLogin() {
  const saved = sessionStorage.getItem(returnKey);
  sessionStorage.removeItem(returnKey);
  const page = saved?.split(/[?#]/, 1)[0];
  return page && page !== 'index.html' && /^[a-z0-9-]+\.html$/.test(page)
    ? saved
    : 'portal.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('access-form');
  if (!form) return;

  if (sessionStorage.getItem(accessKey) === 'granted') {
    location.replace(returnAfterLogin());
    return;
  }

  const input = document.getElementById('access-code');
  const message = document.getElementById('access-message');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const enteredHash = await hashValue(input.value.trim());
    if (enteredHash === expectedHash) {
      sessionStorage.setItem(accessKey, 'granted');
      location.replace(returnAfterLogin());
      return;
    }
    message.textContent = 'Код не подошёл. Проверьте цифры и попробуйте ещё раз.';
    input.value = '';
    input.focus();
  });
});
