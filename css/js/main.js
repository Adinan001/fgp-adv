/* ========================================
   FABRÍCIO GOMES PAIXÃO — ADVOCACIA
   Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar: sombra ao scrollar ---
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile: hamburger toggle ---
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  // Fecha menu ao clicar em um link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Active link no scroll (IntersectionObserver) ---
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(section => observer.observe(section));

});
