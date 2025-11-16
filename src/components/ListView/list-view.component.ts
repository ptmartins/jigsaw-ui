import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./list-view.styles.js";

@customElement("jg-list-view")
export class JGListView extends LitElement {

  static styles = styles;

  @property({ type: String }) thumbnail = '';
  @property({ type: String }) thumbnailAlt = '';
  @property({ type: String }) header = '';
  @property({ type: String }) content = '';
  @property({ type: Boolean }) clickable = false;

  private handleClick() {
    if (this.clickable) {
      this.dispatchEvent(new CustomEvent('listItem-click', {
        detail: { component: this },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html` 
      <div 
        class="list-view ${this.clickable ? 'list-view--clickable' : ''}"
        @click=${this.handleClick}
      >
        <!-- Thumbnail zone -->
        <div class="list-view__thumbnail">
          ${this.thumbnail ? html`
            <img src="${this.thumbnail}" alt="${this.thumbnailAlt}" />
          ` : html`
            <slot name="thumbnail"></slot>
          `}
        </div>
        
        <!-- Content zone -->
        <div class="list-view__content">
          <div class="list-view__header">
            ${this.header ? html`
              <slot name="header">
                <span class="list-view__header-text">${this.header}</span>
              </slot>
            ` : html`<slot name="header"></slot>`}
          </div>
          
          <div class="list-view__body">
            ${this.content ? html`
              <slot name="content">
                <span class="list-view__content-text">${this.content}</span>
              </slot>
            ` : html`<slot name="content"></slot>`}
          </div>
        </div>
        
        <!-- Actions zone -->
        <div class="list-view__actions">
          <slot name="actions"></slot>
        </div>
      </div>  
    `;
  }
}