import { MoviesList } from 'components/Movies/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/api';
import { StyledSection, StyledTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const func = async () => {
      const data = await fetchTrending();
      setMovies(data);
    };
    func();
  }, []);

  return (
    <main>
      <StyledSection>
        <StyledTitle>Trending today</StyledTitle>
        <MoviesList data={movies} />
      </StyledSection>
    </main>
  );
};

export default Home;
