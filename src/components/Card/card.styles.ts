import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: block;
    }

    .card {
        background-color: var(--card-bg-color, var(--component-bg, #f8f9fa));
        border: var(--card-border, var(--component-border, 1px solid #dee2e6));
        border-radius: var(--card-border-radius, 8px);
        box-shadow: var(--card-box-shadow, var(--component-shadow, none));
        color: var(--card-color, var(--component-color, #343a40));
        overflow: hidden;
        transition: box-shadow .3s ease;
        
        /* Debug info overlay */
        position: relative;
    }

    .card__thumbnail {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card__thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .card__body {
        padding: 1.5rem;
    }

    .card__title {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--card-title-color, inherit);
    }

    .card__content {
        margin: 0;
        line-height: 1.6;
    }
    
    .card::before {
        content: 'Component: ' var(--component-bg, 'MISS') ' | Card: ' var(--card-bg-color, 'MISS');
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