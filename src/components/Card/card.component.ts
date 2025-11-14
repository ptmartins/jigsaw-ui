import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./card.styles.js";  

@customElement("jg-card")
export class JGCard extends LitElement {

  static styles = styles;

  render() {
    return html` 
        <div class="card">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>  
    `;
  }
}