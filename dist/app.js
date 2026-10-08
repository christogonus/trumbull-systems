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
 const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('body')}`;
 location.href = `mailto:info@trumbullsystems.com?subject=${encodeURIComponent('Trumbull Systems: ' + values.get('subject'))}&body=${encodeURIComponent(body)}`;
 document.querySelector('#form-status').textContent = 'Your email draft is ready to open. If your email app did not open, email info@trumbullsystems.com directly. Your message has not been sent by this website.';
});
