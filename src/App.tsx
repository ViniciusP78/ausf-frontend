import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openAlert } from "store/modules/alert/actions";

import Routes from "./routes";

import mainTheme from "styles/themes/main";
import GlobalStyle from "styles/global";

import ConfirmationModal from "components/Modal/Confirmation";
import AlertController from "components/AlertController";

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  Snackbar,
} from "@material-ui/core";

import { ThemeProvider } from "styled-components";

import socket from "services/socket";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const user = useSelector((store: any) => store.auth.user);
  const dispatch = useDispatch();

  function adicionarNaFila(prontuario: any) {
    const queue: Array<String> = JSON.parse(localStorage.getItem("fila") as any);

    if (!queue) {
      localStorage.setItem("fila", JSON.stringify([prontuario]));
    } else {
      queue.push(prontuario);
      localStorage.setItem("fila", JSON.stringify(queue));
    }

  }

  useEffect(() => {
    if (user) socket.emit("init", user.id);
  }, [user]);

  useEffect(() => {
    socket.on("receberProntuario", (prontuario) => {
      adicionarNaFila(prontuario);
      dispatch(
        openAlert({
          message: "Novo prontuário recebido",
          severity: "info",
          duration: 5000,
        })
      );
    });
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <MuiThemeProvider theme={createMuiTheme({ palette: mainTheme as any })}>
        <GlobalStyle />
        <Routes />
        <ConfirmationModal />
        <AlertController />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
