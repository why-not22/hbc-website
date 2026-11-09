// Mobile menu
const btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
if (btn) {
  btn.addEventListener('click', () => { const open = menu.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
}
// Draft only: the contact form isn't connected yet
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  if (form.getAttribute('action') === '#') { e.preventDefault(); form.querySelector('.form-status').textContent = 'Draft preview: the form will send to your inbox once it is connected.'; }
});

// v18.11: Home - make the cell-image section 25% shorter than the space it would fill.
// The image keeps its proportions (never cropped or stretched).
const landing = document.querySelector('.landing');
if (landing) {
  const fit = () => {
    landing.style.height = '';
    const cellH = landing.querySelector('.cell').getBoundingClientRect().height;
    landing.style.height = (landing.getBoundingClientRect().height - 0.25 * cellH) + 'px';
  };
  window.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  fit();
}

// v18.17: YouTube videos - show a thumbnail; clicking it plays the video in place.
// YouTube refuses to play embeds on pages opened straight from a file (Error 153),
// so in local previews the click opens the video on YouTube instead.
document.querySelectorAll('.video[data-yt] a').forEach(a => {
  a.addEventListener('click', e => {
    if (!location.protocol.startsWith('http')) return;
    e.preventDefault();
    const box = a.parentElement, f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + box.dataset.yt + '?autoplay=1&rel=0';
    f.title = a.getAttribute('aria-label').replace('Play video: ', '');
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allowFullscreen = true;
    box.replaceChildren(f);
  });
});
