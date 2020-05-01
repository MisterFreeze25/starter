export const toggleBurgerMenu = _ => {
  const burgerMenu = document.querySelector('.hamburger');

  burgerMenu.addEventListener('click', _ => {
    burgerMenu.classList.toggle('is-active');
    document.body.classList.toggle('overflow-hidden');
  });
};
