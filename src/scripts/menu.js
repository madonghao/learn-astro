const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
  console.log(11);
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
});