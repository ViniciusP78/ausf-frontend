import { createGlobalStyle } from "styled-components";

import { darken } from "polished";

export default createGlobalStyle`

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    scrollbar-width: thin;
    background-color: #E0E4E9;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c3c4c5;
  }

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

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.primary.main};
    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.primary.main)};
    }
  }
`;
