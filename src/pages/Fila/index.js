import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import api from "api";

import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as ArrowSendIcon } from "assets/icons/arrow-send.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Button from "components/Button";
import Card from "components/CardProntuario";
import Text from "components/Text";
import {
  Grid,
  CircularProgress,
  Button as MuiButton,
  Box,
} from "@material-ui/core";
import SearchBar from "components/Searchbar";

import useStyles, { Container, Content } from "./styles";

const TableLabel = (props) => (
  <Text color="grey" weight={500} size="15px" {...props} />
);

const TableText = (props) => <Text color="dark" weight={400} {...props} />;

const Fila = () => {
  const history = useHistory();
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [prontuarios, setProntuarios] = useState();

  const fila = JSON.parse(localStorage.getItem("fila"));

  const user = useSelector((state) => state.auth.user);

  async function listProntuarios() {
    const prontuariosRetornados = [];

    try {
      for (const prontuarioId of fila) {
        const { data } = await api.get(`/prontuarios/${prontuarioId}`);
        prontuariosRetornados.push(data);
      }
      setProntuarios(prontuariosRetornados);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listProntuarios();
  }, []);

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar
          placeholder="Pesquise por nome ou CPF"
          titulo="Fila"
        />
      </Box>

      <Content>
        <Box width="100%" display="flex" justifyContent="center">
          {loading && <CircularProgress />}
        </Box>

        {!loading && (
          <Grid container>
            <Grid container style={{ paddingLeft: 16, marginBottom: 16 }}>
              <Grid item sm={3}>
                <TableLabel>Nome do paciente</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>CPF</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>RG</TableLabel>
              </Grid>
              <Grid item sm={3}>
                <TableLabel>Cartão SUS</TableLabel>
              </Grid>
            </Grid>

            {prontuarios?.map((prontuario) => (
              <Grid container className={classes.prontuarioItem}>
                <Grid item sm={3}>
                  <TableText>{prontuario.paciente.nome}</TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {prontuario.paciente.CPF || "384.493.938-34"}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {prontuario.paciente.RG || "384.493.938-34"}
                  </TableText>
                </Grid>
                <Grid item sm={3}>
                  <TableText>
                    {prontuario.paciente.cartao_sus || "384.493.938-34"}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <MuiButton
                    className={classes.actionButton}
                    onClick={() =>
                      history.push(`/prontuarios/${prontuario.id}`)
                    }
                  >
                    <InfoIcon />
                  </MuiButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Content>
    </Container>
  );
};

export default Fila;
