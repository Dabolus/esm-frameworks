import { h, app } from 'hyperapp';
import { HyperappComponent } from './HyperappComponent.js';

app({
  init: () => ({ mood: 'great' }),
  view: ({ mood }) => h(HyperappComponent, { mood }),
  node: document.querySelector('#hyperapp'),
});
