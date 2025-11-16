import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/ListView/list-view.component.js';
import '../components/Icon/icon.component.js';
import '../components/Button/button.component.js';

const meta: Meta = {
  title: 'Components/ListView',
  component: 'jg-list-view',
  parameters: {
    docs: {
      description: {
        component: `
# ListView Component

A flexible list item component for displaying structured information with thumbnail, content, and actions.

## Properties

- **thumbnail**: URL for the thumbnail image (string)
- **thumbnailAlt**: Alt text for the thumbnail (string)
- **header**: Header/title text (string)
- **content**: Content/description text (string)  
- **clickable**: Whether the item is clickable (boolean, default: false)

## Slots

- **thumbnail**: Custom thumbnail content
- **header**: Custom header content (overrides header property)
- **content**: Custom content (overrides content property)
- **actions**: Action buttons or controls

## Events

- **listItem-click**: Fired when clickable item is clicked

## Design System Integration

Uses the ListView stacking level variables:
- Background: \`var(--list-view-bg-color)\` → \`var(--bg-color-l1)\`
- Text color: \`var(--list-view-color)\` → \`var(--color-l1)\`
- Border: \`var(--list-view-border)\` → \`var(--border-l1)\`
        `,
      },
    },
  },
  argTypes: {
    thumbnail: { control: 'text' },
    thumbnailAlt: { control: 'text' },
    header: { control: 'text' },
    content: { control: 'text' },
    clickable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    thumbnail: 'https://picsum.photos/48/48?random=1',
    thumbnailAlt: 'User avatar',
    header: 'List Item Title',
    content: 'This is the content description for the list item.',
    clickable: false,
  },
  render: (args) => html`
    <div style="max-width: 500px;">
      <jg-list-view 
        thumbnail="${args.thumbnail}"
        thumbnail-alt="${args.thumbnailAlt}"
        header="${args.header}"
        content="${args.content}"
        ?clickable="${args.clickable}"
      ></jg-list-view>
    </div>
  `,
};

export const WithActions: Story = {
  name: 'List Item with Actions',
  render: () => html`
    <div style="max-width: 500px;">
      <jg-list-view 
        thumbnail="https://picsum.photos/48/48?random=2"
        header="John Doe" 
        content="Software Engineer at Tech Company"
      >
        <div slot="actions">
          <jg-button size="sm" type="primary">Edit</jg-button>
          <jg-icon name="keyboard_arrow_right" size="24px" style="color: #666;"></jg-icon>
        </div>
      </jg-list-view>
    </div>
  `,
};

export const TextOnlyItems: Story = {
  name: 'Text Only Items',
  render: () => html`
    <div style="max-width: 500px; display: flex; flex-direction: column; gap: 4px;">
      <jg-list-view 
        header="Settings" 
        content="Configure your application preferences"
      >
        <div slot="actions">
          <jg-icon name="settings" size="20px"></jg-icon>
        </div>
      </jg-list-view>
      
      <jg-list-view 
        header="Notifications" 
        content="Manage your notification settings"
      >
        <div slot="actions">
          <jg-icon name="notifications" size="20px"></jg-icon>
        </div>
      </jg-list-view>
      
      <jg-list-view 
        header="Privacy" 
        content="Control your privacy and data settings"
      >
        <div slot="actions">
          <jg-icon name="privacy_tip" size="20px"></jg-icon>
        </div>
      </jg-list-view>
    </div>
  `,
};

