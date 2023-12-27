const slider = document.querySelector('[data-slider="advantages-slider"]');
const buttonPrev = document.querySelector('[data-slider="advantages-prev-button"]');
const buttonNext = document.querySelector('[data-slider="advantages-next-button"]');
let desktop = window.matchMedia('(min-width: 1199px)');
let advantagesSlider = 0;

export const initAdvantagesSlider = () => {
  if (desktop.matches && advantagesSlider === 0) {
    advantagesSlider = new window.Swiper(slider, {
      loop: true,
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },
      initialSlide: 1,
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  } else if (!desktop.matches && advantagesSlider) {
    advantagesSlider.destroy();
    slider.style.display = 'block';
    advantagesSlider = 0;
  }
};

const onChangeSize = () => {
  initAdvantagesSlider();
};

window.addEventListener('resize', onChangeSize);

initAdvantagesSlider();
