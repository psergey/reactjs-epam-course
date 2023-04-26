import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

export type MovieSearchContext = { query?: string; setQuery: Dispatch<SetStateAction<string>> };

const useMovieSearch = (): [string | undefined, Dispatch<SetStateAction<string>>] => {
  const context = useOutletContext<MovieSearchContext>();
  return [context.query, context.setQuery];
};

export default useMovieSearch;
