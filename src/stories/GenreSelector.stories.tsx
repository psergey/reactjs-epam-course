import { ComponentMeta, ComponentStory } from '@storybook/react';
import GenreSelector from '../components/genre-selector/GenreSelector';

export default {
  title: 'Movies/Genre selection component',
  component: GenreSelector,
  argTypes: {
    onSelected: {
      action: 'Link clicked',
      description: 'Provides selected genre in callback'
    }
  }
} as ComponentMeta<typeof GenreSelector>;

const Template: ComponentStory<typeof GenreSelector> = args => <GenreSelector {...args}></GenreSelector>;

export const Default = Template.bind({});
Default.args = {
  genres: ['All', 'Horror', 'Si-Fi', 'Comedy'],
  currentGenre: 'Comedy'
};
