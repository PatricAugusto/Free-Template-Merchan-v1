import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';

const MainContent = styled.main`
  margin-top: 100px; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const DummySection = styled.section`
  height: 400px;
  width: 80%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
        <DummySection>Hero Section</DummySection>
        <DummySection>Nossos Trabalhos</DummySection>
        <DummySection>Sobre Nós</DummySection>
      </MainContent>
    </>
  );
}

export default App;