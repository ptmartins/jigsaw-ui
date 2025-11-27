import { css } from 'lit';

export default css`
    .input {
        border: 1px solid #d8dfe6;
        padding: 10px;
        width: 100%;
    }
    
    .input-container {
        position: relative;
        display: flex;
        align-items: center;
    }
    
    .loading-indicator {
        position: absolute;
        right: 10px;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-top-color: #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .dropdown {
        border: 1px solid #d8dfe6;
        border-top: none;
        max-height: 200px;
        overflow-y: auto;
        background-color: white;
        z-index: 100;
    }
    
    .option {
        padding: 8px 10px;
        cursor: pointer;
    }
    
    .option:hover, .option.selected {
        background-color: #f0f5ff;
    }
    
    .no-results, .error-message, .loading-message {
        padding: 10px;
        color: #666;
        font-style: italic;
    }
    
    .error-message {
        color: #d32f2f;
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
`
