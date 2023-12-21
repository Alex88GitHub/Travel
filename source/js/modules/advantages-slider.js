// let desktop = window.matchMedia('(max-width: 1199px)');

// if (desktop.matches) {
export const advantagesSlider = () => {
  const slider = document.querySelector('[data-slider="advantages-slider"]');
  const buttonPrev = document.querySelector('[data-slider="advantages-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="advantages-next-button"]');

  return new window.Swiper(slider, {
    loop: true,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 30,
    noSwiping: true,
  });
};
// } else {
//   advantagesSlider.destroy();
// }


