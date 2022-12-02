import { useState, useEffect } from 'react';
import { StyledForm, StyledInput, StyledSearchBtn } from './Movies.styled';
import { fetchByName } from 'services/api';
import { MoviesList } from './MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query' ?? '');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const func = async () => {
      const data = await fetchByName(movieName);
      setMovies(data.results);
    };
    func();
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.input.value });
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  const visibleMovies = movies;

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={input}
          type="text"
          name="input"
          onChange={handleChange}
        />
        <StyledSearchBtn type="submit">Search</StyledSearchBtn>
      </StyledForm>
      <MoviesList data={visibleMovies} />
    </>
  );
};

export default Movies;
