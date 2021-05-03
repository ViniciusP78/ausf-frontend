import React, { useEffect } from "react";

import Routes from "./routes";

import mainTheme from "styles/themes/main";
import GlobalStyle from "styles/global";

import ConfirmationModal from 'components/Modal/Confirmation';

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import { ThemeProvider } from "styled-components";

function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <MuiThemeProvider theme={createMuiTheme({ palette: mainTheme as any })}>
        <GlobalStyle />
        <Routes />
        <ConfirmationModal/>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
