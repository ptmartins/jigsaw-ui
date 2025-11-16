import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component: `
# Design Tokens

This documentation showcases the core design tokens used throughout the Jigsaw UI component library.

## Stacking Levels

The design system uses three stacking levels (L1, L2, L3) to create visual hierarchy and depth:
- **L1**: Primary background level
- **L2**: Content/card level 
- **L3**: Secondary background level

## Neutral Palette

A comprehensive neutral color palette from white to black with semantic naming.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const NeutralPalette: Story = {
  name: 'Neutral Color Palette',
  render: () => html`
    <div style="font-family: system-ui, sans-serif;">
      <h3>Neutral Palette</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--white); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --white
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#ffffff</strong><br>
            <small>Base white color</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-10); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --neutral-10
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#f8f9fa</strong><br>
            <small>Lightest neutral</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-20); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --neutral-20
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#e9ecef</strong><br>
            <small>Light neutral</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-30); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --neutral-30
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#dee2e6</strong><br>
            <small>Border color</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-40); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --neutral-40
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#ced4da</strong><br>
            <small>Light gray</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-50); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --neutral-50
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#adb5bd</strong><br>
            <small>Medium gray</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-60); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --neutral-60
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#868e96</strong><br>
            <small>Dark gray</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-70); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --neutral-70
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#495057</strong><br>
            <small>Text color</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-80); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --neutral-80
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#343a40</strong><br>
            <small>Primary text</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--neutral-90); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --neutral-90
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#212529</strong><br>
            <small>Darkest neutral</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--black); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --black
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#000000</strong><br>
            <small>Pure black</small>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const StackingLevels: Story = {
  name: 'Stacking Levels (L1, L2, L3)',
  render: () => html`
    <div style="font-family: system-ui, sans-serif;">
      <h3>Stacking Level Variables</h3>
      <p>These variables define the visual hierarchy and depth in the design system:</p>
      
      <div style="margin: 24px 0;">
        <h4>Level 1 (L1) - Primary Background</h4>
        <div style="
          background: var(--bg-color-l1); 
          color: var(--color-l1); 
          border: var(--border-l1); 
          padding: 24px; 
          border-radius: 8px; 
          margin: 16px 0;
        ">
          <strong>L1 Background Layer</strong><br>
          <small>
            --bg-color-l1: var(--neutral-10)<br>
            --color-l1: var(--neutral-80)<br>
            --border-l1: 1px solid var(--neutral-30)
          </small>
        </div>
      </div>
      
      <div style="margin: 24px 0;">
        <h4>Level 2 (L2) - Content/Card Level</h4>
        <div style="
          background: var(--bg-color-l2); 
          color: var(--color-l2); 
          border: var(--border-l2); 
          padding: 24px; 
          border-radius: 8px; 
          margin: 16px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        ">
          <strong>L2 Content Layer</strong><br>
          <small>
            --bg-color-l2: var(--white)<br>
            --color-l2: var(--neutral-90)<br>
            --border-l2: 1px solid var(--neutral-30)
          </small>
        </div>
      </div>
      
      <div style="margin: 24px 0;">
        <h4>Level 3 (L3) - Secondary Background</h4>
        <div style="
          background: var(--bg-color-l3); 
          color: var(--color-l3); 
          border: var(--border-l3); 
          padding: 24px; 
          border-radius: 8px; 
          margin: 16px 0;
        ">
          <strong>L3 Secondary Layer</strong><br>
          <small>
            --bg-color-l3: var(--neutral-20)<br>
            --color-l3: var(--neutral-80)<br>
            --border-l3: 1px solid var(--neutral-30)
          </small>
        </div>
      </div>
      
      <h4>Layered Example</h4>
      <div style="background: var(--bg-color-l1); padding: 24px; border-radius: 8px;">
        <h5 style="margin-top: 0;">L1 Container</h5>
        <div style="background: var(--bg-color-l2); border: var(--border-l2); padding: 16px; border-radius: 6px; margin: 12px 0;">
          <h6 style="margin-top: 0;">L2 Card</h6>
          <div style="background: var(--bg-color-l3); border: var(--border-l3); padding: 12px; border-radius: 4px;">
            <strong>L3 Section</strong><br>
            <small>This demonstrates the visual hierarchy created by the stacking levels.</small>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const StatePalette: Story = {
  name: 'State Colors',
  render: () => html`
    <div style="font-family: system-ui, sans-serif;">
      <h3>State Color Palette</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--primary); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --primary
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#007bff</strong><br>
            <small>Primary actions</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--primary-hover); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --primary-hover
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#0069d9</strong><br>
            <small>Primary hover</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--danger); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --danger
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#dc3545</strong><br>
            <small>Error/destructive</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--warning); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #000;">
            --warning
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#ffc107</strong><br>
            <small>Warning states</small>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: var(--success); height: 60px; border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: center; color: #fff;">
            --success
          </div>
          <div style="padding: 12px; background: #f9f9f9;">
            <strong>#28a745</strong><br>
            <small>Success states</small>
          </div>
        </div>
      </div>
    </div>
  `,
};