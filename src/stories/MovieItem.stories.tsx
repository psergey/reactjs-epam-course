import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieItem from '../components/movies/movieItem/MovieItem';

export default {
  title: 'Movies/Movie card control',
  component: MovieItem,
  argTypes: {
    onClick: {
      action: 'onClick',
      description: 'Provides selected movie identifier in callback'
    }
  }
} as ComponentMeta<typeof MovieItem>;

const Template: ComponentStory<typeof MovieItem> = args => (
  <div
    style={{
      maxWidth: '450px'
    }}>
    <MovieItem {...args}></MovieItem>
  </div>
);

export const MovieCard = Template.bind({});
MovieCard.args = {
  name: 'Pulp Fiction',
  releaseYear: 1994,
  posterUrl: 'https://www.miramax.com/assets/Pulp-Fiction1.png',
  genres: ['Action & Adventure ']
};
