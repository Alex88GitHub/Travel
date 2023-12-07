export const setupAudio = () => {
  const audio = document.querySelector('[data-audio]');
  const link = audio.querySelector('[data-audio-link]');

  audio.addEventListener('click', () => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://music.yandex.ru/iframe/track/112912322/25474374');
    iframe.classList.add('hero__iframe');
    iframe.style.border = 'none';
    link.remove();
    audio.appendChild(iframe);
  });

  link.removeAttribute('href');
};
