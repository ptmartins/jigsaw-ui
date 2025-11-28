import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./HyperSelectTag.styles.js";

@customElement("iw-hyperselect-tag")
export class HyperSelectTag extends LitElement {
    
    static styles = [style];

    @property({ type: String }) label = '';
    @property({ type: String }) value = '';
    @property({ type: Boolean }) active = false;

    /**
     * Handles remove button click
     * @private
     */
    private handleRemove(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('remove', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <div class="item ${this.active ? 'active' : ''}" data-value="${this.value}">
                <span class="item-label">${this.label}</span>
                <span class="remove" 
                      @click="${this.handleRemove}"
                      title="Remove">
                    ×
                </span>
            </div>
        `;
    }
}
