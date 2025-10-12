import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-progress')

export class JGProgress extends LitElement {
    @property({ type: Number }) value = 0;
    @property({ type: Number }) max = 100;

    static styles = css`
        :host {
            --progress-bar-bg-color: #e0e0e0;
            --progress-bar-color: #007bff;
        }

        .progress {
            background-color: var(--progress-bar-bg-color);
            border-radius: 4px;
            height: 8px;
            width: 100%;
        }

        .bar {
            background-color: var(--progress-bar-color);
            border-radius: 4px;
            height: 100%;
        }
    
    `


    render() {
        return html`
            <div class="progress">
                <div class="bar" style="width: ${(this.value / this.max) * 100}%"></div>
            </div>
        `
    }
}