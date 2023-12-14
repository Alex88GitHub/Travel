export const toursSlider = () => {
  const slider = document.querySelector('[data-slider="tours-slider"]');
  const buttonPrev = document.querySelector('[data-slider="tours-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="tours-next-button"]');

  return new window.Swiper(slider, {
    loop: false,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 0,
        noSwiping: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        noSwiping: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        noSwiping: true,
      },
    },
  });
};
