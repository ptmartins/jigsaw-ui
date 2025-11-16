import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/Progress/progress.component.js';

const meta: Meta = {
  title: 'Components/Progress',
  component: 'jg-progress',
  parameters: {
    docs: {
      description: {
        component: `
# Progress Component

A visual indicator showing the completion progress of a task.

## Properties

- **value**: Current progress value (number, default: 0)
- **max**: Maximum progress value (number, default: 100)

## Usage

The progress bar automatically calculates the percentage based on value/max ratio.
Perfect for showing loading states, completion status, or any measurable progress.
        `,
      },
    },
  },
  argTypes: {
    value: { 
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    max: { 
      control: { type: 'number', min: 1, step: 1 }
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
  },
  render: (args) => html`
    <div style="max-width: 400px;">
      <jg-progress value="${args.value}" max="${args.max}"></jg-progress>
    </div>
  `,
};

export const ProgressStages: Story = {
  name: 'Different Progress Stages',
  render: () => html`
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">0% - Not started</div>
        <jg-progress value="0" max="100"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">25% - Getting started</div>
        <jg-progress value="25" max="100"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">50% - Halfway there</div>
        <jg-progress value="50" max="100"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">75% - Almost done</div>
        <jg-progress value="75" max="100"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">100% - Complete</div>
        <jg-progress value="100" max="100"></jg-progress>
      </div>
    </div>
  `,
};

export const CustomMax: Story = {
  name: 'Custom Maximum Values',
  render: () => html`
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">Files: 7 of 10</div>
        <jg-progress value="7" max="10"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">Downloads: 150 of 200 MB</div>
        <jg-progress value="150" max="200"></jg-progress>
      </div>
      
      <div>
        <div style="margin-bottom: 8px; font-size: 14px;">Tasks: 3 of 5 completed</div>
        <jg-progress value="3" max="5"></jg-progress>
      </div>
    </div>
  `,
};

export const AnimatedProgress: Story = {
  name: 'Animated Progress Simulation',
  render: () => html`
    <div style="max-width: 400px;">
      <div style="margin-bottom: 8px; font-size: 14px;" id="progress-label">Loading... 0%</div>
      <jg-progress value="0" max="100" id="animated-progress"></jg-progress>
      <button 
        style="margin-top: 12px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
        @click="${() => {
          const progress = document.getElementById('animated-progress') as any;
          const label = document.getElementById('progress-label');
          let currentValue = 0;
          
          const interval = setInterval(() => {
            currentValue += Math.random() * 10;
            if (currentValue >= 100) {
              currentValue = 100;
              clearInterval(interval);
              if (label) label.textContent = 'Complete! 100%';
            } else {
              if (label) label.textContent = `Loading... ${Math.round(currentValue)}%`;
            }
            
            if (progress) progress.value = currentValue;
          }, 200);
        }}"
      >
        Start Loading
      </button>
    </div>
  `,
};