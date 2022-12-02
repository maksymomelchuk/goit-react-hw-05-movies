import { Link, useLocation } from 'react-router-dom';
import { StyledMoviesList, StyledMoviesElement } from './Movies.styled';

const MoviesList = ({ data }) => {
  const location = useLocation();

  if (!data) {
    return;
  }

  return (
    <StyledMoviesList>
      {data.map(({ id, title, name, poster_path }) => {
        return (
          <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
            <StyledMoviesElement>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt=""
              />
              <p>{title ? title : name}</p>
            </StyledMoviesElement>
          </Link>
        );
      })}
    </StyledMoviesList>
  );
};

export { MoviesList };
