const slider = document.querySelector('[data-slider="hero-slider"]');
const slides = slider.querySelectorAll('[data-slider="hero-slide"]');
const titleElement = slider.querySelectorAll('h1');
const descriptionElement = slider.querySelectorAll('p');

const breakpointDesktop = window.matchMedia('(min-width: 1199px)');
const upperBreakpointTablet = window.matchMedia('(max-width: 1199px)');
const lowerBreakpointTablet = window.matchMedia('(min-width: 767px)');
const breakpointMobile = window.matchMedia('(max-width: 767px)');

const breakpointDesktopChecker = () => {
  if (breakpointDesktop.matches) {
    slides.forEach((element, index) => {
      if (index === 0) {
        titleElement[index].style.width = '780px';
        descriptionElement[index].style.width = '420px';
      }
      if (index === 1) {
        titleElement[index].style.width = '810px';
        descriptionElement[index].style.width = '480px';
      }
      if (index === 2) {
        titleElement[index].style.width = '945px';
        descriptionElement[index].style.width = '465px';
      }
    });
  }
};

const breakpointTabletChecker = () => {
  if (upperBreakpointTablet.matches & lowerBreakpointTablet.matches) {
    slides.forEach((element, index) => {
      if (index === 0) {
        titleElement[index].style.width = '678px';
        descriptionElement[index].style.width = '500px';
      }
      if (index === 1) {
        titleElement[index].style.width = '586px';
        descriptionElement[index].style.width = '500px';
      }
      if (index === 2) {
        titleElement[index].style.width = '670px';
        descriptionElement[index].style.width = '500px';
      }
    });
  }
};

const breakpointMobileChecker = () => {
  if (breakpointMobile.matches) {
    slides.forEach((element, index) => {
      titleElement[index].style.width = '100%';
      descriptionElement[index].style.width = '100%';
    });
  }
};

breakpointDesktop.addEventListener('change', breakpointDesktopChecker);
upperBreakpointTablet.addEventListener('change', breakpointTabletChecker);
lowerBreakpointTablet.addEventListener('change', breakpointTabletChecker);
breakpointMobile.addEventListener('change', breakpointMobileChecker);

breakpointDesktopChecker();
breakpointTabletChecker();
breakpointMobileChecker();
