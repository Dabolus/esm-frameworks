import { render, h } from 'preact';
import { PreactComponent } from './PreactComponent.js';

render(
  h(PreactComponent, { mood: 'great' }),
  document.querySelector('#preact-app'),
);
