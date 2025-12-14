import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  padding-top: 80px; 
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Portfolio />
      {/* Outras seções virão aqui */}
    </AppContainer>
  );
}

export default App;