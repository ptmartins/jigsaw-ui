import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./card.styles.js";  

@customElement("jg-card")
export class JGCard extends LitElement {

  static styles = styles;

  // Properties for simple data binding
  @property({ type: String }) title = '';
  @property({ type: String }) thumbnail = '';
  @property({ type: String }) content = '';
  @property({ type: String }) thumbnailAlt = '';

  render() {
    return html` 
        <div class="card">
            ${this.thumbnail ? html`
              <div class="card__thumbnail">
                <img src="${this.thumbnail}" alt="${this.thumbnailAlt}" />
              </div>
            ` : ''}
            
            <div class="card__body">
              ${this.title ? html`
                <slot name="title">
                  <h3 class="card__title">${this.title}</h3>
                </slot>
              ` : html`<slot name="title"></slot>`}
              
              ${this.content ? html`
                <slot name="content">
                  <p class="card__content">${this.content}</p>
                </slot>
              ` : html`<slot name="content"></slot>`}
            </div>
        </div>  
    `;
  }
}