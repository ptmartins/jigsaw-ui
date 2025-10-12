import { LitElement, html, css } from 'Lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-chip')

export class JGChip extends LitElement {

    @property({ type: String }) label = '';

    static styles = css`
        .chip {
            background-color: #e0e0e0;
            border-radius: 16px;
            color: #333;
            display: inline-block;
            padding: 6px 12px;
        }
    `;

    render() {
        return html`
            <span class="chip"> ${this.label} </span>
        `
    }
}