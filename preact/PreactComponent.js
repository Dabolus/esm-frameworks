import { h } from 'preact';

export const PreactComponent = props =>
  h('div', null, `Preact is ${props.mood}!`);
