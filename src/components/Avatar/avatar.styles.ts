import { css } from 'lit';

export default css`
    :host {
        align-items: center;
        background-color: #bcbcbc;
        border-radius: 50%;
        display: flex;
        font-weight: 600;
        height: 48px;
        justify-content: center;
        overflow: hidden;
        width: 48px;
    }

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;