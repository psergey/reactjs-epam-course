import { AppProps } from 'next/app';
import '../styles/colors.css';
import '../styles/global.css';
import styles from '../App.module.css';
import RouletteLabel from '../components/ui/RouletteLabel';
import GenreSelector from '../components/genre-selector/GenreSelector';
import MovieSort from '../components/movie-sort/MovieSort';
import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import { PageResponse, SortBy } from '../models/api';
import { Movie } from '../models/movie';
import Movies from '../components/movies/Movies';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { Router } from 'next/router';

const sortBy = ['Release Date', 'Name'];
const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export default function App({ Component, pageProps }: AppProps) {
  const [movies, setMovies] = useState<PageResponse<Movie>>();
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState<SortBy>(
    'title'
    //isSortBy(filterParams.get('sortBy') ?? '') ? (filterParams.get('sortBy') as SortBy) : 'title'
  );
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const items = await getMovies({
        search: params.get('query') ?? undefined,
        searchBy: 'title',
        sortBy: 'title',
        genresFilter: []
      });

      setMovies(items);
    };

    fetchData();
  }, [params]);

  const selectMovie = (movie?: Movie) => {
    //setMovie(movie);
    // navigate({
    //   pathname: `/${movie?.id}`,
    //   search: filterParams.toString()
    // });
    console.log(movie);
    router.push(`/${movie?.id}?${params.toString()}`);
  };

  const onChangeMovieGenreHandler = (selected: string): void => {
    // setFilter(selected);
    // filterParams.set('genre', selected);
    // setFilterParams(filterParams);
  };

  const onChangeSortingHandler = (selected: string): void => {
    const sortBy = selected === 'Release Date' ? 'releaseDate' : 'title';

    setSort(sortBy);
    // filterParams.set('sortBy', sortBy);
    // setFilterParams(filterParams);
  };

  return (
    <>
      <div className={styles.App}>
        <div className={styles.content}>
          <header className={styles.header}>
            {/* <Outlet
            context={
              {
                query: search,
                setQuery: setSearch
              } as MovieSearchContext
            }
          /> */}
            <Component {...pageProps} />
          </header>
          <main className={styles.main}>
            <div className={styles.filter}>
              <div>
                {<GenreSelector genres={genres} currentGenre={filter} onSelected={onChangeMovieGenreHandler} />}
              </div>
              <div>
                {
                  <MovieSort
                    elements={sortBy}
                    selected={sort === 'releaseDate' ? 'Release Date' : sort === 'title' ? 'Name' : ''}
                    onSelectionChanged={onChangeSortingHandler}></MovieSort>
                }
              </div>
            </div>
            <div className={styles.movies}>
              <div className={styles['movie-count']} data-testid="movie-count">
                <span className="bold">{movies?.totalAmount}</span> movies found
              </div>
              <Movies movies={movies?.data ?? []} onSelected={selectMovie} />
            </div>
          </main>
          <footer className={styles.footer}>
            <RouletteLabel></RouletteLabel>
          </footer>
        </div>
      </div>
    </>
  );

  //return <Component {...pageProps} />;
}

export async function getServerSideProps(context: any) {
  const query = context?.query?.query ?? '';
  // Default value = "1"

  console.log('TEST');

  return { props: { query: query } };
}
