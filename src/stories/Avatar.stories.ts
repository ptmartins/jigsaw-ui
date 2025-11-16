import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Avatar/avatar.component.js';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'jg-avatar',
  parameters: {
    docs: {
      description: {
        component: `
# Avatar Component

Display user avatars with either text labels or images.

## Properties

- **label**: Text to display when no thumbnail is provided (string)
- **thumbnail**: URL of the avatar image (string)
- **size**: Avatar size - "sm" | "md" | "lg" (string, default: "md")

## Behavior

- If a \`thumbnail\` is provided, displays an image
- If no \`thumbnail\` is provided, displays the \`label\` text as a fallback
- Automatically applies appropriate sizing based on \`size\` property
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    thumbnail: { control: 'text' },
    size: { 
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'] 
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'JD',
    thumbnail: '',
    size: 'md',
  },
  render: (args) => html`
    <jg-avatar 
      label="${args.label}"
      thumbnail="${args.thumbnail}"
      size="${args.size}"
    ></jg-avatar>
  `,
};

export const TextAvatars: Story = {
  name: 'Text Avatars (All Sizes)',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <jg-avatar label="PM" size="sm"></jg-avatar>
      <jg-avatar label="JS" size="md"></jg-avatar>
      <jg-avatar label="NP" size="lg"></jg-avatar>
    </div>
  `,
};

export const ImageAvatars: Story = {
  name: 'Image Avatars (All Sizes)',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <jg-avatar 
        thumbnail="https://picsum.photos/40/40?random=1" 
        size="sm"
      ></jg-avatar>
      <jg-avatar 
        thumbnail="https://picsum.photos/48/48?random=2" 
        size="md"
      ></jg-avatar>
      <jg-avatar 
        thumbnail="https://picsum.photos/64/64?random=3" 
        size="lg"
      ></jg-avatar>
    </div>
  `,
};

export const MixedAvatars: Story = {
  name: 'Mixed Avatar Types',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
      <jg-avatar label="AB" size="md"></jg-avatar>
      <jg-avatar thumbnail="https://picsum.photos/48/48?random=4" size="md"></jg-avatar>
      <jg-avatar label="CD" size="md"></jg-avatar>
      <jg-avatar thumbnail="https://picsum.photos/48/48?random=5" size="md"></jg-avatar>
      <jg-avatar label="EF" size="md"></jg-avatar>
    </div>
  `,
};

export const AvatarGroup: Story = {
  name: 'Avatar Group Example',
  render: () => html`
    <div style="display: flex; margin-left: -8px;">
      <jg-avatar 
        thumbnail="https://picsum.photos/40/40?random=10" 
        size="md"
        style="margin-left: -8px; border: 2px solid white; position: relative; z-index: 4;"
      ></jg-avatar>
      <jg-avatar 
        thumbnail="https://picsum.photos/40/40?random=11" 
        size="md"
        style="margin-left: -8px; border: 2px solid white; position: relative; z-index: 3;"
      ></jg-avatar>
      <jg-avatar 
        label="AB" 
        size="md"
        style="margin-left: -8px; border: 2px solid white; position: relative; z-index: 2;"
      ></jg-avatar>
      <jg-avatar 
        thumbnail="https://picsum.photos/40/40?random=12" 
        size="md"
        style="margin-left: -8px; border: 2px solid white; position: relative; z-index: 1;"
      ></jg-avatar>
    </div>
  `,
};