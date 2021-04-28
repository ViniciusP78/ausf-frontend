import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "api";
import Button from "components/Button";
import Field from "./InputField";
import { Grid, CircularProgress } from "@material-ui/core";
import { Container } from "./styles";

const ProntuariosList = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [prontuario, setProntuario] = useState();

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

  useEffect(() => {
    if (id) getProntuario();
  }, [id]);

  return (
    <Container>
      <Grid container>
        {(loading && !prontuario) ? (
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress/>
          </Grid>
        ) : (<>
          <Grid item xs={12} sm={4}>
            <Field label="Nome completo" value={prontuario?.paciente.nome} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Field label="CPF" value={prontuario?.paciente.CPF} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Field label="Nome da mãe" value={prontuario?.paciente.nome_mae} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field label="Nome do pai" value={prontuario?.paciente.nome_pai} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Field label="Cartão SUS" value={prontuario?.paciente.cartao_sus} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field label="RG" value={prontuario?.paciente.RG} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field label="Logradouro" value={prontuario?.paciente.logradouro} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Field label="Data de nascimento" value={prontuario?.paciente.data_nascimento} />
          </Grid>
          <Grid item xs={12} >
          <Button
            style={{ padding: 8 }}
            onClick={() => history.push(`/prontuarios/edit/${prontuario.id}`)}
          >
            Editar prontuário
          </Button>
          </Grid>
          
        </>)}
      </Grid>
    </Container>
  );
};

export default ProntuariosList;
