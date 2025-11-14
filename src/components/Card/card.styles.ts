import { css } from 'lit';

export default css`
    .card {
        background-color: var(--card-bg-color, var(--bg-color-l1, #f8f9fa));
        border: var(--card-border, var(--border-l1, 1px solid #dee2e6));
        border-radius: var(--card-border-radius, 8px);
        box-shadow: var(--card-box-shadow, none);
        color: var(--card-color, var(--color-l1, #343a40));
        padding: 1.5rem;
        transition: box-shadow .3s ease;
        
        /* Debug info overlay */
        position: relative;
    }
    
    .card::before {
        content: 'L1: ' var(--bg-color-l1, 'MISS') ' | Card: ' var(--card-bg-color, 'MISS');
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 4px;
        border-radius: 3px;
        pointer-events: none;
        max-width: 200px;
        word-break: break-all;
        z-index: 10;
    }

    ::slotted([slot="title"]) {
        color: var(--card-title-color, inherit);
    }

    .card:hover {
        box-shadow: var(--card-box-shadow-hover, 0 4px 6px rgba(0, 0, 0, .1));
    }
`;  