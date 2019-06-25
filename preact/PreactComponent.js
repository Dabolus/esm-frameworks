import { render, h } from 'preact';

const PreactComponent = (props) => h('div', null, `Preact is ${props.mood}!`);
PreactComponent.defaultProps = {
  mood: 'great',
};

render(h(PreactComponent), document.querySelector('#preact-app'));
