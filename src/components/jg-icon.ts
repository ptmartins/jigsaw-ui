import { LitElement, html, css} from "lit";
import { customElement, property } from "lit/decorators.js";
import 'material-icons/iconfont/material-icons.css';

@customElement("jg-icon")
export class JGIcon extends LitElement {

    @property({ type: String }) name = '';
    @property({ type: String }) size = '1rem';

    static styles = css`
        :host {
            align-items: center;
            display: inline-flex;
            direction: ltr;
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: normal;
            justify-content: center;
            letter-spacing: normal;
            line-height: 1;
            text-transform: none;
            white-space: nowrap;
            word-wrap: normal;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
    `;

    render() {
        return html`<i style="font-size: ${this.size}; font-style: normal;">${this.name}</i>`;
    }
}