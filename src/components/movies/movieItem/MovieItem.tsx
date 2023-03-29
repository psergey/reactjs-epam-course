import { FC, ReactElement, useRef } from 'react';
import ContextMenu, { ContextMenuType } from '../../context-menu/ContextMenu';
import styles from './MovieItem.module.css';

interface MovieProps {
  id: number;
  name: string;
  posterUrl: string;
  releaseYear: number;
  genres: string[];
  onClick(id: number): void;
}

const MovieItem: FC<MovieProps> = ({ id, name, posterUrl, releaseYear, genres, onClick }): ReactElement => {
  const inputRef = useRef<ContextMenuType>(null);

  return (
    <div
      className={styles.container}
      role="button"
      onClick={() => onClick(id)}
      onMouseLeave={() => {
        inputRef.current && inputRef.current.closeMenu();
        console.log('Mouse Leave');
      }}>
      <div className={styles.poster}>
        <img src={posterUrl} alt={name}></img>
        <span className={styles.menu}>
          <ContextMenu ref={inputRef}></ContextMenu>
        </span>
      </div>
      <div className={styles.meta}>
        <div className={styles['first-line']}>
          <span className={styles.name}>{name}</span>
          <span className={styles.year}>{releaseYear}</span>
        </div>
        <div className={styles.genres}>{genres.join(', ')}</div>
      </div>
    </div>
  );
};

export default MovieItem;
