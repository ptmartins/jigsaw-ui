import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        --progress-bar-bg-color: var(--component-bg, #e0e0e0);
        --progress-bar-color: #007bff;
        display: block;
        min-width: 200px;
        width: 100%;
    }

    .progress {
        background-color: var(--progress-bar-bg-color);
        border: var(--component-border, none);
        border-radius: 4px;
        height: 12px;
        width: 100%;
    }

    .bar {
        background-color: var(--progress-bar-color);
        border-radius: 4px;
        height: 100%;
    }
    
`;