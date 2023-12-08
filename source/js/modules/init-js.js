export const initJs = () => {
  const headerElement = document.querySelector('.header__wrapper');
  const navigation = headerElement.querySelector('.header__navigation');

  if (window.matchMedia('(min-width: 1199px)')) {
    headerElement.classList.remove('header__wrapper-menu-opened');
    navigation.classList.remove('header__navigation--opened');
    navigation.classList.remove('header__navigation-no-js');
  }
};
