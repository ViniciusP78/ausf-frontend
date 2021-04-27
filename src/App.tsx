import React from "react";

import Routes from "./routes";

import mainTheme from "styles/themes/main";
import GlobalStyle from "styles/global";

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
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
