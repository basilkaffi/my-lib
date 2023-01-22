import type { ComponentStory } from '@storybook/react';
import Accordion from './Accordion';

export const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const args = {
    title: 'Accordion Menu',
    children: (
        <ul>
            <li>submenu #1</li>
            <li>submenu #2</li>
            <li>submenu #3</li>
            <li>submenu #4</li>
        </ul>
    )
}
