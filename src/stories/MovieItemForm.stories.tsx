import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieItemForm from '../components/movies/movieItem/MovieItemForm';

export default {
  title: 'Movies/Movie edit component',
  component: MovieItemForm
} as ComponentMeta<typeof MovieItemForm>;

const Template: ComponentStory<typeof MovieItemForm> = args => (
  <div
    style={{
      maxWidth: '920px',
      backgroundColor: '#232323'
    }}>
    <MovieItemForm {...args}></MovieItemForm>
  </div>
);
export const MovieEdit = Template.bind({});
MovieEdit.args = {
  name: 'Pulp Fiction',
  releaseDate: new Date(1994, 9, 14),
  rating: 8.9,
  duration: 154,
  posterUrl: 'https://www.miramax.com/assets/Pulp-Fiction1.png',
  genre: 'Action & Adventure',
  genres: ['Action & Adventure', 'Fantasy'],
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
};

export const MovieAdd = Template.bind({});