export const ClickableItems: Story = {
  name: 'Clickable List Items',
  render: () => html`
    <div style="max-width: 500px; display: flex; flex-direction: column; gap: 4px;">
      <jg-list-view 
        thumbnail="https://picsum.photos/48/48?random=10"
        header="Alice Johnson" 
        content="Product Manager • Last seen 2 hours ago"
        clickable="true"
        @listItem-click="${(e: CustomEvent) => {
          console.log('Clicked item:', e.detail);
          alert('Alice Johnson profile clicked!');
        }}"
      >
        <div slot="actions">
          <jg-icon name="message" size="20px"></jg-icon>
        </div>
      </jg-list-view>
      
      <jg-list-view 
        thumbnail="https://picsum.photos/48/48?random=11"
        header="Bob Smith" 
        content="UX Designer • Online now"
        clickable="true"
        @listItem-click="${(e: CustomEvent) => {
          console.log('Clicked item:', e.detail);
          alert('Bob Smith profile clicked!');
        }}"
      >
        <div slot="actions">
          <jg-icon name="message" size="20px"></jg-icon>
        </div>
      </jg-list-view>
      
      <jg-list-view 
        thumbnail="https://picsum.photos/48/48?random=12"
        header="Carol Wilson" 
        content="Frontend Developer • Away"
        clickable="true"
        @listItem-click="${(e: CustomEvent) => {
          console.log('Clicked item:', e.detail);
          alert('Carol Wilson profile clicked!');
        }}"
      >
        <div slot="actions">
          <jg-icon name="message" size="20px"></jg-icon>
        </div>
      </jg-list-view>
    </div>
  `,
};

export const CustomSlots: Story = {
  name: 'Custom Slot Content',
  render: () => html`
    <div style="max-width: 500px; display: flex; flex-direction: column; gap: 8px;">
      <jg-list-view thumbnail="https://picsum.photos/48/48?random=20">
        <div slot="header" style="display: flex; align-items: center; gap: 8px;">
          <strong>Premium User</strong>
          <span style="background: gold; color: black; padding: 2px 6px; border-radius: 8px; font-size: 10px; font-weight: bold;">PRO</span>
        </div>
        <div slot="content" style="display: flex; flex-direction: column; gap: 4px;">
          <span>Advanced features enabled</span>
          <div style="display: flex; gap: 4px;">
            <span style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Active</span>
            <span style="background: #007bff; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Verified</span>
          </div>
        </div>
        <div slot="actions">
          <jg-button size="sm">Manage</jg-button>
        </div>
      </jg-list-view>
      
      <jg-list-view>
        <div slot="thumbnail" style="background: #007bff; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
          +5
        </div>
        <div slot="header">
          <strong>5 New Messages</strong>
        </div>
        <div slot="content">
          From various team members
        </div>
        <div slot="actions">
          <jg-icon name="mark_email_read" size="20px" style="color: #007bff;"></jg-icon>
        </div>
      </jg-list-view>
    </div>
  `,
};

export const ListCollection: Story = {
  name: 'Complete List Example',
  render: () => html`
    <div style="max-width: 600px;">
      <h3 style="margin-bottom: 16px;">Team Members</h3>
      <div style="display: flex; flex-direction: column; gap: 2px; border: 1px solid var(--neutral-30); border-radius: 8px; overflow: hidden;">
        <jg-list-view 
          thumbnail="https://picsum.photos/48/48?random=30"
          header="Sarah Connor" 
          content="Team Lead • sarah@company.com"
          clickable="true"
        >
          <div slot="actions">
            <jg-button size="sm" type="primary">Message</jg-button>
          </div>
        </jg-list-view>
        
        <jg-list-view 
          thumbnail="https://picsum.photos/48/48?random=31"
          header="John Matrix" 
          content="Senior Developer • john@company.com"
          clickable="true"
        >
          <div slot="actions">
            <jg-button size="sm">Message</jg-button>
          </div>
        </jg-list-view>
        
        <jg-list-view 
          thumbnail="https://picsum.photos/48/48?random=32"
          header="Ellen Ripley" 
          content="UX Designer • ellen@company.com"
          clickable="true"
        >
          <div slot="actions">
            <jg-button size="sm">Message</jg-button>
          </div>
        </jg-list-view>
        
        <jg-list-view 
          thumbnail="https://picsum.photos/48/48?random=33"
          header="Dutch Schaefer" 
          content="Product Manager • dutch@company.com"
          clickable="true"
        >
          <div slot="actions">
            <jg-button size="sm">Message</jg-button>
          </div>
        </jg-list-view>
      </div>
    </div>
  `,
};