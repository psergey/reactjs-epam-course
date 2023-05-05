import { FC, ReactElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root, { movieLoader } from './components/root/Root';
import MovieInformation from './components/root/MovieInformation';
import SearchMovie from './components/root/SearchMovie';
import AddMovieForm from './components/movies/modals/AddMovieForm';
import UpdateMovieForm from './components/movies/modals/UpdateMovieForm';
import NotFoundPage from './components/ui/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<SearchMovie />}>
        <Route path="/new" element={<AddMovieForm />} />
        <Route path="/:movieId/edit" loader={movieLoader} element={<UpdateMovieForm />} />
      </Route>
      <Route path="/:movieId" loader={movieLoader} element={<MovieInformation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App: FC = (): ReactElement => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
