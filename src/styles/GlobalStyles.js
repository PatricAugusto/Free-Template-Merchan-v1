import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth !important;;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #fff;
    justify-content: center;
    overflow-x: hidden;
  }

  section {
  scroll-margin-top: 80px; 
  }
`;