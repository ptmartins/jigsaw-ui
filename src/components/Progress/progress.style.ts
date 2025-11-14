import { css } from 'lit';

export default css` 

    :host {
        --progress-bar-bg-color: #e0e0e0;
        --progress-bar-color: #007bff;
        display: block;
        min-width: 200px;
        width: 100%;
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
    
`;