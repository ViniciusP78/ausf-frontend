import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;