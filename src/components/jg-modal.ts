import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('jg-modal')

export class JGModal extends LitElement {

    @property({type: String}) title = 'Modal';
    @property({type: Boolean}) cancelBtn = false;

    static styles = css`
        :host {
            --overlay-color: rgba(0, 0, 0, .7);
            --modal-bg-color: #fff;
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
            border-radius: .5rem;
            box-shadow: 0 0 22px rgba(0, 0, 0, .8);
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
            background-color: #fff;
            border-radius: 4px;
            cursor: pointer;
            padding: .75rem;
            transition: all .2s ease;

            &:hover {
                background-color: #ccc;
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

    render() {
        return html`
            <div class="overlay">
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
                    </div>
                </div>
            </div>
        `
    }

    closeModal() {
        this.remove();
    }
}