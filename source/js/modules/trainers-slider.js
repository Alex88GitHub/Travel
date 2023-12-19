export const trainersSlider = () => {
  const slider = document.querySelector('[data-slider="trainers-slider"]');
  const buttonPrev = document.querySelector('[data-slider="trainers-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="trainers-next-button"]');

  return new window.Swiper(slider, {
    loop: false,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    breakpoints: {
      350: {
        initialSlide: 3,
        slidesPerView: 1,
        spaceBetween: 0,
        noSwiping: false,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 20,
        noSwiping: false,
      },
      1200: {
        initialSlide: 1,
        slidesPerView: 4,
        spaceBetween: 20,
        noSwiping: true,
      },
    },
  });
};
