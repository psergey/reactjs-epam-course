import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PageResponse } from '../../models/api';
import { Movie } from '../../models/movie';
import { MovieQuery, getMovies } from '../../services/movieService';

type MoviesState = {
  movies: PageResponse<Movie>;
};

export const fetchMovies = createAsyncThunk('movies/fetch', async (query: MovieQuery) => getMovies(query));

const initialState = {
  movies: {
    data: [] as Movie[],
    limit: 0,
    offset: 0,
    totalAmount: 0
  }
  // query: {
  //   sortBy: 'title'
  // }
} as MoviesState;

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});
