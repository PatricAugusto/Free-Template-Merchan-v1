import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html, body {
    width: 100%;
    overflow-x: hidden; 
    scroll-behavior: smooth !important;
  }

  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
    min-height: 100vh;
    color: #fff;
    display: block;
  }

  section {
    width: 100%;
    position: relative;
    padding: 80px 5%; 

    @media (min-width: 768px) {
      padding: 100px 10%; 
    }
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }
`;