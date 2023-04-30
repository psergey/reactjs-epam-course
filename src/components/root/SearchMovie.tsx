import { FC, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../search/Search';
import RouletteLabel from '../ui/RouletteLabel';
import styles from '../../App.module.css';
import useMovieSearch from '../../hooks/useMovieSearch';

const SearchMovie: FC = (): ReactElement => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [search, setSearch] = useMovieSearch();

  const onSearchMovieHandler = (searchQuery: string): void => {
    setSearch(searchQuery);

    filterParams.set('query', searchQuery);
    setFilterParams(filterParams);
  };

  return (
    <>
      <div className={styles.search}>
        <div className={styles.header}>
          <div className={styles['top-row']}>
            <RouletteLabel />
            <button className={styles.addMovie}>+ Add Movie</button>
          </div>
          <div className={styles['search-row']}>
            <div>
              <span className={styles['search-label']}>Find your movie</span>
            </div>
            <div>
              <Search query={search} onSearch={onSearchMovieHandler}></Search>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
