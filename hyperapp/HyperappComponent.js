import { h } from 'hyperapp';

export const HyperappComponent = props =>
  h('div', {}, `Hyperapp is ${props.mood}!`);
