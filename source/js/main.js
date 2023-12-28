import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {setupVideo} from './modules/video';
import {initSliders} from './modules/init-sliders';
import {setupAudio} from './modules/audio';
import {initJs} from './modules/init-js';
import './modules/breakpoints';
import './modules/burger-menu';
import './modules/advantages-slider';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initJs();
  setupVideo();
  setupAudio();
  initSliders();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
