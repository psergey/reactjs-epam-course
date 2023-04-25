import Search from './components/search/Search';
import Counter from './components/counter/Counter';
import GenreSelector from './components/genre-selector/GenreSelector';
import { useEffect, useState } from 'react';
import { getMovies } from './services/movieService';
import { Movie } from './models/movie';
import Movies from './components/movies/Movies';
import styles from './App.module.css';
import MovieSort from './components/movie-sort/MovieSort';
import { PageResponse, SortBy } from './models/api';
import MovieDetails from './components/movie-details/MovieDetails';
import RouletteLabel from './components/ui/RouletteLabel';

const sortBy = ['Release Date', 'Name'];
const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {
  const [movies, setMovies] = useState<PageResponse<Movie>>();
  const [movie, setMovie] = useState<Movie>();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortBy>('title');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchData();
  }, [search, sort, filter]);

  const fetchData = async () => {
    const items = await getMovies({
      search: search,
      searchBy: 'title',
      sortBy: sort,
      genresFilter: filter === 'All' ? [] : [filter]
    });

    setMovies(items);
  };

  const selectMovie = (movie?: Movie) => {
    setMovie(movie);
  };

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <header>
          {!movie && (
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
                    <Search
                      query={search}
                      onSearch={(searchQuery: string): void => {
                        setSearch(searchQuery);
                      }}></Search>{' '}
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
          )}
        </header>
        <main>
          <div className={styles.filter}>
            <div>
              <GenreSelector
                genres={genres}
                currentGenre={filter}
                onSelected={(selected: string) => setFilter(selected)}
              />
            </div>
            <div>
              <MovieSort
                elements={sortBy}
                selected={sort === 'releaseDate' ? 'Release Date' : sort === 'title' ? 'Name' : ''}
                onSelectionChanged={function (selected: string): void {
                  if (selected === 'Release Date') setSort('releaseDate');
                  else if (selected === 'Name') setSort('title');
                }}></MovieSort>
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
}

export default App;
