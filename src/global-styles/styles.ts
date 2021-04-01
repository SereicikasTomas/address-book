import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 1.7;
    font-size: 1.6rem;
    color: ${({ theme: { colorSecondary } }) => colorSecondary};
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  }

  #root {
    height: 100vh;
    width: 100vw;
    padding: 5rem 15%;
  }
`;
