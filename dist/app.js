const themeButton = document.querySelector('#theme-toggle');
const media = matchMedia('(prefers-color-scheme: dark)');
const syncTheme = () => themeButton.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
themeButton.hidden = false;
syncTheme();
themeButton.addEventListener('click', () => {
 const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
 document.documentElement.dataset.theme = next;
 try { localStorage.setItem('trumbull-theme', next); } catch {}
 syncTheme();
});
media.addEventListener('change', event => {
 let stored; try { stored = localStorage.getItem('trumbull-theme'); } catch {}
 if (!stored) { document.documentElement.dataset.theme = event.matches ? 'dark' : 'light'; syncTheme(); }
});
const menuButton = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.hidden = false;
mobileNav.hidden = true;
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
 const open = menuButton.getAttribute('aria-expanded') !== 'true';
 mobileNav.hidden = !open; menuButton.setAttribute('aria-expanded', String(open));
});
mobileNav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
matchMedia('(min-width: 768px)').addEventListener('change', () => closeMenu());
document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => { document.querySelector('#subject').value = link.dataset.topic; }));
document.querySelector('#contact-form')?.addEventListener('submit', event => {
 event.preventDefault();
 const form = event.currentTarget;
 if (!form.reportValidity()) return;
 const values = new FormData(form);
 const status = document.querySelector('#form-status');
 if (!values.get('h-captcha-response')) { status.textContent = 'Complete the security check before sending.'; return; }
 const button = form.querySelector('button[type="submit"]'); button.disabled = true; button.setAttribute('aria-disabled','true'); status.textContent = 'Sending your message…';
 fetch(form.action, {method:'POST', body:values, headers:{Accept:'application/json'}}).then(async response => {
  const result = await response.json().catch(()=>({}));
  if (!response.ok || !result.ok) throw new Error(result.message || 'The message could not be sent.');
  form.reset(); if (window.hcaptcha) window.hcaptcha.reset(); status.textContent = 'Your message was sent. We will reply from the appropriate Trumbull Systems address.';
 }).catch(error => { status.textContent = error.message + ' You can email info@trumbullsystems.com directly.'; }).finally(() => { button.disabled = false; button.removeAttribute('aria-disabled'); });
});
