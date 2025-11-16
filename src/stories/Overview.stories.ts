import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/index.js';

const meta: Meta = {
  title: 'Overview/Component Library',
  parameters: {
    docs: {
      description: {
        component: `
# Jigsaw UI Component Library

A modern, lightweight UI component library built with [Lit](https://lit.dev/). Jigsaw UI provides a collection of reusable web components that work seamlessly across different frameworks and vanilla JavaScript applications.

## Features

- **Framework Agnostic** - Works with React, Vue, Angular, or plain HTML/JavaScript
- **Built with Lit** - Leverages the power of Lit for efficient, declarative components
- **Lightweight** - Minimal bundle size with tree-shaking support
- **Material Icons** - Integrated Material Icons support
- **Customizable** - Easy to theme and customize for your design system
- **Design System Integration** - Built-in stacking levels (L1, L2, L3) and neutral palette

## Available Components

### Layout & Structure
- **Stack** - Flexible layout component for arranging elements
- **Card** - Container for structured content
- **ListView** - List items with thumbnails and actions

### Interactive Elements
- **Button** - Versatile buttons with multiple variants
- **Modal** - Dialog overlays for forms and confirmations

### Display Components
- **Avatar** - User avatars with text or image fallbacks
- **Icon** - Material Design icons
- **Chip** - Tags and labels
- **Progress** - Progress indicators

### Design System
- **Neutral Palette** - Comprehensive color system
- **Stacking Levels** - L1, L2, L3 visual hierarchy
- **Design Tokens** - Consistent spacing, colors, and typography
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ComponentShowcase: Story = {
  name: 'All Components Showcase',
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      
      <!-- Buttons Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Buttons</h2>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px;">
          <jg-button>Default</jg-button>
          <jg-button type="primary">Primary</jg-button>
          <jg-button type="success">Success</jg-button>
          <jg-button type="warning">Warning</jg-button>
          <jg-button type="danger">Danger</jg-button>
        </div>
        
        <div style="display: flex; gap: 12px; align-items: center;">
          <jg-button size="sm" type="primary">Small</jg-button>
          <jg-button size="md" type="primary">Medium</jg-button>
          <jg-button size="lg" type="primary">Large</jg-button>
        </div>
      </section>

      <!-- Stack Layout -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Stack Layout</h2>
        <div style="background: var(--bg-color-l1); padding: 20px; border-radius: 8px;">
          <h4 style="margin-top: 0;">Button Group</h4>
          <jg-stack gap="0" direction="row">
            <jg-button type="primary">Left</jg-button>
            <jg-button type="primary">Center</jg-button>
            <jg-button type="primary">Right</jg-button>
          </jg-stack>
        </div>
      </section>

      <!-- Avatars and Icons -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Avatars & Icons</h2>
        <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
          <div>
            <h4 style="margin-bottom: 12px;">Avatars</h4>
            <div style="display: flex; gap: 12px; align-items: center;">
              <jg-avatar label="JS" size="sm"></jg-avatar>
              <jg-avatar thumbnail="https://picsum.photos/48/48?random=100" size="md"></jg-avatar>
              <jg-avatar label="AB" size="lg"></jg-avatar>
            </div>
          </div>
          
          <div>
            <h4 style="margin-bottom: 12px;">Icons</h4>
            <div style="display: flex; gap: 16px; align-items: center;">
              <jg-icon name="home" size="24px"></jg-icon>
              <jg-icon name="settings" size="24px"></jg-icon>
              <jg-icon name="star" size="24px"></jg-icon>
              <jg-icon name="favorite" size="24px"></jg-icon>
            </div>
          </div>
        </div>
      </section>

      <!-- Cards -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Cards</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          <jg-card 
            title="Component Library"
            thumbnail="https://picsum.photos/300/200?random=101"
            content="A comprehensive set of UI components built with modern web standards."
          ></jg-card>
          
          <jg-card 
            title="Design System"
            content="Consistent design tokens and patterns for building scalable interfaces."
          ></jg-card>
        </div>
      </section>

      <!-- ListView -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">List Views</h2>
        <div style="max-width: 500px; display: flex; flex-direction: column; gap: 4px;">
          <jg-list-view 
            thumbnail="https://picsum.photos/48/48?random=102"
            header="Sarah Johnson" 
            content="Product Designer • Online now"
          >
            <div slot="actions">
              <jg-icon name="message" size="20px"></jg-icon>
            </div>
          </jg-list-view>
          
          <jg-list-view 
            thumbnail="https://picsum.photos/48/48?random=103"
            header="Mike Chen" 
            content="Frontend Developer • Away"
          >
            <div slot="actions">
              <jg-button size="sm" type="primary">Connect</jg-button>
            </div>
          </jg-list-view>
        </div>
      </section>

      <!-- Progress and Chips -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Progress & Chips</h2>
        <div style="display: flex; gap: 48px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <h4 style="margin-bottom: 12px;">Progress Indicators</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div>
                <small style="display: block; margin-bottom: 4px;">Project Progress: 75%</small>
                <jg-progress value="75" max="100"></jg-progress>
              </div>
              <div>
                <small style="display: block; margin-bottom: 4px;">Loading: 45%</small>
                <jg-progress value="45" max="100"></jg-progress>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style="margin-bottom: 12px;">Chips & Tags</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <jg-chip label="React"></jg-chip>
              <jg-chip label="TypeScript"></jg-chip>
              <jg-chip label="Web Components"></jg-chip>
              <jg-chip label="Design System"></jg-chip>
            </div>
          </div>
        </div>
      </section>

      <!-- Design System Integration -->
      <section style="margin-bottom: 48px;">
        <h2 style="margin-bottom: 24px; color: var(--neutral-80);">Design System Integration</h2>
        <div style="background: var(--bg-color-l1); padding: 24px; border-radius: 8px;">
          <h4 style="margin-top: 0;">Stacking Levels Demo</h4>
          <div style="background: var(--bg-color-l2); border: var(--border-l2); padding: 16px; border-radius: 6px; margin: 12px 0;">
            <h5 style="margin-top: 0;">L2 Card Container</h5>
            <p style="margin: 8px 0;">This card uses L2 stacking variables for proper visual hierarchy.</p>
            <div style="background: var(--bg-color-l3); border: var(--border-l3); padding: 12px; border-radius: 4px;">
              <strong>L3 Content Section</strong><br>
              <small>Demonstrates the three-level stacking system in action.</small>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
};

export const QuickStart: Story = {
  name: 'Quick Start Guide',
  render: () => html`
    <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: system-ui, sans-serif;">
      <h2>Getting Started with Jigsaw UI</h2>
      
      <section style="margin-bottom: 32px;">
        <h3>1. Installation</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"><code>npm install jigsaw-ui</code></pre>
      </section>

      <section style="margin-bottom: 32px;">
        <h3>2. Import Components</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"><code>// Import all components
import 'jigsaw-ui';

// Or import specific components
import 'jigsaw-ui/dist/components/jg-button.js';
import 'jigsaw-ui/dist/components/jg-card.js';</code></pre>
      </section>

      <section style="margin-bottom: 32px;">
        <h3>3. Use in HTML</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"><code>&lt;jg-button type="primary"&gt;Click me!&lt;/jg-button&gt;
&lt;jg-avatar label="JD" size="md"&gt;&lt;/jg-avatar&gt;
&lt;jg-card title="Hello World" content="This is a card"&gt;&lt;/jg-card&gt;</code></pre>
      </section>

      <section>
        <h3>4. Live Example</h3>
        <div style="background: var(--bg-color-l1); padding: 20px; border-radius: 8px; border: var(--border-l1);">
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
            <jg-avatar label="JU" size="md"></jg-avatar>
            <div>
              <h4 style="margin: 0;">Jigsaw UI Demo</h4>
              <small>Components working together</small>
            </div>
          </div>
          
          <jg-stack gap="8px" direction="row">
            <jg-button type="primary">Get Started</jg-button>
            <jg-button>Learn More</jg-button>
          </jg-stack>
        </div>
      </section>
      
      <section style="margin-top: 32px; padding: 16px; background: #e8f4fd; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #0066cc;">💡 Pro Tip</h4>
        <p style="margin-bottom: 0;">All components are framework-agnostic and work with React, Vue, Angular, or vanilla JavaScript. Check out individual component stories for detailed API documentation and examples.</p>
      </section>
    </div>
  `,
};