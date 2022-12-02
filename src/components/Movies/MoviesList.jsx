import PropTypes from 'prop-types';
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
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200${poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/ru/thumb/1/17/%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg/800px-%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg`
                }
                alt=""
              />
              {/* <p>{title ? title : name}</p> */}
            </StyledMoviesElement>
          </Link>
        );
      })}
    </StyledMoviesList>
  );
};

export { MoviesList };

MoviesList.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
