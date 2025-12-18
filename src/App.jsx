import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  display: block; /* Garante empilhamento vertical puro */
`;

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </MainWrapper>
  );
}

export default App;