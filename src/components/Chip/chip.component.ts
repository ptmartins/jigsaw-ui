import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './chip.styles.js';

@customElement('jg-chip')

export class JGChip extends LitElement {

    @property({ type: String }) label = '';

    static styles = styles;

    render() {
        return html`
            <span class="chip"> ${this.label} </span>
        `
    }
}   

