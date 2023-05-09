import { FC, ReactElement } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MovieDetails from '../movie-details/MovieDetails';
import RouletteLabel from '../ui/RouletteLabel';
import { Movie } from '../../models/movie';
import styles from '../../App.module.css';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

const MovieInformation: FC<Movie> = (movie): ReactElement => {
  //const movie = useLoaderData() as Movie;
  //const [filterParams] = useSearchParams();
  //const navigate = useNavigate();
  const router = useRouter();
  const params = useSearchParams();

  return (
    <div className={styles.details}>
      <div className={styles['top-row']}>
        <RouletteLabel />
        <button className={styles.search} onClick={() => router.push('/?' + params)}>
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
