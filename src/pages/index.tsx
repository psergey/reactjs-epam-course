import { NextPage } from 'next';
import { FC, ReactElement, useEffect, useState } from 'react';
import RouletteLabel from '../components/ui/RouletteLabel';
import Movies from '../components/movies/Movies';
import { PageResponse, SortBy } from '../models/api';
import { Movie } from '../models/movie';
import styles from '../App.module.css';
import { getMovies } from '../services/movieService';
import SearchMovie from '../components/root/SearchMovie';

const Root: NextPage = (): ReactElement => {
  // const [filterParams, setFilterParams] = useSearchParams();
  const [movies, setMovies] = useState<PageResponse<Movie>>();
  // const [search, setSearch] = useState(filterParams.get('query') ?? undefined);
  // const [sort, setSort] = useState<SortBy>(
  //   isSortBy(filterParams.get('sortBy') ?? '') ? (filterParams.get('sortBy') as SortBy) : 'title'
  // );
  // const [filter, setFilter] = useState(filterParams.get('genre') ?? 'All');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const items = await getMovies({
  //       search: search,
  //       searchBy: 'title',
  //       sortBy: sort,
  //       genresFilter: filter === 'All' ? [] : [filter]
  //     });

  //     setMovies(items);
  //   };

  //   fetchData();
  // }, [search, filter, sort]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getMovies({
        search: undefined,
        searchBy: 'title',
        sortBy: 'title',
        genresFilter: []
      });

      setMovies(items);
    };

    fetchData();
  }, []);

  const selectMovie = (movie?: Movie) => {
    //setMovie(movie);
    // navigate({
    //   pathname: `/${movie?.id}`,
    //   search: filterParams.toString()
    // });
    null;
  };

  // const onChangeMovieGenreHandler = (selected: string): void => {
  //   setFilter(selected);

  //   filterParams.set('genre', selected);
  //   setFilterParams(filterParams);
  // };

  // const onChangeSortingHandler = (selected: string): void => {
  //   const sortBy = selected === 'Release Date' ? 'releaseDate' : 'title';

  //   setSort(sortBy);
  //   filterParams.set('sortBy', sortBy);
  //   setFilterParams(filterParams);
  // };

  return (
    <>
      {/* <div className={styles.filter}>
        <div>
          { <GenreSelector genres={genres} currentGenre={filter} onSelected={onChangeMovieGenreHandler} /> }
        </div>
        <div>
          {<MovieSort
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
      </div> */}
      <SearchMovie></SearchMovie>
    </>
  );
};

export default Root;
