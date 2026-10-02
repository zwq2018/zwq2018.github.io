(() => {
  const root = document.documentElement;
  const button = document.querySelector('.language-switch');
  const setLanguage = language => {
    const zh = language === 'zh';
    root.dataset.language = zh ? 'zh' : 'en';
    root.lang = zh ? 'zh-CN' : 'en';
    button.textContent = zh ? 'EN ↗' : '中文 ↗';
    button.setAttribute('aria-label', zh ? 'Switch to English' : '切换为中文');
    document.title = zh ? '张文祺 · 具身智能与自主智能体' : 'Wenqi Zhang · Embodied Intelligence & AI Agents';
  };
  try { setLanguage(localStorage.getItem('wenqi-language') || 'en'); } catch (_) { setLanguage('en'); }
  button.hidden = false;
  button.addEventListener('click', () => {
    const language = root.dataset.language === 'en' ? 'zh' : 'en';
    setLanguage(language);
    try { localStorage.setItem('wenqi-language', language); } catch (_) { /* Preferences are optional. */ }
  });
  const loadVideo = video => {
    if (video.preload !== 'none') return;
    video.preload = 'metadata';
    video.load();
  };
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    const fallback = video.parentElement.querySelector('.video-fallback');
    const showFallback = () => { if (fallback) fallback.hidden = false; };
    video.addEventListener('error', showFallback);
    const source = video.querySelector('source');
    if (source) source.addEventListener('error', showFallback);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { loadVideo(entry.target); observer.unobserve(entry.target); } });
    }, { rootMargin: '250px' });
    videos.forEach(video => observer.observe(video));
  } else { videos.forEach(loadVideo); }
})();
