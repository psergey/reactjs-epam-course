import axios from 'axios';
import { Movie } from '../models/movie';
import { environment } from '../.env/environment';
import { PageResponse, SearchBy, SortBy, SortOrder } from '../models/api';
import { type } from 'os';

export type MovieQuery = {
  search?: string;
  genresFilter?: string[];
  searchBy: SearchBy;
  sortBy?: SortBy;
};

type MovieQueryParams = {
  searchBy: SearchBy;
  search?: string;
  filter?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type WithId = {
  id: number;
};

type MovieBase = {
  title: string;
  poster_path: string;
  release_date?: string;
  vote_average?: number;
  overview: string;
  runtime: number;
  genres: string[];
};

type MovieResponse = WithId & MovieBase;

const movieApiClient = axios.create({
  baseURL: environment.movieApi
});

export const createMovie = async (movie: Partial<Movie>): Promise<Movie> => {
  const response = await movieApiClient.post<MovieResponse>('/movies', {
    title: movie.title,
    poster_path: movie.posterUrl,
    release_date: movie.releaseDate,
    vote_average: movie.rating !== undefined ? +movie.rating : undefined,
    overview: movie.description,
    runtime: movie.duration !== undefined ? +movie.duration : undefined,
    genres: movie.genres
  } as MovieBase);
  const item = response.data;

  return {
    id: item.id,
    title: item.title,
    posterUrl: item.poster_path,
    releaseDate: item.release_date ? new Date(item.release_date) : undefined,
    rating: item.vote_average,
    duration: item.runtime,
    description: item.overview,
    genres: item.genres
  } as Movie;
};

export const updateMovie = async (movie: Partial<Movie>): Promise<Movie> => {
  const response = await movieApiClient.put<MovieResponse>('/movies', {
    id: movie.id,
    title: movie.title,
    poster_path: movie.posterUrl,
    release_date: movie.releaseDate,
    vote_average: movie.rating !== undefined ? +movie.rating : undefined,
    overview: movie.description,
    runtime: movie.duration !== undefined ? +movie.duration : undefined,
    genres: movie.genres
  } as WithId & MovieBase);
  const item = response.data;

  return {
    id: item.id,
    title: item.title,
    posterUrl: item.poster_path,
    releaseDate: item.release_date ? new Date(item.release_date) : undefined,
    rating: item.vote_average,
    duration: item.runtime,
    description: item.overview,
    genres: item.genres
  } as Movie;
};

export const getMovies = async (query: MovieQuery): Promise<PageResponse<Movie>> => {
  const filter: MovieQueryParams = {
    searchBy: query.searchBy,
    search: query.search,
    filter: (query.genresFilter ?? []).join(','),
    sortBy: query.sortBy === 'releaseDate' ? 'release_date' : query.sortBy,
    sortOrder: 'asc'
  };

  const response = await movieApiClient.get<PageResponse<MovieResponse>>(`/movies`, {
    params: filter
  });

  const movies = response.data.data.map(
    item =>
      ({
        id: item.id,
        title: item.title,
        posterUrl: item.poster_path,
        releaseDate: item.release_date ? new Date(item.release_date) : undefined,
        rating: item.vote_average,
        duration: item.runtime,
        description: item.overview,
        genres: item.genres
      } as Movie)
  );
  return {
    ...response.data,
    data: movies
  };
};

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await movieApiClient.get<MovieResponse>(`/movies/${id}`);
  const item = response.data;

  return {
    id: item.id,
    title: item.title,
    posterUrl: item.poster_path,
    releaseDate: item.release_date ? new Date(item.release_date) : undefined,
    rating: item.vote_average,
    duration: item.runtime,
    description: item.overview,
    genres: item.genres
  } as Movie;
};
