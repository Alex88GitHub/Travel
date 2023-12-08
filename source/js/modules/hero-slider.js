export const heroSlider = () => {
  const slider = document.querySelector('[data-slider="hero-slider"]');
  const pagination = slider.querySelector('[data-slider="hero-pagination"]');
  // const slides = slider.querySelectorAll('[data-slider="hero-slide"]');
  // const titleElement = slider.querySelectorAll('h1');
  // const descriptionElement = slider.querySelectorAll('p');

  // slides.forEach((element, index) => {
  //   if (index === 0) {
  //     if (window.matchMedia('(max-width: 1199px)')) {
  //       titleElement[index].style.width = '780px';
  //       descriptionElement[index].style.width = '420px';
  //     } else
  //     if (window.matchMedia('(min-width: 1199px)') & window.matchMedia('(max-width: 767px)')) {
  //       titleElement[index].style.width = '678px';
  //       descriptionElement[index].style.width = '500px';
  //     } else
  //     if (window.matchMedia('(min-width: 767px)')) {
  //       titleElement[index].style.width = '332px';
  //       descriptionElement[index].style.width = '332px';
  //     }
  //   }

  //   if (index === 1) {
  //     if (window.matchMedia('(max-width: 1199px)')) {
  //       titleElement[index].style.width = '810px';
  //       descriptionElement[index].style.width = '480px';
  //     } else
  //     if (window.matchMedia('(min-width: 1199px)') & window.matchMedia('(max-width: 767px)')) {
  //       titleElement[index].style.width = '586px';
  //       descriptionElement[index].style.width = '500px';
  //     } else
  //     if (window.matchMedia('(min-width: 767px)')) {
  //       titleElement[index].style.width = '332px';
  //       descriptionElement[index].style.width = '332px';
  //     }
  //   }

  //   if (index === 2) {
  //     if (window.matchMedia('(max-width: 1199px)')) {
  //       titleElement[index].style.width = '945px';
  //       descriptionElement[index].style.width = '465px';
  //     } else
  //     if (window.matchMedia('(min-width: 1199px)') & window.matchMedia('(max-width: 767px)')) {
  //       titleElement[index].style.width = '670px';
  //       descriptionElement[index].style.width = '500px';
  //     } else
  //     if (window.matchMedia('(min-width: 767px)')) {
  //       titleElement[index].style.width = '332px';
  //       descriptionElement[index].style.width = '332px';
  //     }
  //   }
  // });

  // slides.forEach((element, index) => {
  //   if (index === 0) {
  //     titleElement[index].style.width = '780px';
  //     descriptionElement[index].style.width = '420px';
  //   } else
  //   if (index === 1) {
  //     titleElement[index].style.width = '810px';
  //     descriptionElement[index].style.width = '480px';
  //   } else
  //   if (index === 2) {
  //     titleElement[index].style.width = '945px';
  //     descriptionElement[index].style.width = '465px';
  //   }
  // });

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
