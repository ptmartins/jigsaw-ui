import { css } from 'lit';

export default css`
    .btn {
        align-items: center; 
        background-color: var(--btn-bg-color);
        border: var(--btn-border);
        border-radius: var(--btn-border-radius);
        color: var(--btn-color);
        cursor: pointer;
        display: inline-flex;
        font-size: var(--btn-font-size);
        gap: .5rem;
        justify-content: center;
        line-height: 1.5;
        min-width: 80px;
        padding: var(--btn-padding-y) var(--btn-padding-x);
        transition: all .3s ease;

        &:hover {
            background-color: var(--btn-bg-color-hover);
        }
    }

    .btn:disabled {
        opacity: .4;
        pointer-events: none;
    }

    .btn--primary {
        background-color: var(--btn-primary-bg-color);
        color: var(--btn-primary-color);

        &:hover {
            background-color: var(--btn-primary-bg-color-hover);
        }
    }

    .btn--danger {
        background-color: var(--btn-danger-bg-color);
        color: var(--btn-danger-color);

        &:hover {
            background-color: var(--btn-danger-bg-color-hover);
        }
    }

    .btn--warning {
        background-color: var(--btn-warning-bg-color);
        color: var(--btn-warning-color);

        &:hover {
            background-color: var(--btn-warning-bg-color-hover);
        }
    }

    .btn--danger {
        background-color: var(--btn-danger-bg-color);
        color: var(--btn-danger-color);

        &:hover {
            background-color: var(--btn-danger-bg-color-hover);
        }
    }

    .btn--success {
        background-color: var(--btn-success-bg-color);
        color: var(--btn-success-color);

        &:hover {
            background-color: var(--btn-success-bg-color-hover);
        }
    }

    .btn--lg,
    .btn--cta {
        font-size: var(--btn-lg-font-size);
        padding: var(--btn-lg-padding-y) var(--btn-lg-padding-x);
    }

    .btn--sm {
        font-size: var(--btn-sm-font-size);
        padding: var(--btn-sm-padding-y) var(--btn-sm-padding-x);
    }
`;