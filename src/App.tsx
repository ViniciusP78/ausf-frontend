import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Routes from "./routes";

import mainTheme from "styles/themes/main";
import GlobalStyle from "styles/global";

import ConfirmationModal from "components/Modal/Confirmation";

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import { ThemeProvider } from "styled-components";

import socket from "services/socket";

function App() {
  const user = useSelector((store: any) => store.auth.user);

  useEffect(() => {
    if (user) socket.emit("init", user.id);
  }, [user]);

  useEffect(() => {
    socket.on("receberProntuario", (msg) => {
      console.log("aaaaaaaaaaaaa");
    });
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <MuiThemeProvider theme={createMuiTheme({ palette: mainTheme as any })}>
        <GlobalStyle />
        <Routes />
        <ConfirmationModal />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
