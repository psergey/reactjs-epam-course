import { FC, ReactElement } from 'react';
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom';
import Search from '../search/Search';
import RouletteLabel from '../ui/RouletteLabel';
import styles from '../../App.module.css';
import useMovieSearch from '../../hooks/useMovieSearch';
import { Movie } from '../../models/movie';
import { createMovie } from '../../services/movieService';

const SearchMovie: FC = (): ReactElement => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [search, setSearch] = useMovieSearch();
  const navigate = useNavigate();

  const onSearchMovieHandler = (searchQuery: string): void => {
    setSearch(searchQuery);

    filterParams.set('query', searchQuery);
    setFilterParams(filterParams);
  };

  const onAddMovieClickHandler = (): void => {
    navigate({
      pathname: '/new',
      search: filterParams.toString()
    });
  };

  const onAddMovie = async (movie: Movie): Promise<void> => {
    await createMovie(movie);
    navigate(-1);
  };

  return (
    <>
      <div className={styles.search}>
        <div className={styles.header}>
          <div className={styles['top-row']}>
            <RouletteLabel />
            <button className={styles.addMovie} onClick={onAddMovieClickHandler}>
              + Add Movie
            </button>
          </div>
          <div className={styles['search-row']}>
            <div>
              <span className={styles['search-label']}>Find your movie</span>
            </div>
            <div>
              <Search query={search} onSearch={onSearchMovieHandler}></Search>
            </div>
          </div>
        </div>
      </div>
      <Outlet
        context={{
          isOpen: true,
          onAddMovie: onAddMovie
        }}></Outlet>
    </>
  );
};

export default SearchMovie;
