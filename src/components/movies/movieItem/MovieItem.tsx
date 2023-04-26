import { FC, ReactElement, useState } from 'react';
import ContextMenu from '../../context-menu/ContextMenu';
import styles from './MovieItem.module.css';
import noPoster from '../../../assets/no-poster.jpeg';

interface MovieProps {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate?: Date;
  genres: string[];
  onClick(id: number): void;
}

const MovieItem: FC<MovieProps> = ({ id, title, posterUrl, releaseDate, genres, onClick }): ReactElement => {
  //const inputRef = useRef<ContextMenuType>(null);
  const [url, setUrl] = useState(posterUrl);
  const [isContextMenuOpened, setContextMenuOpened] = useState(false);
  const onOpenChangedHandler = () => {
    setContextMenuOpened(prev => !prev);
  };

  return (
    <div
      className={styles.container}
      role="button"
      data-testid="movie-item"
      onClick={() => onClick(id)}
      onMouseLeave={() => {
        //inputRef.current && inputRef.current.closeMenu();
        setContextMenuOpened(false);
        console.log('Mouse Leave');
      }}>
      <div className={styles.poster}>
        <img src={url} alt={title} onError={() => setUrl(noPoster)}></img>
        <span className={styles.menu}>
          <ContextMenu onOpenChanged={onOpenChangedHandler} isOpen={isContextMenuOpened}></ContextMenu>
        </span>
      </div>
      <div className={styles.meta}>
        <div className={styles['first-line']}>
          <span className={styles.name}>{title}</span>
          <span className={styles.year}>{releaseDate?.getFullYear() ?? 'N/A'}</span>
        </div>
        <div className={styles.genres}>{genres.slice(0, 3).join(', ')}</div>
      </div>
    </div>
  );
};

export default MovieItem;
