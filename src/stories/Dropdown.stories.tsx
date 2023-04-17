import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from '../components/dropdown/Dropdown';

export default {
  title: 'Controls/Dropdow component',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args}></Dropdown>;

export const Default = Template.bind({});
Default.args = {
  elements: ['Release Date', 'Name'],
  selected: 'Name'
};
