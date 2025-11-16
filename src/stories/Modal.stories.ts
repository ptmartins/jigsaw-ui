import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Modal/modal.component.js';
import '../components/Icon/icon.component.js';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'jg-modal',
  parameters: {
    docs: {
      description: {
        component: `
# Modal Component

A modal dialog component for displaying overlay content with customizable buttons and actions.

## Properties

- **title**: Modal title text (string, default: "Modal")
- **cancelBtn**: Show cancel button (boolean, default: false)
- **confirmBtnText**: Text for confirm button (string, default: "Confirm")
- **confirmBtn**: Show confirm button (boolean, default: false)
- **killBtnText**: Text for delete/kill button (string, default: "Delete")
- **killBtn**: Show delete/kill button (boolean, default: false)

## Features

- Overlay background with click-to-close
- ESC key to close
- Customizable button combinations
- Slotted content for maximum flexibility
- Built-in close icon in header

## Events

The modal can be extended to emit custom events for confirm and delete actions.

## Usage

Perfect for:
- Confirmation dialogs
- Form overlays
- Content viewers
- Delete confirmations
- Custom dialog boxes
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    cancelBtn: { control: 'boolean' },
    confirmBtnText: { control: 'text' },
    confirmBtn: { control: 'boolean' },
    killBtnText: { control: 'text' },
    killBtn: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

// Note: Modal stories are displayed inline for documentation purposes
// In real usage, modals would be rendered as overlays

export const Default: Story = {
  args: {
    title: 'Modal Title',
    cancelBtn: false,
    confirmBtnText: 'Confirm',
    confirmBtn: false,
    killBtnText: 'Delete',
    killBtn: false,
  },
  render: (args) => html`
    <div style="position: relative; height: 400px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
      <jg-modal 
        title="${args.title}"
        ?cancel-btn="${args.cancelBtn}"
        confirm-btn-text="${args.confirmBtnText}"
        ?confirm-btn="${args.confirmBtn}"
        kill-btn-text="${args.killBtnText}"
        ?kill-btn="${args.killBtn}"
        style="position: relative;"
      >
        <p>This is the modal content. It can contain any HTML elements or components.</p>
      </jg-modal>
    </div>
  `,
};

export const ConfirmationModal: Story = {
  name: 'Confirmation Modal',
  render: () => html`
    <div style="position: relative; height: 400px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
      <jg-modal 
        title="Confirm Action"
        cancel-btn="true"
        confirm-btn="true"
        confirm-btn-text="Yes, Continue"
        style="position: relative;"
      >
        <p>Are you sure you want to proceed with this action?</p>
        <p><strong>This action cannot be undone.</strong></p>
      </jg-modal>
    </div>
  `,
};

export const DeleteConfirmation: Story = {
  name: 'Delete Confirmation',
  render: () => html`
    <div style="position: relative; height: 400px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
      <jg-modal 
        title="Delete Item"
        cancel-btn="true"
        kill-btn="true"
        kill-btn-text="Delete Forever"
        style="position: relative;"
      >
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <jg-icon name="warning" size="24px" style="color: #dc3545;"></jg-icon>
          <span><strong>Warning: This action is permanent</strong></span>
        </div>
        <p>You are about to delete "Important Document.pdf".</p>
        <p>This file will be permanently removed and cannot be recovered.</p>
      </jg-modal>
    </div>
  `,
};

export const FormModal: Story = {
  name: 'Form Modal',
  render: () => html`
    <div style="position: relative; height: 500px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
      <jg-modal 
        title="Add New User"
        cancel-btn="true"
        confirm-btn="true"
        confirm-btn-text="Create User"
        style="position: relative;"
      >
        <form style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 600;">Full Name</label>
            <input type="text" placeholder="Enter full name" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 600;">Email Address</label>
            <input type="email" placeholder="Enter email address" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 600;">Role</label>
            <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
              <option value="">Select a role</option>
              <option value="admin">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          
          <div style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="send-invite" />
            <label for="send-invite">Send invitation email</label>
          </div>
        </form>
      </jg-modal>
    </div>
  `,
};

export const InformationModal: Story = {
  name: 'Information Modal',
  render: () => html`
    <div style="position: relative; height: 400px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
      <jg-modal 
        title="System Update Available"
        confirm-btn="true"
        confirm-btn-text="Update Now"
        style="position: relative;"
      >
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <jg-icon name="system_update" size="32px" style="color: #007bff;"></jg-icon>
          <div>
            <h4 style="margin: 0;">Version 2.1.0 Available</h4>
            <small style="color: #666;">Released 2 days ago</small>
          </div>
        </div>
        
        <h5>What's New:</h5>
        <ul style="margin: 8px 0; padding-left: 20px;">
          <li>Improved performance and stability</li>
          <li>New dark theme support</li>
          <li>Enhanced accessibility features</li>
          <li>Bug fixes and security updates</li>
        </ul>
        
        <p><small>The update will take approximately 5 minutes to complete.</small></p>
      </jg-modal>
    </div>
  `,
};

export const InteractiveDemo: Story = {
  name: 'Interactive Modal Demo',
  render: () => html`
    <div style="text-align: center; padding: 40px;">
      <h4>Click buttons to see different modal types</h4>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
        <button 
          style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
          @click="${() => {
            const modal = document.createElement('jg-modal');
            modal.setAttribute('title', 'Simple Modal');
            modal.innerHTML = '<p>This is a simple modal example.</p>';
            document.body.appendChild(modal);
          }}"
        >
          Simple Modal
        </button>
        
        <button 
          style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
          @click="${() => {
            const modal = document.createElement('jg-modal');
            modal.setAttribute('title', 'Confirm Action');
            modal.setAttribute('cancel-btn', 'true');
            modal.setAttribute('confirm-btn', 'true');
            modal.innerHTML = '<p>Do you want to continue?</p>';
            document.body.appendChild(modal);
          }}"
        >
          Confirmation
        </button>
        
        <button 
          style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
          @click="${() => {
            const modal = document.createElement('jg-modal');
            modal.setAttribute('title', 'Delete Item');
            modal.setAttribute('cancel-btn', 'true');
            modal.setAttribute('kill-btn', 'true');
            modal.innerHTML = '<p>This action cannot be undone.</p>';
            document.body.appendChild(modal);
          }}"
        >
          Delete Modal
        </button>
      </div>
      
      <p style="margin-top: 20px; color: #666; font-size: 14px;">
        <em>Note: In a real application, modals appear as overlays. These examples show the modal structure for documentation purposes.</em>
      </p>
    </div>
  `,
};