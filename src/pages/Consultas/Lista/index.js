import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "api";

import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";
import { ReactComponent as ArrowSendIcon } from "assets/icons/arrow-send.svg";

import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Text from "components/Text";
import { Grid, CircularProgress, Button as MuiButton } from "@material-ui/core";
import SearchBar from 'components/Searchbar';

import useStyles, { Container, Content } from "./styles";

import { format } from 'date-fns';

const TableLabel = (props) => <Text color="grey" weight={500} size="15px" {...props} />;

const TableText = (props) => <Text color="dark" weight={400} {...props} />;

const ConsultasList = () => {
  const history = useHistory();
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [consultas, setConsultas] = useState();

  async function listConsultas(formData) {
    try {
      setLoading(true);
      const { data } = await api.get("/consultas");
      setConsultas(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listConsultas();
  }, []);

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar placeholder="Pesquise por nome ou CPF do paciente" titulo="Consultas"/>
      </Box>
      <Content>
        <Box marginBottom="30px">
            <Grid container style={{ marginBottom: 50 }} className={classes.consultaFilter}>
                <Grid item>
                    <TableLabel><FilterIcon className={classes.filterIcon}/></TableLabel>
                </Grid>
                <Grid item sm={2} className={classes.consultaOfDay}>
                    <TableLabel>Consultas do dia</TableLabel>
                </Grid>
                <Grid item sm={7}>
                    <TableLabel>Todas consultas</TableLabel>
                </Grid>
                <Grid item sm={2}>
                    <TableLabel>Filtrar por data</TableLabel>
                </Grid>
            </Grid>
            <Box display="flex">
            <Button
                style={{ padding: "12px 16px" }}
                onClick={() => history.push("/consulta/novo")}
            >
                <AddCircleIcon style={{ marginRight: 8 }} />
                Agendar  Consulta
            </Button>
            </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
            {loading && <CircularProgress />}
        </Box>

        {!loading && <Grid container>
            <Grid container style={{ paddingLeft: 16, marginBottom: 16 }}>
                <Grid item sm={3}>
                    <TableLabel>Nome do médico</TableLabel>
                </Grid>
                <Grid item sm={3}>
                    <TableLabel>Nome do paciente</TableLabel>
                </Grid>
                <Grid item sm={2}>
                    <TableLabel>Data agendada</TableLabel>
                </Grid>
                <Grid item sm={2}>
                    <TableLabel>Status</TableLabel>
                </Grid>
            </Grid>

            {consultas?.map((consulta) => (
            <Grid container className={classes.consultaItem}>
                <Grid item sm={3}>
                <TableText>{consulta?.medico.name}</TableText>
                </Grid>
                <Grid item sm={3}>
                <TableText>
                    {consulta?.prontuario.paciente.nome}
                </TableText>
                </Grid>
                <Grid item sm={2}>
                <TableText>
                    {format(new Date(consulta?.data_agendada), 'dd/MM/yyyy')}
                </TableText>
                </Grid>
                <Grid item sm={2}>
                <TableText>
                    {consulta?.status}
                </TableText>
                </Grid>
                <Grid item sm={2}>
                <MuiButton
                    className={classes.actionButton}
                    onClick={() => history.push(`/consultas/${consulta.id}`)}
                >
                    <InfoIcon />
                </MuiButton>
                </Grid>
            </Grid>
            ))}
        </Grid>}
      </Content>
    </Container>
  );
};

export default ConsultasList;
