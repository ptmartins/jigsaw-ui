import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: inline-flex;
    }

    .avatar {
        align-items: center;
        background-color: var(--avatar-bg-color, var(--component-bg));
        border: var(--avatar-border, var(--component-border, none));
        border-radius: 50%;
        color: var(--avatar-color, var(--component-color));
        display: flex;
        font-weight: 600;
        height: var(--avatar-md-size);
        justify-content: center;
        overflow: hidden;
        width: var(--avatar-md-size);
        font-size: var(--avatar-md-font-size);
    }

    .avatar img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    .avatar--sm {
        height: var(--avatar-sm-size);
        width: var(--avatar-sm-size);
        font-size: var(--avatar-sm-font-size);
    }

    .avatar--lg {
        height: var(--avatar-lg-size);
        width: var(--avatar-lg-size);
        font-size: var(--avatar-lg-font-size);
    }
`;