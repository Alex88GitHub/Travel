export const heroSlider = () => {
  const slider = document.querySelector('[data-slider="hero-slider"]');
  const pagination = slider.querySelector('[data-slider="hero-pagination"]');

  return new window.Swiper(slider, {
    pagination: {
      el: pagination,
      clickable: true,
    },
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      350: {
        noSwiping: false,
      },
      1200: {
        noSwiping: true,
      },
    },
  });
};
