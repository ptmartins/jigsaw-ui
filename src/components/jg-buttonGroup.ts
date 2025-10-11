import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("jg-buttongroup")

export class JGButtonGroup extends LitElement {

    static styles = css`
        :host {
            display: flex;
            gap: 0;
        }

        ::slotted(jg-button) {
            --btn-border-radius: 0;
        }
    `;

    render() {
        return html` 
            <slot></slot> 
        `;
    }
}