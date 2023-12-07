export const heroSlider = () => {
  const slider = document.querySelector('[data-slider="hero-slider"]');
  const pagination = slider.querySelector('[data-slider="hero-pagination"]');
  const slides = slider.querySelectorAll('[data-slider="hero-slide"]');
  const titleElement = slider.querySelectorAll('h1');
  const descriptionElement = slider.querySelectorAll('p');

  slides.forEach((element, index) => {
    if (index === 0) {
      titleElement[index].style.width = '780px';
      descriptionElement[index].style.width = '420px';
    } else
    if (index === 1) {
      titleElement[index].style.width = '810px';
      descriptionElement[index].style.width = '480px';
    } else
    if (index === 2) {
      titleElement[index].style.width = '945px';
      descriptionElement[index].style.width = '465px';
    }
  });

  return new window.Swiper(slider, {
    pagination: {
      el: pagination,
      clickable: true,
    },
    loop: true,
    allowTouchMove: 'false',
    spaceBetween: 40,
  });
};
