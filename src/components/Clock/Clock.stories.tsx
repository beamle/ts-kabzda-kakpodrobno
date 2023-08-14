import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import Clock from "./Clock";

const meta: Meta<typeof Clock> = {
    title: 'TODOLISTS/Clock',
    component: Clock,
    tags: ['autodocs'],
    argTypes: {
        addItem: {
            description: 'This a story for a clock comp',
            action: 'clicked'
        }
    },
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const ClockStory: Story = {
    args: {
    },
};

// args === props
// another option


