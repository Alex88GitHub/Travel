const menuButtonElement = document.querySelector('.header__navigation-toggle');
const menuButtonImage = menuButtonElement.querySelector('svg');
const menuButtonUseElement = menuButtonImage.querySelector('use');
const headerElement = document.querySelector('.header__wrapper');
const menuNavigationElement = headerElement.querySelector('.header__navigation');

const switchMenu = () => {
  headerElement.classList.toggle('header__wrapper-menu-opened');
  menuNavigationElement.classList.toggle('header__navigation--opened');
};

const setmenuButtonImage = () => {
  if (headerElement.classList.contains('header__wrapper-menu-opened')) {
    menuButtonUseElement.setAttribute('href', 'img/sprite.svg#menu-icon');
  } else {
    menuButtonUseElement.setAttribute('href', 'img/sprite.svg#close-icon');
  }
};

const onMenuButtonElementClick = () => {
  setmenuButtonImage();
  switchMenu();
};

menuButtonElement.addEventListener('click', onMenuButtonElementClick);
