import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import api from "api";
import masks from 'utils/masks'

import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as ArrowSendIcon } from "assets/icons/arrow-send.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import ModalEnvio from "./ModalEnvio";

import Button from "components/Button";
import Card from "components/CardProntuario";
import Text from "components/Text";
import {
  Grid,
  CircularProgress,
  Button as MuiButton,
  Box,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import SearchBar from "components/Searchbar";

import useStyles, { Container, Content } from "./styles";

const TableLabel = (props) => (
  <Text color="grey" weight={500} size="15px" {...props} />
);

const TableText = (props) => <Text color="dark" weight={400} {...props} />;

const ProntuariosList = () => {
  const history = useHistory();
  const classes = useStyles();

  const user = useSelector((state) => state.auth.user);

  const [loading, setLoading] = useState(false);
  const [prontuarios, setProntuarios] = useState();
  const [selectedProntuario, setSelectedProntuario] = useState();
  const [anchor, setAnchor] = useState(null);
  const [page, setPage] = useState(1);

  async function listProntuarios(formData, search) {
    try {
      setLoading(true);
      const { data } = await api.get(
        search ? "/prontuarios?search=".concat(search) : "/prontuarios"
      );
      setProntuarios(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSelectedProntuario(null);
    setAnchor(null);
  }

  useEffect(() => {
    listProntuarios();
  }, []);

  return (
    <Container>
      <ModalEnvio
        anchor={anchor}
        prontuario={selectedProntuario}
        onClose={handleClose}
      />

      <Box position="sticky" top="0" zIndex="10">
        <SearchBar
          placeholder="Pesquise por nome ou CPF"
          titulo="Prontuários"
          onSearch={listProntuarios}
        />
      </Box>

      <Content>
        {user.cargo_id === 4 && (
          <Box marginBottom="30px">
            <Box display="flex">
              <Button
                style={{ padding: "12px 16px" }}
                onClick={() => history.push("/prontuarios/novo")}
              >
                <AddCircleIcon style={{ marginRight: 8 }} />
                Adicionar Paciente
              </Button>
            </Box>
          </Box>
        )}
        <Box width="100%" display="flex" justifyContent="center">
          {loading && <CircularProgress />}
        </Box>

        {!loading && (
          <Grid container>
            <Grid container style={{ paddingLeft: 16, marginBottom: 16 }}>
              <Grid item sm={4}>
                <TableLabel>Nome do paciente</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>CPF</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>RG</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>Cartão SUS</TableLabel>
              </Grid>
            </Grid>

            {prontuarios?.map((prontuario) => (
              <Grid container className={classes.prontuarioItem}>
                <Grid item sm={4}>
                  <TableText>{prontuario.paciente.nome}</TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {prontuario?.paciente.CPF
                      ? masks.cpf(prontuario.paciente.CPF)
                      : "Não informado"}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {prontuario?.paciente.RG
                      ? masks.rg(prontuario.paciente.RG)
                      : "Não informado"}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {prontuario.paciente.cartao_sus || "Não informado"}
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
                  {user.cargo_id === 4 && (
                    <MuiButton
                      className={classes.actionButton}
                      onClick={(e) => {
                        setAnchor(e.target);
                        setSelectedProntuario(prontuario);
                      }}
                    >
                      <ArrowSendIcon />
                    </MuiButton>
                  )}
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Pagination />
            </Grid>
          </Grid>
        )}
      </Content>
    </Container>
  );
};

export default ProntuariosList;
