import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
      --white: #FFFFFF;
      --primary: #121214;
  }

  @media (max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }

  body {
      background: var(--primary);
      color: var(--white);
  }

  body, input, textarea, select, button, span {
      font: 400 1rem "Roboto", sans-serif;
  }
`;
