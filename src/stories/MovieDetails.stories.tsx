import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieDetails from '../components/movie-details/MovieDetails';

export default {
  title: 'Movies/Movie details control',
  component: MovieDetails
} as ComponentMeta<typeof MovieDetails>;

const Template: ComponentStory<typeof MovieDetails> = args => (
  <div
    style={{
      maxWidth: '650px',
      backgroundColor: '#232323'
    }}>
    <MovieDetails {...args}></MovieDetails>
  </div>
);

const TemplateBig: ComponentStory<typeof MovieDetails> = args => (
  <div
    style={{
      maxWidth: '1200px',
      backgroundColor: '#232323'
    }}>
    <MovieDetails {...args}></MovieDetails>
  </div>
);

export const MovieInfo = Template.bind({});
MovieInfo.args = {
  title: 'Pulp Fiction',
  releaseDate: new Date(1994, 9, 14),
  rating: 8.9,
  duration: 154,
  posterUrl: 'https://www.miramax.com/assets/Pulp-Fiction1.png',
  genres: ['Action & Adventure '],
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
};

export const MovieInfoBig = TemplateBig.bind({});
MovieInfoBig.args = {
  ...MovieInfo.args
};
