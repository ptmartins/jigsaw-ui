import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

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
`