import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  z-index: 1000;
  
  ${glassTheme.glass}
  
  border-radius: 0; 
  border-top: none;
  border-left: none;
  border-right: none;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

const NavLink = styled.li`
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo>AGÊNCIA.M</Logo>
      <NavList>
        <NavLink>Início</NavLink>
        <NavLink>Serviços</NavLink>
        <NavLink>Portfólio</NavLink>
        <NavLink>Contato</NavLink>
      </NavList>
    </Navbar>
  );
};

export default Header;