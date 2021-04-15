import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    background-color: ${({ theme }) => theme.background.light};
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;