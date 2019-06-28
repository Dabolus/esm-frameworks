import { el, mount } from 'redom';

export class RedomComponent {
  constructor() {
    this.data = { mood: 'great' };
    this.el = el('div', `RE:DOM is ${this.data.mood}!`);
  }

  update(data) {
    this.data = data;
    this.el.textContent = `RE:DOM is ${this.data.mood}!`;
  }
}

mount(
  document.querySelector('#redom'),
  new RedomComponent(),
);
