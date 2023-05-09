import { FC, ReactElement } from 'react';
import noPoster from '../../../public/no-poster.jpeg';
import styles from './MovieDetails.module.css';

interface MovieDetailsProps {
  title: string;
  posterUrl: string;
  releaseDate?: string;
  duration: number;
  rating?: number;
  description: string;
  genres: string[];
}

const MovieDetails: FC<MovieDetailsProps> = ({
  title,
  posterUrl,
  releaseDate,
  duration,
  rating,
  description,
  genres
}): ReactElement => {
  const durationText = `${Math.floor(duration / 60)}h ${duration % 60}m`;

  return (
    <div className={styles.container} data-testid="movie-details">
      <div className={styles.poster}>
        <img src={posterUrl} alt={title} onError={e => (e.currentTarget.src = noPoster.src)}></img>
      </div>
      <div className={styles.meta}>
        <div className={styles.firstLine}>
          <span className={styles.name}>{title}</span>
          <div className={styles.rating}>
            <span>{rating ?? 'N/A'}</span>
          </div>
        </div>
        <div className={`${styles.opacity}`}>{genres.slice(0, 3).join(', ')}</div>
        <div className={styles.time}>
          <span>{releaseDate !== undefined ? new Date(releaseDate).getFullYear() : 'N/A'}</span>
          <span>{durationText}</span>
        </div>
        <div className={`${styles.opacity}`}>{description}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
