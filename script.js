// ===========================
// IDIOMA
// ===========================
const html = document.documentElement;
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  const actual = html.dataset.lang;
  aplicarIdioma(actual === 'en' ? 'es' : 'en');
});

function aplicarIdioma(lang) {
  html.dataset.lang = lang;
  html.lang = lang;
  localStorage.setItem('gustavo-lang', lang);
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ===========================
// NAV AL HACER SCROLL
// ===========================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===========================
// BOTÓN DE COMPARTIR
// ===========================
const shareBtn = document.getElementById('shareBtn');
const shareLabelEn = document.getElementById('shareLabelEn');
const shareLabelEs = document.getElementById('shareLabelEs');

shareBtn.addEventListener('click', async () => {
  const lang = html.dataset.lang;

  const shareData = {
    title: lang === 'en'
      ? 'Help Gustavo Fight for His Life'
      : 'Ayuda a Gustavo a Luchar por su Vida',
    text: lang === 'en'
      ? 'Gustavo Hernández, 52, is fighting for his life in Miami. Please donate or share.'
      : 'Gustavo Hernández, 52 años, lucha por su vida en Miami. Por favor dona o comparte.',
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (_) {
      // El usuario canceló — no hacer nada
    }
  } else {
    // Fallback: copiar URL al portapapeles
    try {
      await navigator.clipboard.writeText(window.location.href);
      shareLabelEn.textContent = 'Link copied!';
      shareLabelEs.textContent = 'Link copiado!';
      setTimeout(() => {
        shareLabelEn.textContent = 'Share this page';
        shareLabelEs.textContent = 'Compartir esta página';
      }, 2500);
    } catch (_) {
      // Silenciar error
    }
  }
});
