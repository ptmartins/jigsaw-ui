import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './avatar.styles.js';

@customElement('jg-avatar')
export class JGAvatar extends LitElement {

    @property({ type: String }) label = '';
    @property({ type: String }) thumbnail = '';
    @property({ type: String }) size = 'md'; // sm | md | lg

    static styles = styles;
    
    get className() {
        const classes = ['avatar'];
        
        if (this.size !== 'md') {
            classes.push(`avatar--${this.size}`);
        }
        
        return classes.join(' ');
    }
    
    render() {
        return html`
            ${this.thumbnail ?
                html`<img src="${this.thumbnail}" class="${this.className}" alt="Avatar">` :
                html`<span class="${this.className}">${this.label}</span>`
            }
        `;    
    }
}