import { StyledNav, StyledNavItem, StyledHeader } from './AppBar.styled.jsx';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        {navItems.map(({ href, text }) => {
          return (
            <StyledNavItem to={href} key={href}>
              {text}
            </StyledNavItem>
          );
        })}
      </StyledNav>
    </StyledHeader>
  );
};

export default AppBar;
