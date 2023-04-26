import { FC, ReactElement, useState } from 'react';
import styles from './GenreSelector.module.css';

interface GenreSelectorProps {
  genres: string[];
  currentGenre: string;
  onSelected(seleced: string): void;
}

const GenreSelector: FC<GenreSelectorProps> = ({ genres, currentGenre, onSelected }): ReactElement => {
  const [selectedGenre, setSelectedGenre] = useState(currentGenre);

  const onClickHandlder = (value: string): void => {
    onSelected(value);
    setSelectedGenre(value);
  };

  return (
    <ul className={styles.selector}>
      {genres.map(item => (
        <li key={item} data-testid="genre-link">
          <button className={styles.link} onClick={() => onClickHandlder(item)}>
            {item}
            <span className={selectedGenre.toLowerCase() === item.toLowerCase() ? `${styles.selected}` : ''}></span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreSelector;
