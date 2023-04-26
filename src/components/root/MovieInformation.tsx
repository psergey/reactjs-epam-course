import { FC, ReactElement } from 'react';
import { useLoaderData, useSearchParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../movie-details/MovieDetails';
import RouletteLabel from '../ui/RouletteLabel';
import { Movie } from '../../models/movie';
import styles from '../../App.module.css';

const MovieInformation: FC = (): ReactElement => {
  const movie = useLoaderData() as Movie;
  const [filterParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className={styles.details}>
      <div className={styles['top-row']}>
        <RouletteLabel />
        <button
          className={styles.search}
          onClick={() =>
            navigate({
              pathname: '/',
              search: filterParams.toString()
            })
          }>
          <span></span>
        </button>
      </div>
      <div className={styles.details}>
        <MovieDetails {...movie}></MovieDetails>
      </div>
    </div>
  );
};

export default MovieInformation;
