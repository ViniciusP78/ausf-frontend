import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openConfirmation } from "store/modules/confirmation/actions";

import api from "api";

import { ReactComponent as Trash } from "assets/icons/trash.svg";

import Field from "./InputField";
import Button from "components/Button";
import { Grid, CircularProgress, Dialog } from "@material-ui/core";
import { Container, Content } from "./styles";
import SearchBar from 'components/Searchbar';
import Box from '@material-ui/core/Box';

import { format } from 'date-fns';

const ProntuariosList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [prontuario, setProntuario] = useState();
  const [modalOpen, setModal] = useState(false);

  const { id } = useParams();

  async function getProntuario() {
    try {
      setLoading(true);
      const { data } = await api.get(`/prontuarios/${id}`);
      console.log(data);
      setProntuario(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  async function deleteProntuario() {
    try {
      await api.delete(`/prontuarios/${id}`);
      history.push("/prontuarios");
    } catch (error) {}
  }

  function confirmDeletion() {
    dispatch(
      openConfirmation({
        content: "Deseja mesmo remover esse prontuário ?",
        onYes: deleteProntuario,
      })
    );
  }

  useEffect(() => {
    if (id) getProntuario();
  }, [id]);

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar placeholder="Pesquise por nome ou CPF" titulo="Prontuários"/>
      </Box>
      <Content>
        <Grid container>
          {loading && !prontuario ? (
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <Grid item xs={12} sm={4}>
                <Field label="Nome completo" value={prontuario?.paciente.nome} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field label="CPF" value={prontuario?.paciente.CPF} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field
                  label="Nome da mãe"
                  value={prontuario?.paciente.nome_mae}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  label="Nome do pai"
                  value={prontuario?.paciente.nome_pai}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field
                  label="Cartão SUS"
                  value={prontuario?.paciente.cartao_sus}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field label="RG" value={prontuario?.paciente.RG} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  label="Logradouro"
                  value={prontuario?.paciente.logradouro}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              {prontuario?.paciente.data_nascimento && <Field
                  label="Data de nascimento"
                  value={format(new Date(prontuario?.paciente.data_nascimento), 'dd/MM/yyyy')}
                />}
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ padding: 8, marginRight: 8 }}
                  onClick={() =>
                    history.push(`/prontuarios/edit/${prontuario.id}`)
                  }
                >
                  Editar prontuário
                </Button>
                <Button style={{ padding: 8, marginRight: 8  }} backgroundColor="error" onClick={confirmDeletion}>
                  <Trash style={{ marginRight: 8 }} />
                  Deletar
                </Button>
                <Button
                  style={{ padding: 8 }}
                  onClick={() =>
                    history.push()
                  }
                >
                  Realizar triagem
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Content>
    </Container>
  );
};

export default ProntuariosList;
