import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search from '../components/search/Search';

export default {
  title: 'Movies/Search movie component',
  argTypes: {
    query: {
      description: 'Movie search criteria',
      control: { type: 'text' }
    },
    onSearch: {
      action: 'Search triggered',
      description: 'Provides search criteria in callback'
    }
  }
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args}></Search>;

export const MovieSearch = Template.bind({});
