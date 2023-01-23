import type { ComponentStory } from '@storybook/react';
import Accordion from './Accordion';

export const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const args = {
    title: 'Click to Expand/Collapse',
    children: (
        <p>
          This is a dummy paragraph as a content of this accordion. 
          This is a dummy paragraph as a content of this accordion. 
          This is a dummy paragraph as a content of this accordion. 
          This is a dummy paragraph as a content of this accordion
        </p>
    ),
}
