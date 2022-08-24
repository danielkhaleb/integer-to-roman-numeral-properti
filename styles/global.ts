import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
      --white: #FFFFFF;
      --primary: #121214;
      --gray: #29292e;
      --result: #eba417;
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
      font: 400 1rem 'Roboto', sans-serif;
  }

  span {
    color: var(--result);
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Content = styled.section`
  max-width: 720px;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-around;
`
