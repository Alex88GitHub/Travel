export const reviewsSlider = () => {
  const slider = document.querySelector('[data-slider="reviews-slider"]');
  const buttonPrev = document.querySelector('[data-slider="reviews-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="reviews-next-button"]');

  return new window.Swiper(slider, {
    loop: true,
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
        slidesPerView: 'auto',
        spaceBetween: 30,
        noSwiping: false,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        noSwiping: true,
      },
    },
  });
};
