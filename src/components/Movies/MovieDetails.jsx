import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchById } from 'services/api';
import { useEffect, useState, Suspense } from 'react';
import {
  StyledBackButton,
  StyledMovieInfoDiv,
  StyledSection,
  StyledMovie,
  StyledGenre,
  StyledGenreItem,
  StyledTitle,
  StyledCastReviewList,
  StyledCastReviewLink,
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
              <StyledTitle>{title ?? original_title}</StyledTitle>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <img
                  src={`https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png`}
                  alt=""
                  width="50"
                  height="30"
                />
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {vote_average > 0
                    ? Math.round(vote_average * 100) / 100
                    : 'Unknown'}
                </span>
              </div>
              <h2 style={{ marginBottom: 10 }}>Overview:</h2>
              <p style={{ width: 400, marginBottom: 30 }}>{overview}</p>
              <h3 style={{ marginBottom: 20 }}>Genres</h3>
              <StyledGenre>
                {genres.map(el => (
                  <StyledGenreItem key={el.name}>{el.name}</StyledGenreItem>
                ))}
              </StyledGenre>
            </div>
          </StyledMovieInfoDiv>
          <StyledCastReviewList>
            <li>
              <StyledCastReviewLink
                to="cast"
                onClick={handleClick}
                state={location.state}
              >
                Cast
              </StyledCastReviewLink>
            </li>
            <li>
              <StyledCastReviewLink
                to="reviews"
                onClick={handleClick}
                state={location.state}
              >
                Reviews
              </StyledCastReviewLink>
            </li>
          </StyledCastReviewList>
        </StyledMovie>
      </StyledSection>
      <Suspense fallback={<div>Loading</div>}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default MovieDetails;
