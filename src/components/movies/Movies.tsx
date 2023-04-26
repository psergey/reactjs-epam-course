import { FC, ReactElement } from 'react';
import { Movie } from '../../models/movie';
import MovieItem from './movieItem/MovieItem';
import styles from './Movies.module.css';

interface Props {
  movies: Movie[];
  onSelected?(movie?: Movie): void;
}

const Movies: FC<Props> = ({ movies, onSelected }): ReactElement => {
  return (
    <div className={styles.movies}>
      {movies.map(movie => (
        <div key={movie.id} className={styles.movie}>
          <MovieItem
            onClick={(id: number): void => {
              onSelected && onSelected(movies.find(item => item.id === id));
            }}
            {...movie}></MovieItem>
        </div>
      ))}
    </div>
  );
};

export default Movies;
