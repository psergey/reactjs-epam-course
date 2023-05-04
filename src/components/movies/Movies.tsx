import { FC, ReactElement } from 'react';
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom';
import { Movie } from '../../models/movie';
import MovieItem from './movieItem/MovieItem';
import styles from './Movies.module.css';

interface Props {
  movies: Movie[];
  onSelected?(movie?: Movie): void;
}

const Movies: FC<Props> = ({ movies, onSelected }): ReactElement => {
  const [filterParams] = useSearchParams();
  const navigate = useNavigate();

  const onItemEdit = (id: number) => {
    navigate({
      pathname: `/${id}/edit`,
      search: filterParams.toString()
    });
  };

  const onAddMovie = (e: any): void => {
    console.log(e);
  };

  return (
    <>
      <div className={styles.movies}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <MovieItem
              onEdit={onItemEdit}
              onClick={(id: number): void => {
                onSelected && onSelected(movies.find(item => item.id === id));
              }}
              {...movie}></MovieItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
