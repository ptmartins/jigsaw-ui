import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-avatar')

export class JGAvatar extends LitElement {

    @property({ type: String }) src = '';

    static styles = css`
        :host {
    
        }
    `;
    
    render() {


    }
}