import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        width: 100%;
        display: block;
    }

    .hyperselect-container {
        position: relative;
        width: 100%;
    }
    
    .control {
        position: relative;
        border: var(--component-border, 1px solid #d8dfe6);
        background-color: var(--component-bg, white);
        color: var(--component-color, inherit);
        cursor: text;
        min-height: 38px;
    }
    
    .hyperselect-container.full .control {
        cursor: not-allowed;
        background-color: #f5f5f5;
    }
    
    /* Multi-select items container */
    .items {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 4px;
        align-items: center;
    }
    
    /* Input field */
    .input {
        border: none;
        outline: none;
        padding: 8px 10px;
        width: 100%;
        font-size: 14px;
        background: transparent;
    }
    
    .multiple .input {
        flex: 1;
        min-width: 120px;
        padding: 4px 8px;
    }
    
    .single .input {
        width: 100%;
    }
    
    .input::placeholder {
        color: #999;
    }
    
    /* Dropdown */
    .dropdown {
        border: var(--component-border, 1px solid #d8dfe6);
        border-top: none;
        max-height: 250px;
        overflow-y: auto;
        background-color: var(--component-bg, white);
        color: var(--component-color, inherit);
        position: absolute;
        width: 100%;
        z-index: 1000;
        box-shadow: var(--component-shadow, 0 2px 8px rgba(0, 0, 0, 0.1));
    }
    
    /* Option */
    .option {
        padding: 10px 12px;
        cursor: pointer;
        transition: background-color 0.15s ease;
        user-select: none;
    }
    
    .option:hover {
        background-color: #f0f5ff;
    }
    
    .option.active {
        background-color: #e3f2fd;
    }
    
    .option.selected {
        background-color: #f0f5ff;
        font-weight: 500;
    }
    
    .option.create {
        background-color: #f0fdf4;
        color: #15803d;
        border-top: 1px solid #bbf7d0;
    }
    
    .option.create:hover,
    .option.create.active {
        background-color: #dcfce7;
    }
    
    /* Messages */
    .no-results, .error-message, .loading-message {
        padding: 12px;
        color: #666;
        font-style: italic;
        text-align: center;
    }
    
    .error-message {
        color: #d32f2f;
        background-color: #ffebee;
    }
    
    .loading-message {
        color: #007bff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }
    
    .loading-message::before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        border: 2px solid rgba(0, 123, 255, 0.2);
        border-top-color: #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    /* Focus states */
    .control:focus-within {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }
`
