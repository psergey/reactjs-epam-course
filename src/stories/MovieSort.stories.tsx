import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieSort from '../components/movie-sort/MovieSort';

export default {
  title: 'Movies/Movie sort component',
  component: MovieSort
} as ComponentMeta<typeof MovieSort>;

const Template: ComponentStory<typeof MovieSort> = args => <MovieSort {...args}></MovieSort>;

export const Sort = Template.bind({});
Sort.args = {
  selected: 'Release Date'
};
