import { FC, ReactElement, useEffect, useState } from 'react';
import { Outlet, LoaderFunctionArgs, useNavigate, useSearchParams } from 'react-router-dom';
import GenreSelector from '../genre-selector/GenreSelector';
import RouletteLabel from '../ui/RouletteLabel';
import Movies from '../movies/Movies';
import MovieSort from '../movie-sort/MovieSort';
import { getMovie, getMovies } from '../../services/movieService';
import { Movie } from '../../models/movie';
import { PageResponse, SortBy, isSortBy } from '../../models/api';
import styles from '../../App.module.css';
import { MovieSearchContext } from '../../hooks/useMovieSearch';

const sortBy = ['Release Date', 'Name'];
const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export const movieLoader = async ({ params }: LoaderFunctionArgs): Promise<Movie> => {
  if (!params.movieId) {
    throw new Error('Expected params.movieId');
  }

  return await getMovie(params.movieId);
};

const Root: FC = (): ReactElement => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [movies, setMovies] = useState<PageResponse<Movie>>();
  const [search, setSearch] = useState(filterParams.get('query') ?? undefined);
  const [sort, setSort] = useState<SortBy>(
    isSortBy(filterParams.get('sortBy') ?? '') ? (filterParams.get('sortBy') as SortBy) : 'title'
  );
  const [filter, setFilter] = useState(filterParams.get('genre') ?? 'All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const items = await getMovies({
        search: search,
        searchBy: 'title',
        sortBy: sort,
        genresFilter: filter === 'All' ? [] : [filter]
      });

      setMovies(items);
    };

    fetchData();
  }, [search, filter, sort]);

  const selectMovie = (movie?: Movie) => {
    //setMovie(movie);
    navigate({
      pathname: `/${movie?.id}`,
      search: filterParams.toString()
    });
  };

  const onChangeMovieGenreHandler = (selected: string): void => {
    setFilter(selected);

    filterParams.set('genre', selected);
    setFilterParams(filterParams);
  };

  const onChangeSortingHandler = (selected: string): void => {
    const sortBy = selected === 'Release Date' ? 'releaseDate' : 'title';

    setSort(sortBy);
    filterParams.set('sortBy', sortBy);
    setFilterParams(filterParams);
  };

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <header>
          {/* {!movie && (
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
          )}
          {movie && (
            <div className={styles.details}>
              <div className={styles['top-row']}>
                <RouletteLabel />
                <button className={styles.search} onClick={() => selectMovie(undefined)}>
                  <span></span>
                </button>
              </div>
              <div className={styles.details}>
                <MovieDetails {...movie}></MovieDetails>
              </div>
            </div>
          )} */}
          <Outlet
            context={
              {
                query: search,
                setQuery: setSearch
              } as MovieSearchContext
            }
          />
        </header>
        <main>
          <div className={styles.filter}>
            <div>
              <GenreSelector genres={genres} currentGenre={filter} onSelected={onChangeMovieGenreHandler} />
            </div>
            <div>
              <MovieSort
                elements={sortBy}
                selected={sort === 'releaseDate' ? 'Release Date' : sort === 'title' ? 'Name' : ''}
                onSelectionChanged={onChangeSortingHandler}></MovieSort>
            </div>
          </div>
          <div className={styles.movies}>
            <div className={styles['movie-count']} data-testid="movie-count">
              <span className="bold">{movies?.totalAmount}</span> movies found
            </div>
            <Movies movies={movies?.data ?? []} onSelected={selectMovie} />
          </div>
        </main>
        <footer>
          <RouletteLabel></RouletteLabel>
        </footer>
      </div>

      {/* <Counter start={10} />

      <Search query="Find" onSearch={(value: string) => console.log(value)} />

      <div className="genreSelection">
        <GenreSelector
          genres={genres}
          currentGenre="Documentary"
          onSelected={(selected: string) => console.log(selected)}
        />
      </div> */}
    </div>
  );
};

export default Root;
