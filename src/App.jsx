import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import styled from 'styled-components';
import Contact from './components/Contact';

const AppContainer = styled.div`
  width: 100%;
  padding-top: 80px; 
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
    </AppContainer>
  );
}

export default App;