import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Icon/icon.component.js';

const meta: Meta = {
  title: 'Components/Icon',
  component: 'jg-icon',
  parameters: {
    docs: {
      description: {
        component: `
# Icon Component

Display Material Design icons with customizable sizes.

## Properties

- **name**: Material icon name (string) - Use official Material icon names
- **size**: Icon size (string, default: "1rem") - Supports any CSS size unit

## Material Icons Integration

This component uses the Material Icons font family. Some popular icon names include:
- home, settings, menu, search, close, add, remove
- arrow_back, arrow_forward, arrow_drop_down, arrow_drop_up
- star, favorite, thumb_up, thumb_down
- person, group, account_circle
- edit, delete, save, check, clear
- mail, phone, location_on, calendar_today
- visibility, visibility_off, lock, lock_open

Visit [Material Icons](https://fonts.google.com/icons) for a complete list.
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    size: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'home',
    size: '1rem',
  },
  render: (args) => html`
    <jg-icon name="${args.name}" size="${args.size}"></jg-icon>
  `,
};

export const CommonIcons: Story = {
  name: 'Common Icons',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="home" size="24px"></jg-icon>
        <small>home</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="settings" size="24px"></jg-icon>
        <small>settings</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="menu" size="24px"></jg-icon>
        <small>menu</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="search" size="24px"></jg-icon>
        <small>search</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="close" size="24px"></jg-icon>
        <small>close</small>
      </div>
    </div>
  `,
};

export const NavigationIcons: Story = {
  name: 'Navigation Icons',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="arrow_back" size="24px"></jg-icon>
        <small>arrow_back</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="arrow_forward" size="24px"></jg-icon>
        <small>arrow_forward</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="keyboard_arrow_up" size="24px"></jg-icon>
        <small>keyboard_arrow_up</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="keyboard_arrow_down" size="24px"></jg-icon>
        <small>keyboard_arrow_down</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="keyboard_arrow_right" size="24px"></jg-icon>
        <small>keyboard_arrow_right</small>
      </div>
    </div>
  `,
};

export const ActionIcons: Story = {
  name: 'Action Icons',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="edit" size="24px"></jg-icon>
        <small>edit</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="delete" size="24px"></jg-icon>
        <small>delete</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="save" size="24px"></jg-icon>
        <small>save</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="add" size="24px"></jg-icon>
        <small>add</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="check" size="24px"></jg-icon>
        <small>check</small>
      </div>
    </div>
  `,
};

export const IconSizes: Story = {
  name: 'Different Sizes',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="star" size="16px"></jg-icon>
        <small>16px</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="star" size="24px"></jg-icon>
        <small>24px</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="star" size="32px"></jg-icon>
        <small>32px</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="star" size="48px"></jg-icon>
        <small>48px</small>
      </div>
    </div>
  `,
};

export const SocialIcons: Story = {
  name: 'Social & Communication Icons',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="mail" size="24px"></jg-icon>
        <small>mail</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="phone" size="24px"></jg-icon>
        <small>phone</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="chat" size="24px"></jg-icon>
        <small>chat</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="share" size="24px"></jg-icon>
        <small>share</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <jg-icon name="favorite" size="24px"></jg-icon>
        <small>favorite</small>
      </div>
    </div>
  `,
};