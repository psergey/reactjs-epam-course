import { FC, ReactElement } from 'react';
import styles from './MovieDetails.module.css';

interface MovieDetailsProps {
  name: string;
  posterUrl: string;
  releaseYear: number;
  duration: number;
  rating: number;
  description: string;
  genres: string[];
}

const MovieDetails: FC<MovieDetailsProps> = ({
  name,
  posterUrl,
  releaseYear,
  duration,
  rating,
  description,
  genres
}): ReactElement => {
  const durationText = `${Math.floor(duration / 60)}h ${duration % 60}m`;

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={posterUrl} alt={name}></img>
      </div>
      <div className={styles.meta}>
        <div className={styles.firstLine}>
          <span className={styles.name}>{name}</span>
          <div className={styles.rating}>
            <span>{rating}</span>
          </div>
        </div>
        <div className={`${styles.opacity}`}>{genres.slice(0, 3).join(', ')}</div>
        <div className={styles.time}>
          <span>{releaseYear}</span>
          <span>{durationText}</span>
        </div>
        <div className={`${styles.opacity}`}>{description}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
