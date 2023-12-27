export const gallerySlider = () => {
  const slider = document.querySelector('[data-slider="gallery-slider"]');
  const buttonPrev = document.querySelector('[data-slider="gallery-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="gallery-next-button"]');

  return new window.Swiper(slider, {
    loop: true,
    initialSlide: 0,
    slidesPerGroup: 2,
    slidesPerView: 'auto',
    noSwiping: true,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    breakpoints: {
      350: {
        spaceBetween: 3,
      },
      768: {
        spaceBetween: 5,
      },
      1200: {
        spaceBetween: 5,
      },
    },
  });
};
