(() => {
  let preference;
  try { preference = localStorage.getItem('trumbull-theme'); } catch {}
  const dark = preference ? preference === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
