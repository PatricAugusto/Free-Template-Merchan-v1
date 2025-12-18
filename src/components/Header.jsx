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
  padding: 0 5%;
  z-index: 1000;
  ${glassTheme.glass}
  border-radius: 0;

  @media (min-width: 768px) {
    padding: 0 10%;
  }
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
`;

const NavList = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    gap: 10px;
  }
`;

const NavLink = styled.a`
  font-size: 0.85rem;
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: 0.3s;

  &:hover { opacity: 1; }
`;

const Header = () => (
  <Navbar>
    <Logo onClick={() => window.scrollTo(0,0)}>AGÊNCIA.M</Logo>
    <NavList>
      <NavLink href="#servicos">Serviços</NavLink>
      <NavLink href="#portfolio">Portfólio</NavLink>
      <NavLink href="#contato">Contato</NavLink>
    </NavList>
  </Navbar>
);

export default Header;