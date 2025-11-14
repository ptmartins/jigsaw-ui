import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./card.styles.js";  

@customElement("jg-card")
export class JGCard extends LitElement {

  @property({ type: String }) variant = 'elevated'; // elevated | outlined

  static styles = styles;

  render() {
    return html` 
        <div class="card">
            <slot></slot>
        </div>  
    `;
  }
}