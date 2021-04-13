import React from 'react';

import Routes from './routes';

import main from '~/themes/main';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={main}>
      <MuiThemeProvider theme={createMuiTheme({ palette: main })}>
        <Routes/>
      </MuiThemeProvider>
    </ThemeProvider>
);
}

export default App;
