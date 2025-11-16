import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Chip/chip.component.js';

const meta: Meta = {
  title: 'Components/Chip',
  component: 'jg-chip',
  parameters: {
    docs: {
      description: {
        component: `
# Chip Component

A compact element for displaying tags, labels, or categorization information.

## Properties

- **label**: Text content to display in the chip (string)

## Usage

Chips are ideal for:
- Tags and labels
- Filter options
- Category indicators
- Status badges
- User selections
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
  render: (args) => html`
    <jg-chip label="${args.label}"></jg-chip>
  `,
};

export const ChipVariations: Story = {
  name: 'Chip Variations',
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <jg-chip label="Default"></jg-chip>
      <jg-chip label="JavaScript"></jg-chip>
      <jg-chip label="React"></jg-chip>
      <jg-chip label="TypeScript"></jg-chip>
      <jg-chip label="Web Components"></jg-chip>
    </div>
  `,
};

export const CategoryTags: Story = {
  name: 'Category Tags',
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <jg-chip label="Frontend"></jg-chip>
      <jg-chip label="Backend"></jg-chip>
      <jg-chip label="Design"></jg-chip>
      <jg-chip label="DevOps"></jg-chip>
      <jg-chip label="Mobile"></jg-chip>
    </div>
  `,
};

export const SkillTags: Story = {
  name: 'Skill Tags Example',
  render: () => html`
    <div style="max-width: 400px;">
      <h4 style="margin-bottom: 12px;">Technical Skills</h4>
      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
        <jg-chip label="HTML"></jg-chip>
        <jg-chip label="CSS"></jg-chip>
        <jg-chip label="JavaScript"></jg-chip>
        <jg-chip label="TypeScript"></jg-chip>
        <jg-chip label="React"></jg-chip>
        <jg-chip label="Vue.js"></jg-chip>
        <jg-chip label="Node.js"></jg-chip>
        <jg-chip label="Python"></jg-chip>
        <jg-chip label="Git"></jg-chip>
        <jg-chip label="Docker"></jg-chip>
      </div>
    </div>
  `,
};