import { css } from 'lit';

export default css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: inline-flex;
    }

    /* Individual selected item (tag) */
    .item {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background-color: #e3f2fd;
        border: 1px solid #90caf9;
        border-radius: 3px;
        padding: 4px 8px;
        font-size: 13px;
        color: #1976d2;
        transition: all 0.2s ease;
    }
    
    .item.active {
        background-color: #1976d2;
        color: white;
        border-color: #1565c0;
    }
    
    .item-label {
        user-select: none;
    }
    
    .item .remove {
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s ease;
        font-weight: bold;
        padding: 0 2px;
    }
    
    .item .remove:hover {
        opacity: 1;
    }
    
    .item.active .remove {
        opacity: 1;
    }
`;
