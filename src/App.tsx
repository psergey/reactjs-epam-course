import { FC, ReactElement } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root, { movieLoader } from './components/root/Root';
import MovieInformation from './components/root/MovieInformation';
import SearchMovie from './components/root/SearchMovie';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<SearchMovie />} />
      <Route path="/:movieId" loader={movieLoader} element={<MovieInformation />} />
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
