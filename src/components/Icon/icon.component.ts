import { LitElement, html} from "lit";
import { customElement, property } from "lit/decorators.js";
import 'material-icons/iconfont/material-icons.css';
import styles from './icon.styles.js';

@customElement("jg-icon")
export class JGIcon extends LitElement {

    @property({ type: String }) name = '';
    @property({ type: String }) size = '1rem';

    static styles = styles
    render() {
        return html`<i style="font-size: ${this.size}; font-style: normal;">${this.name}</i>`;
    }
}