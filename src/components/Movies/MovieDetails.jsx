import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { fetchById } from 'services/api';
import { useEffect, useState } from 'react';
import {
  StyledBackButton,
  StyledMovieInfoDiv,
  StyledSection,
  StyledMovie,
  StyledGenre,
  StyledGenreItem,
} from './Movies.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const func = async () => {
      const data = await fetchById(id);
      setMovie(data);
    };
    func();
  }, [id]);

  if (!movie) {
    return;
  }

  const {
    original_title,
    vote_average,
    poster_path,
    title,
    genres,
    overview,
    backdrop_path,
  } = movie;

  const handleClick = () => {
    setTimeout(() => {
      const box = document.getElementById('box');
      if (!box) {
        return;
      }
      box.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };

  return (
    <>
      <StyledSection>
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '0px 15px',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: -1,
          }}
        ></div>
        <StyledMovie>
          <StyledBackButton to={backLinkHref} type="button">
            Go back
          </StyledBackButton>
          <StyledMovieInfoDiv>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt=""
                width="300"
                height="450"
              />
            ) : (
              'Oops'
            )}
            <div>
              <h1>{title ?? original_title}</h1>
              <p>
                Rating:{' '}
                {vote_average > 0
                  ? Math.round(vote_average * 100) / 100
                  : 'Unknown'}
              </p>
              <h2>Overview:</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <StyledGenre>
                {genres.map(el => (
                  <StyledGenreItem key={el.name}>{el.name}</StyledGenreItem>
                ))}
              </StyledGenre>
            </div>
          </StyledMovieInfoDiv>
          <ul>
            <li>
              <Link to="cast" onClick={handleClick} state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" onClick={handleClick} state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </StyledMovie>
      </StyledSection>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export { MovieDetails };
