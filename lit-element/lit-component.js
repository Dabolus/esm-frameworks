import { LitElement, html } from 'lit-element';

class LitComponent extends LitElement {
  static properties = {
    mood: { type: String },
  };

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
      <div>
        Lit Element is <span>${this.mood}</span>!
      </div>
    `;
  }
}

customElements.define('lit-component', LitComponent)
