import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./HyperSelectSpinner.styles.js";

@customElement("iw-hyperselect-spinner")
export class HyperSelectSpinner extends LitElement {
    
    static styles = [style];

    @property({ type: String }) title = 'Loading...';

    render() {
        return html`
            <div class="loading-indicator" title="${this.title}"></div>
        `;
    }
}
