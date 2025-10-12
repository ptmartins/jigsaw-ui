import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-avatar')

export class JGAvatar extends LitElement {

    @property({ type: String }) label = '';
    @property({ type: String }) thumbnail = '';

    static styles = css`
        :host {
            align-items: center;
            background-color: #bcbcbc;
            border-radius: 50%;
            display: flex;
            font-weight: 600;
            height: 48px;
            justify-content: center;
            overflow: hidden;
            width: 48px;
        }

        img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    `;
    
    render() {
        return html`
            ${this.thumbnail ?
                html`<img src="${this.thumbnail}" alt="Avatar">` :
                html`<span>${this.label}</span>`
            }
        `;    
    }
}