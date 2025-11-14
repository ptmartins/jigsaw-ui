import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("jg-stack")

export class JGStack extends LitElement {

    @property({ type: String }) gap = '0';
    @property({ type: String }) direction = 'row'; // row | column

    static styles = css`
        :host {
            display: flex;
        }

        ::slotted(jg-button) {
            --btn-border-radius: 0;
        }

        :host ::slotted(*:not(:first-child)) {
            margin-inline-start: var(--gap);
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        this.style.setProperty('--gap', this.gap);
        this.style.setProperty('flex-direction', this.direction);
    }

    render() {
        return html` 
            <slot></slot> 
        `;
    }
}