import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './avatar.styles.js';

@customElement('jg-avatar')

export class JGAvatar extends LitElement {

    @property({ type: String }) label = '';
    @property({ type: String }) thumbnail = '';

    static styles = styles
    
    render() {
        return html`
            ${this.thumbnail ?
                html`<img src="${this.thumbnail}" alt="Avatar">` :
                html`<span>${this.label}</span>`
            }
        `;    
    }
}