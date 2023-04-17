import { ComponentMeta, ComponentStory } from '@storybook/react';
import Counter from '../components/counter/Counter';

export default {
  title: 'Counter component',
  component: Counter
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = args => <Counter {...args}></Counter>;

export const DefaultSettings = Template.bind({});

export const CustomSettings = Template.bind({});
CustomSettings.args = { start: 42 };
