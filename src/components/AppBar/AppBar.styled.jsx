import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: rgba(79, 79, 88, 0.9);

  &.active {
    background-color: #b2bec3;
    color: black;
    font-weight: bold;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ccc;
  }
`;

const StyledHeader = styled.header`
  width: 100vw;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 0px;
`;

export { StyledNav, StyledNavItem, StyledHeader };
