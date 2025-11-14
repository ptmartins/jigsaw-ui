import { css } from 'lit';

export default css`

    :host {
        --card-bg-color: var(--bg-color-l1);
        --card-color: var(--color-l1);
        --card-border: var(--border-l1);
        --card-border-radius: 8px;
        --card-box-shadow: none;

        --card-box-shadow-hover: 0 4px 6px rgba(0, 0, 0, .1);
    }


    .card {
        background-color: var(--card-bg-color);
        border: var(--card-border);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-box-shadow);
        color: var(--card-color);
        padding: 1.5rem;
        transition: box-shadow .3s ease;
    }

    .card:hover {
        box-shadow: var(--card-box-shadow-hover);
    }
`;  