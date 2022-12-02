import { Route, Routes } from 'react-router-dom';
// import Home from './Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
// import { Movies } from './Movies/Movies';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import MovieDetails from './Movies/MovieDetails';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
