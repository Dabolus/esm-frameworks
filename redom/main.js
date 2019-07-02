import { mount } from 'redom';
import { RedomComponent } from './RedomComponent.js';

mount(
  document.querySelector('#redom'),
  new RedomComponent(),
);
