import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openConfirmation } from "store/modules/confirmation/actions";

import api from "api";

import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as UploadIcon } from "assets/icons/upload.svg";

import Field from "./InputField";
import Button from "components/Button";
import {
  Grid,
  CircularProgress,
  Dialog,
  Box,
  Button as MuiButton,
} from "@material-ui/core";
import SearchBar from "components/Searchbar";
import Text from "components/Text";
import CardExame from "./CardExame";
import useStyles, { Container, Content, Title, ExameContainer } from "./styles";

import { format } from "date-fns";

const TableLabel = (props) => (
  <Text color="grey" weight={500} size="15px" {...props} />
);

const TableText = (props) => <Text color="dark" weight={400} {...props} />;

const ProntuariosList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const examInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [prontuario, setProntuario] = useState();
  const [consultas, setConsultas] = useState();
  const [modalOpen, setModal] = useState(false);
  const [loadings, setLoadings] = useState({ exam: false, consultas: true });

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

  async function listConsultas() {
    try {
      const { data } = await api.get("/consultas", {
        params: { search: prontuario.paciente.CPF },
      });
      setConsultas(data);
    } catch (error) {
    } finally {
    }
  }

  function confirmDeletion() {
    dispatch(
      openConfirmation({
        content: "Deseja mesmo remover esse prontuário ?",
        onYes: deleteProntuario,
      })
    );
  }

  async function uploadExam(event) {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.set('file', file);

      setLoadings( prev => ({ ...prev, exam: true }));
      await api.post('/uploads', formData);
    } catch (error) {}
    finally {
      setLoadings( prev => ({ ...prev, exam: false }));
    }
  }

  useEffect(() => {
    if (id) {
      getProntuario();
    }
  }, [id]);

  useEffect(() => {
    if (prontuario) listConsultas();
  }, [prontuario]);

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar
          backRoute="/prontuarios"
          titulo={prontuario?.paciente?.nome}
        />
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
                <Field
                  label="Nome completo"
                  value={prontuario?.paciente.nome}
                />
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
                {prontuario?.paciente.data_nascimento && (
                  <Field
                    label="Data de nascimento"
                    value={format(
                      new Date(prontuario?.paciente.data_nascimento),
                      "dd/MM/yyyy"
                    )}
                  />
                )}
              </Grid>

              <Grid container style={{ marginTop: 64 }}>
                <Grid item xs={12}>
                  <Title>Consultas</Title>
                </Grid>
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
                      <TableText>
                        {consulta?.prontuario.paciente.nome}
                      </TableText>
                    </Grid>
                    <Grid item sm={3}>
                      <TableText>
                        {format(
                          new Date(consulta?.data_agendada),
                          "dd/MM/yyyy hh:mm"
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

              <Grid container style={{ marginTop: 64 }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <Title style={{ margin: 0 }}>Exames</Title>

                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="application/pdf"
                    onInput={uploadExam}
                    ref={examInputRef}
                  />

                  <Button
                    style={{ marginLeft: "auto" }}
                    onClick={() => examInputRef.current.click()}
                    loading={loadings.exam}
                  >
                    <UploadIcon style={{ marginRight: 12 }} />
                    Enviar exame
                  </Button>
                </Grid>
                <Grid item xs={12} className={classes.examesContainer}>
                  {[1,2,3,4,5,6,7,8,9].map(item => (
                    <ExameContainer>
                      <CardExame />
                    </ExameContainer>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ marginTop: 64 }}>
                <Button
                  style={{ padding: 8, marginRight: 8 }}
                  onClick={() =>
                    history.push(`/prontuarios/edit/${prontuario.id}`)
                  }
                >
                  Editar prontuário
                </Button>
                <Button
                  style={{ padding: 8, marginRight: 8 }}
                  backgroundColor="error"
                  onClick={confirmDeletion}
                >
                  <TrashIcon style={{ marginRight: 8 }} />
                  Deletar
                </Button>
                {/* <Button
                  style={{ padding: 8 }}
                  onClick={() =>
                    history.push()
                  }
                >
                  Realizar triagem
                </Button> */}
              </Grid>
            </>
          )}
        </Grid>
      </Content>
    </Container>
  );
};

export default ProntuariosList;
