import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './progress.style.js';

@customElement('jg-progress')
export class JGProgress extends LitElement {
    @property({ type: Number }) value = 0;
    @property({ type: Number }) max = 100;

    static styles = styles;

    render() {
        return html`
            <div class="progress">
                <div class="bar" style="width: ${(this.value / this.max) * 100}%"></div>
            </div>
        `
    }
}