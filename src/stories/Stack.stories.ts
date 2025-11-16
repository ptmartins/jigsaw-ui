import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Stack/stack.component.js';
import '../components/Button/button.component.js';

const meta: Meta = {
  title: 'Components/Stack',
  component: 'jg-stack',
  parameters: {
    docs: {
      description: {
        component: `
# Stack Component

A layout component for arranging child elements in a horizontal or vertical stack with consistent spacing.

## Properties

- **gap**: Spacing between child elements (string, default: "0") - Any CSS unit (px, rem, em, etc.)
- **direction**: Stack direction (string, default: "row") - "row" | "column"

## Features

- Automatically applies spacing between child elements
- Supports both horizontal (row) and vertical (column) layouts
- Special styling for button groups (removes border radius for seamless connections)
- Flexible gap sizing with any CSS unit

## Usage

Perfect for:
- Button groups and toolbars
- Navigation elements
- Form controls
- Any group of related elements that need consistent spacing
        `,
      },
    },
  },
  argTypes: {
    gap: { control: 'text' },
    direction: { 
      control: { type: 'select' },
      options: ['row', 'column'] 
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    gap: '8px',
    direction: 'row',
  },
  render: (args) => html`
    <jg-stack gap="${args.gap}" direction="${args.direction}">
      <jg-button>First</jg-button>
      <jg-button>Second</jg-button>
      <jg-button>Third</jg-button>
    </jg-stack>
  `,
};

export const ButtonGroups: Story = {
  name: 'Button Groups',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 12px;">Horizontal Button Group</h4>
        <jg-stack gap="0" direction="row">
          <jg-button type="primary">Left</jg-button>
          <jg-button type="primary">Center</jg-button>
          <jg-button type="primary">Right</jg-button>
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Spaced Button Group</h4>
        <jg-stack gap="8px" direction="row">
          <jg-button>Save</jg-button>
          <jg-button type="danger">Delete</jg-button>
          <jg-button>Cancel</jg-button>
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Vertical Button Stack</h4>
        <jg-stack gap="8px" direction="column">
          <jg-button width="full">First Option</jg-button>
          <jg-button width="full">Second Option</jg-button>
          <jg-button width="full">Third Option</jg-button>
        </jg-stack>
      </div>
    </div>
  `,
};

export const DifferentGaps: Story = {
  name: 'Different Gap Sizes',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 12px;">No Gap (0px)</h4>
        <jg-stack gap="0" direction="row">
          <jg-button type="primary">A</jg-button>
          <jg-button type="primary">B</jg-button>
          <jg-button type="primary">C</jg-button>
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Small Gap (4px)</h4>
        <jg-stack gap="4px" direction="row">
          <jg-button>A</jg-button>
          <jg-button>B</jg-button>
          <jg-button>C</jg-button>
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Medium Gap (12px)</h4>
        <jg-stack gap="12px" direction="row">
          <jg-button>A</jg-button>
          <jg-button>B</jg-button>
          <jg-button>C</jg-button>
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Large Gap (24px)</h4>
        <jg-stack gap="24px" direction="row">
          <jg-button>A</jg-button>
          <jg-button>B</jg-button>
          <jg-button>C</jg-button>
        </jg-stack>
      </div>
    </div>
  `,
};

export const MixedContent: Story = {
  name: 'Mixed Content Types',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin-bottom: 12px;">Mixed Elements - Horizontal</h4>
        <jg-stack gap="12px" direction="row">
          <span style="padding: 8px; background: #f0f0f0; border-radius: 4px;">Label</span>
          <jg-button type="primary">Button</jg-button>
          <input type="text" placeholder="Input field" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px;" />
        </jg-stack>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px;">Mixed Elements - Vertical</h4>
        <jg-stack gap="8px" direction="column">
          <label style="font-weight: 600;">Form Label</label>
          <input type="text" placeholder="Enter value..." style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; width: 200px;" />
          <jg-button type="primary" style="width: 200px;">Submit</jg-button>
        </jg-stack>
      </div>
    </div>
  `,
};

export const ResponsiveLayout: Story = {
  name: 'Responsive Usage Example',
  render: () => html`
    <div>
      <h4 style="margin-bottom: 12px;">Toolbar Example</h4>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-color-l1); border-radius: 8px;">
        <h3 style="margin: 0;">Page Title</h3>
        <jg-stack gap="8px" direction="row">
          <jg-button size="sm">Edit</jg-button>
          <jg-button size="sm" type="primary">Save</jg-button>
          <jg-button size="sm" type="danger">Delete</jg-button>
        </jg-stack>
      </div>
    </div>
  `,
};