import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./button.styles.js";  

@customElement("jg-button")

export class JGButton extends LitElement {

  @property({ type: String }) action = '';            // Custom event action identifier
  @property({ type: Boolean }) disabled = false;      // true | false
  @property({ type: String }) size = 'md';            // sm | md | lg | cta
  @property({ type: String }) type = '';              // primary | danger | warning | success
  @property({ type: String }) variant = 'system';     // system | modal


  static styles = styles;

  get className() {
    const classes = ['btn'];

    if (this.type !== '') {
      classes.push(`btn--${this.type}`);
    }

    if (this.variant !== 'system') {
      classes.push(`btn--${this.variant}`);
    }

    if (this.size !== 'md') {
      classes.push(`btn--${this.size}`);
    }

    return classes.join(' '); 
  }

  handleClick(ev: Event) {
    this.dispatchEvent(new CustomEvent('button-clicked', {
      detail: { 
        action: this.action,
        originalEvent: ev
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html` 
        <button class=${this.className} ?disabled=${this.disabled} @click=${this.handleClick}>
            <slot></slot>
        </button>  
    `;
  }
}