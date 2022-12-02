import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMoviesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledMoviesElement = styled.li`
  width: 200px;
`;

const StyledForm = styled.form`
  text-align: center;
  padding-top: 100px;
`;

const StyledInput = styled.input`
  outline: none;
  padding: 10px;
  margin-right: 3px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StyledSearchBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

const StyledBackButton = styled(Link)`
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: rgba(79, 79, 88, 0.9);
  color: white;
  font-size: 20px;
  margin: 15px 0px;
  cursor: pointer;

  transition: all linear 250ms;

  &:hover {
    background-color: #fefefe;
    color: black;
  }
`;

const StyledBackgroundDiv = styled.div`
  background-color: #c3c3c3;
  padding: 0px 15px;
`;

const StyledMovieInfoDiv = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledSection = styled.div`
  /* padding-top: 80px; */
`;

const StyledMovie = styled.div`
  padding: 80px 15px;
`;

const StyledGenre = styled.p`
  display: flex;
  gap: 20px;
`;

const StyledGenreItem = styled.span`
  padding: 10px 20px;
  background-color: rgba(79, 79, 88, 0.9);
  border-radius: 5px;
`;

export {
  StyledMoviesList,
  StyledMoviesElement,
  StyledForm,
  StyledBackButton,
  StyledBackgroundDiv,
  StyledMovieInfoDiv,
  StyledSection,
  StyledMovie,
  StyledGenre,
  StyledGenreItem,
  StyledInput,
  StyledSearchBtn,
};
