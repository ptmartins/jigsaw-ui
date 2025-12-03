import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-modal')

export class JGModal extends LitElement {

    @property({type: String}) title = 'Modal';
    @property({type: Boolean}) cancelBtn = false;
    @property({type: String}) confirmBtnText = 'Confirm';
    @property({type: Boolean}) confirmBtn = false;
    @property({type: String}) killBtnText = 'Delete';
    @property({type: Boolean}) killBtn = false;

    static styles = css`
        :host,
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :host {
            --overlay-color: rgba(0, 0, 0, .7);
            --modal-bg-color: var(--component-bg, #fff);
        }

        .overlay {
            background-color: var(--overlay-color);
            display: grid;
            height: 100%;
            inset-block-start: 0;
            inset-inline-start: 0;
            place-items: center;
            position: absolute;
            width: 100%;
        }

        .modal {
            background-color: var(--modal-bg-color);
            border: var(--component-border, none);
            border-radius: .5rem;
            box-shadow: var(--component-shadow, 0 0 22px rgba(0, 0, 0, .8));
            color: var(--component-color, inherit);
            padding: 1.5rem;
            max-width: 640px;
            width: 80%;
        }

        .modal__header {
            align-items: center;
            display: flex;
            font-size: 1.125rem;
            font-weight: 700;
            justify-content: space-between;
        }

        .modal__header jg-icon {
            background-color: var(--interactive-bg, #fff);
            border-radius: 4px;
            cursor: pointer;
            padding: .75rem;
            transition: all .2s ease;

            &:hover {
                background-color: var(--interactive-bg-hover, #ccc);
            }
        }

        .modal__footer {
            display: flex;
            flex-direction: row-reverse;
        }

        .btn {
            border: 1px solid #dadada; 
            border-radius: 4px;
            cursor: pointer;
            padding: .75rem 1.125rem;
            transition: all .2s ease;

            &:hover {
                background-color: #bababa;
            }
        }
    `

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('keydown', this.handleEscape);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('keydown', this.handleEscape);
    }

    private handleEscape = (ev: KeyboardEvent) => {
        if(ev.key === 'Escape') {
            this.closeModal();
        }
    }

    private handleOverlayClick = (ev: MouseEvent) => {
        if(ev.target === ev.currentTarget) {
            this.closeModal();
        }
    }

    render() {
        return html`
            <div class="overlay" @click=${this.handleOverlayClick}>
                <div class="modal">
                    <div class="modal__header">
                        ${this.title}
                        <jg-icon name="close" size="1.3rem" @click=${this.closeModal}></jg-icon>
                    </div>
                    <div class="modal__body">
                        <slot></slot>
                    </div>
                    <div class="modal__footer"> 
                        ${this.cancelBtn ? html`<button class="btn btn--cancel" @click=${this.closeModal}> Cancel </button>`: ''}
                        ${this.confirmBtn ? html`<button class="btn btn--confirm" @click=${this.handleConfirm}>${this.confirmBtnText}</button>`: ''}
                        ${this.killBtn ? html`<button class="btn btn--confirm" @click=${this.handlekill}>${this.killBtnText}</button>`: ''}
                    </div>
                </div>
            </div>
        `
    }

    closeModal() {
        this.remove();
    }
}