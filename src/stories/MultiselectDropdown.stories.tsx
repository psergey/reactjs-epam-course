import { ComponentMeta, ComponentStory } from '@storybook/react';
import MultiSelectDropdown from '../components/dropdown/MultiSelectDropdown';

export default {
  title: 'Controls/MultiSelectDropdown component',
  component: MultiSelectDropdown
} as ComponentMeta<typeof MultiSelectDropdown>;

const Template: ComponentStory<typeof MultiSelectDropdown> = args => (
  <MultiSelectDropdown {...args}></MultiSelectDropdown>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select Genre',
  elements: ['Crime', 'Documentary', 'Horror', 'Comedy'],
  selected: ['Crime', 'Comedy']
};
