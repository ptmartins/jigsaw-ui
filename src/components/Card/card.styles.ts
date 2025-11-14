import { css } from 'lit';

export default css`
    .card {
        background-color: var(--card-bg-color);
        border: var(--card-border);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-box-shadow);
        color: var(--card-color);
        padding: 1.5rem;
        transition: box-shadow .3s ease;
    }

    ::slotted([slot="title"]) {
        color: var(--card-title-color);
    }


    .card:hover {
        box-shadow: var(--card-box-shadow-hover);
    }
`;  