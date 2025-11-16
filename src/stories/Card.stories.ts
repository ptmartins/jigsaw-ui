import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Card/card.component.js';

const meta: Meta = {
  title: 'Components/Card',
  component: 'jg-card',
  parameters: {
    docs: {
      description: {
        component: `
# Card Component

A flexible card container for displaying structured content with optional thumbnail, title, and content.

## Properties

- **title**: Card title text (string)
- **thumbnail**: URL for the card thumbnail image (string)
- **content**: Card content/description text (string)
- **thumbnailAlt**: Alt text for the thumbnail image (string)

## Slots

- **title**: Custom title content (overrides the title property)
- **content**: Custom content (overrides the content property)

## Design System Integration

The card component uses the L1 stacking level variables:
- Background: \`var(--card-bg-color)\` → \`var(--bg-color-l1)\`
- Text color: \`var(--card-color)\` → \`var(--color-l1)\`
- Border: \`var(--card-border)\` → \`var(--border-l1)\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    thumbnail: { control: 'text' },
    content: { control: 'text' },
    thumbnailAlt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Card Title',
    thumbnail: '',
    content: 'This is the card content that describes what the card is about.',
    thumbnailAlt: 'Card image',
  },
  render: (args) => html`
    <div style="max-width: 300px;">
      <jg-card 
        title="${args.title}"
        thumbnail="${args.thumbnail}"
        content="${args.content}"
        thumbnail-alt="${args.thumbnailAlt}"
      ></jg-card>
    </div>
  `,
};

export const WithThumbnail: Story = {
  name: 'Card with Image',
  render: () => html`
    <div style="max-width: 300px;">
      <jg-card 
        title="Beautiful Landscape"
        thumbnail="https://picsum.photos/300/200?random=20"
        content="A stunning view of mountains and valleys captured during golden hour."
        thumbnail-alt="Mountain landscape"
      ></jg-card>
    </div>
  `,
};

export const TextOnly: Story = {
  name: 'Text Only Card',
  render: () => html`
    <div style="max-width: 300px;">
      <jg-card 
        title="Important Notice"
        content="This card contains only text content without any thumbnail image. It's perfect for announcements or text-heavy content."
      ></jg-card>
    </div>
  `,
};

export const CustomSlots: Story = {
  name: 'Card with Custom Slots',
  render: () => html`
    <div style="max-width: 300px;">
      <jg-card thumbnail="https://picsum.photos/300/200?random=21">
        <div slot="title" style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.25rem; font-weight: 600;">Custom Title</span>
          <span style="background: #007bff; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">NEW</span>
        </div>
        <div slot="content">
          <p style="margin-bottom: 12px;">This card uses custom slot content instead of properties.</p>
          <div style="display: flex; gap: 8px;">
            <span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">Feature</span>
            <span style="background: #ffc107; color: black; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">Update</span>
          </div>
        </div>
      </jg-card>
    </div>
  `,
};

export const CardGrid: Story = {
  name: 'Card Grid Layout',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; max-width: 900px;">
      <jg-card 
        title="Web Development"
        thumbnail="https://picsum.photos/300/200?random=30"
        content="Learn modern web development with the latest frameworks and technologies."
      ></jg-card>
      
      <jg-card 
        title="UI Design"
        thumbnail="https://picsum.photos/300/200?random=31"
        content="Create beautiful and intuitive user interfaces with design systems."
      ></jg-card>
      
      <jg-card 
        title="JavaScript"
        thumbnail="https://picsum.photos/300/200?random=32"
        content="Master JavaScript fundamentals and advanced concepts for modern development."
      ></jg-card>
    </div>
  `,
};

export const MinimalCard: Story = {
  name: 'Minimal Card',
  render: () => html`
    <div style="max-width: 300px;">
      <jg-card title="Simple Card"></jg-card>
    </div>
  `,
};