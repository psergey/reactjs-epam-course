import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from '../components/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
