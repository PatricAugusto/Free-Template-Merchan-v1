import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const FooterContainer = styled.footer`
  ${glassTheme.glass}
  margin-top: 50px;
  padding: 60px 10% 20px 10%;
  border-radius: 40px 40px 0 0; 
  border-bottom: none;
  border-left: none;
  border-right: none;
  width: 100%;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Brand = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 0.85rem;
  opacity: 0.6;
  line-height: 1.6;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterLink = styled.a`
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  opacity: 0.6;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    padding-left: 5px;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.4;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <Brand>AGÊNCIA.M</Brand>
          <Description>
            Elevando o padrão do merchandising físico e digital através do design estratégico e minimalista.
          </Description>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Navegação</ColumnTitle>
          <FooterLink href="#">Início</FooterLink>
          <FooterLink href="#servicos">Serviços</FooterLink>
          <FooterLink href="#portfolio">Portfólio</FooterLink>
          <FooterLink href="#contato">Contato</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Social</ColumnTitle>
          <FooterLink>Instagram</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
          <FooterLink>Behance</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <Copyright>
        © 2025 Patric Augusto - TODOS OS DIREITOS RESERVADOS.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;