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

  .list-view {
    align-items: center;
    background-color: var(--list-view-bg-color);
    border: var(--list-view-border);
    border-radius: var(--list-view-border-radius, 8px);
    color: var(--list-view-color);
    display: flex;
    gap: var(--list-view-gap, 12px);
    min-height: var(--list-view-min-height, 64px);
    padding: var(--list-view-padding, 12px);
    width: 100%;
  }

  .list-view--clickable {
    cursor: pointer;
  }

  .list-view--clickable:hover {
    background-color: var(--list-view-bg-color-hover, var(--interactive-bg-hover, #f8f9fa));
    box-shadow: var(--list-view-box-shadow-hover, 0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .list-view--clickable:active {
    background-color: var(--list-view-bg-color-active, var(--interactive-bg-active, #e9ecef));
  }

  .list-view__thumbnail {
    flex-shrink: 0;
    width: var(--list-view-thumbnail-size, 48px);
    height: var(--list-view-thumbnail-size, 48px);
    border-radius: var(--list-view-thumbnail-border-radius, 4px);
    overflow: hidden;

    display: flex;
    
    align-items: center;
    background-color: var(--list-view-thumbnail-bg);

    justify-content: center;
  }

  .list-view__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Content zone */
  .list-view__content {
    flex: 1;
    min-width: 0; /* Allows text truncation */
    display: flex;
    flex-direction: column;
    gap: var(--list-view-content-gap, 4px);
  }

  .list-view__header {
    display: flex;
    align-items: center;
    min-height: var(--list-view-header-min-height, 20px);
  }

  .list-view__header-text {
    font-weight: var(--list-view-header-font-weight, 600);
    font-size: var(--list-view-header-font-size, 14px);
    line-height: var(--list-view-header-line-height, 1.4);
    color: var(--list-view-header-color, inherit);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-view__body {
    display: flex;
    align-items: center;
    min-height: var(--list-view-body-min-height, 18px);
  }

  .list-view__content-text {
    font-size: var(--list-view-content-font-size, 12px);
    line-height: var(--list-view-content-line-height, 1.4);
    color: var(--list-view-content-color, var(--neutral-60, #868e96));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Actions zone */
  .list-view__actions {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: var(--list-view-actions-gap, 8px);
  }

  /* Slotted content styling */
  ::slotted([slot="header"]) {
    color: var(--list-view-header-color, inherit);
    font-weight: var(--list-view-header-font-weight, 600);
  }

  ::slotted([slot="content"]) {
    color: var(--list-view-content-color, var(--neutral-60, #868e96));
  }

  ::slotted([slot="thumbnail"]) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted([slot="actions"]) {
    display: flex;
    align-items: center;
  }

  /* Responsive adjustments */
  @media (max-width: 480px) {
    .list-view {
      padding: var(--list-view-padding-mobile, 8px);
      gap: var(--list-view-gap-mobile, 8px);
    }

    .list-view__thumbnail {
      width: var(--list-view-thumbnail-size-mobile, 40px);
      height: var(--list-view-thumbnail-size-mobile, 40px);
    }

    .list-view__header-text {
      font-size: var(--list-view-header-font-size-mobile, 13px);
    }

    .list-view__content-text {
      font-size: var(--list-view-content-font-size-mobile, 11px);
    }
  }
`;