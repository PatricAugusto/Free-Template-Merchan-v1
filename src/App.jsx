import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import styled from 'styled-components';
import Contact from './components/Contact';
import Services from './components/Services';

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
      <Services />
      <Portfolio />
      <Contact />
    </AppContainer>
  );
}

export default App;