import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMoviesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 0px 20px;
  justify-content: center;
`;

const StyledMoviesElement = styled.li`
  width: 200px;

  transition: all linear 250ms;

  &:hover {
    border: 2px solid white;
    transform: scale(1.1);
  }
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
  text-decoration: none;
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
  margin-top: 20px;
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

const StyledTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  line-height: 1.5;
`;

const StyledCastReviewList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

const StyledCastReviewLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  padding: 5px 10px;
  background-color: #b2bec3;
  border-radius: 5px;
  color: black;
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
  StyledTitle,
  StyledCastReviewList,
  StyledCastReviewLink,
};
