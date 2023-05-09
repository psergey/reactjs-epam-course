import { FC, ReactElement, useState } from 'react';
//import Image from 'next/image';
import ContextMenu from '../../context-menu/ContextMenu';
import noPoster from '../../../../public/no-poster.jpeg';
import styles from './MovieItem.module.css';

interface MovieProps {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate?: string;
  genres: string[];
  onEdit(id: number): void;
  onClick(id: number): void;
}

const MovieItem: FC<MovieProps> = ({ id, title, posterUrl, releaseDate, genres, onEdit, onClick }): ReactElement => {
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
        <img src={url} alt={title} onError={() => setUrl(noPoster.src)}></img>
        {/* <Image src={url} alt={title} onError={() => setUrl('./assets/no-poster.jpeg')}></Image> */}
        <span className={styles.menu}>
          <ContextMenu
            onOpenChanged={onOpenChangedHandler}
            isOpen={isContextMenuOpened}
            onEdit={(): void => {
              onEdit(id);
              setContextMenuOpened(false);
            }}></ContextMenu>
        </span>
      </div>
      <div className={styles.meta}>
        <div className={styles['first-line']}>
          <span className={styles.name}>{title}</span>
          <span className={styles.year}>{releaseDate !== undefined ? new Date(releaseDate).getFullYear() : 'N/A'}</span>
        </div>
        <div className={styles.genres}>{genres.slice(0, 3).join(', ')}</div>
      </div>
    </div>
  );
};

export default MovieItem;
