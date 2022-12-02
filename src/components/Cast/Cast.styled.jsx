import styled from 'styled-components';

const StyledActorsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 80px 20px;
`;

const StyledActorCard = styled.li`
  width: 150px;
`;

export { StyledActorsList, StyledActorCard };
