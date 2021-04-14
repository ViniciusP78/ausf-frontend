import React from 'react';

import Routes from './routes';

import mainTheme from 'themes/main';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MuiThemeProvider theme={createMuiTheme({ palette: mainTheme })}>
        <Routes/>
      </MuiThemeProvider>
    </ThemeProvider>
);
}

export default App;
