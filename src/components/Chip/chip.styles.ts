import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: inline-block;
    }

    .chip {
        background-color: var(--chip-bg-color, var(--component-bg, #e0e0e0));
        border: var(--chip-border, var(--component-border, none));
        border-radius: 16px;
        color: var(--chip-color, var(--component-color, #333));
        display: inline-block;
        padding: 6px 12px;
    }
`;