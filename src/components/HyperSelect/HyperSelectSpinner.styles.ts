import { css } from 'lit';

export default css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: block;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }

    /* Loading indicator */
    .loading-indicator {
        width: 100%;
        height: 100%;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-top-color: #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
