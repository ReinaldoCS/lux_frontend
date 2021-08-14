import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {

    --primary: #FF79C6;

    --text: #F8F8F2;
    --text-body: #6272A4;
    --text-title: #BD93F9;
    
    --shape: #44475A;
    --background: #282A36;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: 'Archivo', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
