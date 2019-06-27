import { h, app } from 'hyperapp';

app({
  init: () => ({ mood: 'great' }),
  view: state => h('div', {}, `Hyperapp is ${state.mood}!`),
  node: document.querySelector('#hyperapp'),
});
