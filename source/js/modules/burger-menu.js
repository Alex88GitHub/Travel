const menuButtonElement = document.querySelector('[data-menu="toggle"]');
const menuButtonImage = menuButtonElement.querySelector('[data-menu="image"]');
const menuButtonUseElement = menuButtonImage.querySelector('use');
const headerElement = document.querySelector('[data-menu="header"]');
const menuNavigationElement = headerElement.querySelector('[data-menu="navigation"]');
const menuElements = menuNavigationElement.querySelectorAll('[data-menu="navigation-item"]');
const bodyElement = document.querySelector('body');

const closeMenu = () => {
  headerElement.classList.remove('header__wrapper-menu-opened');
  menuNavigationElement.classList.remove('header__navigation--opened');
  menuButtonUseElement.setAttribute('href', 'img/sprite.svg#menu-icon');
  menuElements.forEach((element) => {
    element.removeEventListener('click', closeMenu);
  });
  bodyElement.style.overflow = 'visible';
};

const openMenu = () => {
  headerElement.classList.add('header__wrapper-menu-opened');
  menuNavigationElement.classList.add('header__navigation--opened');
  menuButtonUseElement.setAttribute('href', 'img/sprite.svg#close-icon');
  menuElements.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
  bodyElement.style.overflow = 'hidden';
};

const switchMenu = () => {
  if (headerElement.classList.contains('header__wrapper-menu-opened')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onMenuButtonElementClick = () => {
  switchMenu();
};

menuButtonElement.addEventListener('click', onMenuButtonElementClick);

switchMenu();
