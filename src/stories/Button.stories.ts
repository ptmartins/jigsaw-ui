import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Button/button.component.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'jg-button',
  parameters: {
    docs: {
      description: {
        component: `
# Button Component

A versatile button component that supports multiple types, sizes, and variants.

## Properties

- **action**: Custom event action identifier (string)
- **disabled**: Whether the button is disabled (boolean)
- **size**: Button size - "sm" | "md" | "lg" | "cta" (string, default: "md")
- **type**: Button type - "primary" | "danger" | "warning" | "success" (string, default: "")
- **variant**: Button variant - "system" | "modal" (string, default: "system")
- **width**: Button width - "auto" | "full" (string, default: "auto")

## Events

- **button-clicked**: Fired when the button is clicked, includes action and original event details
        `,
      },
    },
  },
  argTypes: {
    action: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { 
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'cta'] 
    },
    type: { 
      control: { type: 'select' },
      options: ['', 'primary', 'danger', 'warning', 'success'] 
    },
    variant: { 
      control: { type: 'select' },
      options: ['system', 'modal'] 
    },
    width: { 
      control: { type: 'select' },
      options: ['auto', 'full'] 
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    action: '',
    disabled: false,
    size: 'md',
    type: '',
    variant: 'system',
    width: 'auto',
  },
  render: (args) => html`
    <jg-button 
      action="${args.action}"
      ?disabled="${args.disabled}"
      size="${args.size}"
      type="${args.type}"
      variant="${args.variant}"
      width="${args.width}"
    >
      Default Button
    </jg-button>
  `,
};

export const ButtonTypes: Story = {
  name: 'All Button Types',
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <jg-button>Default</jg-button>
      <jg-button type="primary">Primary</jg-button>
      <jg-button type="success">Success</jg-button>
      <jg-button type="warning">Warning</jg-button>
      <jg-button type="danger">Danger</jg-button>
    </div>
  `,
};

export const ButtonSizes: Story = {
  name: 'Button Sizes',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <jg-button size="sm" type="primary">Small</jg-button>
      <jg-button size="md" type="primary">Medium</jg-button>
      <jg-button size="lg" type="primary">Large</jg-button>
      <jg-button size="cta" type="primary">CTA</jg-button>
    </div>
  `,
};

export const DisabledStates: Story = {
  name: 'Disabled States',
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <jg-button disabled>Default Disabled</jg-button>
      <jg-button type="primary" disabled>Primary Disabled</jg-button>
      <jg-button type="danger" disabled>Danger Disabled</jg-button>
    </div>
  `,
};

export const FullWidth: Story = {
  name: 'Full Width Button',
  render: () => html`
    <div style="max-width: 400px;">
      <jg-button type="primary" width="full">Full Width Button</jg-button>
    </div>
  `,
};

export const WithAction: Story = {
  name: 'Button with Custom Action',
  render: () => html`
    <jg-button 
      type="primary" 
      action="custom-action"
      @button-clicked="${(e: CustomEvent) => {
        console.log('Button clicked with action:', e.detail.action);
        alert(`Button clicked with action: ${e.detail.action}`);
      }}"
    >
      Click me (Check console)
    </jg-button>
  `,
};