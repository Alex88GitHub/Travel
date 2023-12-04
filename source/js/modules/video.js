export const setupVideo = () => {
  const video = document.querySelector('.hero__video');
  const link = video.querySelector('.hero__video-link');
  const button = video.querySelector('.hero__video-button');

  video.addEventListener('click', () => {
    let iframe = document.createElement('iframe');

    if (button.hasAttribute('disabled')) {
      return;
    }

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=pbxpGhyXtSEgCP7r&autoplay=1');
    iframe.classList.add('hero__iframe');
    iframe.style.border = 'none';

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.remove('hero__video--enabled');
  });

  link.removeAttribute('href');
  video.classList.add('hero__video--enabled');
};
