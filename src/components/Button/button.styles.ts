import { css } from 'lit';

export default css`
    :host {
        --btn-border-radius: 4px;

        --btn-padding-x: 1rem;
        --btn-padding-y: .75rem;
        --btn-sm-padding-x: .75rem;
        --btn-sm-padding-y: .5rem;
        --btn-lg-padding-x: 1.25rem;
        --btn-lg-padding-y: 1rem;

        --btn-bg-color: #222;
        --btn-bg-color-hover: #000;
        --btn-color: #fff;
        --btn-primary-bg-color: #007bff;
        --btn-primary-bg-color-hover: #0069d9;
        --btn-primary-color: #fff;
        --btn-danger-bg-color: #dc3545;
        --btn-danger-bg-color-hover: #c82333;
        --btn-danger-color: #fff;
        --btn-warning-bg-color: #ffc107;
        --btn-warning-bg-color-hover: #e0a800;
        --btn-warning-color: #212529;
        --btn-success-bg-color: #28a745;
        --btn-success-bg-color-hover: #218838;
        --btn-success-color: #fff;

        --btn-lg-font-size: 1.2rem;
        --btn-sm-font-size: .875rem;
    }

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
        line-height: 1.5;
        padding: var(--btn-padding-y) var(--btn-padding-x);
        transition: all .3s ease;

        &:hover {
        background-color: var(--btn-bg-color-hover);
        }
    }

    .btn:disabled {
        opacity: 0.5;
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