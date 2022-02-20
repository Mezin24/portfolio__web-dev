const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('nav-open');
});

nav.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('nav__link')) return;

  navToggle.classList.toggle('nav-open');
});
