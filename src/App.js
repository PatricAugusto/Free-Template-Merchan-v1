import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { glassTheme } from './styles/theme';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  ${glassTheme.glass} 
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 300;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Merchandising Experience</Title>
        <Subtitle>Inovação visual para marcas que buscam destaque.</Subtitle>
      </Container>
    </>
  );
}

export default App;