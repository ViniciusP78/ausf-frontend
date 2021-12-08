import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openConfirmation } from "store/modules/confirmation/actions";
import { openAlert } from "store/modules/alert/actions";
import api from "api";

import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as AddCircleIcon } from "assets/icons/add-circle.svg";

import ModalConsulta from "components/Modal/Consulta";
import Button from "components/Button";
import Card from "components/CardProntuario";
import Text from "components/Text";
import {
  Grid,
  CircularProgress,
  Button as MuiButton,
  Box,
  ButtonBase,
} from "@material-ui/core";
import SearchBar from "components/Searchbar";
import Dialog from "components/Dialog";

import useStyles, { Container, Content, DateButton } from "./styles";

import { format } from "date-fns";

const TableLabel = (props) => (
  <Text color="grey" weight={500} size="15px" {...props} />
);

const TableText = (props) => <Text color="dark" weight={400} {...props} />;

const ConsultasList = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const today = useRef(new Date());

  const [loading, setLoading] = useState(false);
  const [consultas, setConsultas] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const [dateFilter, setDateFilter] = useState(today.current);

  async function listConsultas(search) {
    try {
      setLoading(true);
      const { data } = await api.get("/consultas", {
        params: { data: dateFilter, search }
      });
      setConsultas(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  async function deleteConsulta(idConsulta) {
    try {
      const { data } = await api.delete(`consultas/${idConsulta}`);
      listConsultas();
      dispatch(
        openAlert({
          message: "Consulta excluída",
          severity: "success",
          duration: 5000,
        })
      );
    } catch (error) {}
  }

  function confirmDeletion(idConsulta) {
    dispatch(
      openConfirmation({
        onYes: async () => await deleteConsulta(idConsulta),
        content: "Deseja cancelar essa consulta ?",
      })
    );
  }

  useEffect(() => {
    listConsultas();
  }, [dateFilter]);

  return (
    <>
      <ModalConsulta
        onSubmit={listConsultas}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Container>
        <Box position="sticky" top="0" zIndex="10">
          <SearchBar
            placeholder="Pesquise por nome ou CPF do paciente"
            titulo="Consultas"
            onSearch={(e, val) => listConsultas(val)}
          />
        </Box>
        <Content>
          <Box marginBottom="30px">
            <Grid
              container
              style={{ marginBottom: 50 }}
              className={classes.consultaFilter}
            >
              <Grid item>
                <TableLabel>
                  <FilterIcon className={classes.filterIcon} />
                </TableLabel>
              </Grid>
              <Grid item sm={2} style={{ padding: 0 }}>
                <DateButton
                  active={dateFilter?.getTime() === today.current.getTime()}
                  onClick={() => setDateFilter(today.current)}
                >
                  Consultas do dia
                </DateButton>
              </Grid>
              <Grid item sm={2} style={{ padding: 0 }}>
                <DateButton
                  active={dateFilter === null}
                  onClick={() => setDateFilter(null)}
                >
                  Todas consultas
                </DateButton>
              </Grid>
            </Grid>
            <Box display="flex">
              <Button
                onClick={() => setModalOpen(true)}
                style={{ padding: "12px 16px" }}
              >
                <AddCircleIcon style={{ marginRight: 8 }} />
                Agendar Consulta
              </Button>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            {loading && <CircularProgress />}
          </Box>

          {!loading && (
            <Grid container>
              <Grid container style={{ paddingLeft: 16, marginBottom: 16 }}>
                <Grid item sm={3}>
                  <TableLabel>Nome do médico</TableLabel>
                </Grid>
                <Grid item sm={4}>
                  <TableLabel>Nome do paciente</TableLabel>
                </Grid>
                <Grid item sm={2}>
                  <TableLabel>Data agendada</TableLabel>
                </Grid>
              </Grid>

              {consultas?.map((consulta) => (
                <Grid container className={classes.consultaItem}>
                  <Grid item sm={3}>
                    <TableText>{consulta?.medico.name}</TableText>
                  </Grid>
                  <Grid item sm={4}>
                    <TableText>{consulta?.prontuario.paciente.nome}</TableText>
                  </Grid>
                  <Grid item sm={3}>
                    <TableText transform="uppercase">
                      {format(
                        new Date(consulta?.data_agendada),
                        "dd/MM/yyyy hh:mm aaaaa'm'"
                      )}
                    </TableText>
                  </Grid>
                  <Grid item sm={2}>
                    <MuiButton
                      className={classes.actionButton}
                      onClick={() => confirmDeletion(consulta.id)}
                    >
                      <TrashIcon />
                    </MuiButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
        </Content>
      </Container>
    </>
  );
};

export default ConsultasList;
