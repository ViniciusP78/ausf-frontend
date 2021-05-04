import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "api";
import validate from "utils/yupValidate";
import createSchema from "validators/Prontuario/create.schema";

import { ReactComponent as CancelIcon } from "assets/icons/cancel-solid.svg";
import { ReactComponent as SaveIcon } from "assets/icons/save.svg";

import { Grid } from "@material-ui/core";
import GenericInput from "components/Input";
import Form from "components/Form";
import GenericButton from "components/Button";
import { Heading } from "components/Text";
import SearchBar from 'components/Searchbar';
import Box from '@material-ui/core/Box';

import { Container, Content } from "./styles";

const Input = (props) => <GenericInput {...props} colorLabel="grey" />;

const Button = ({ style, ...props }) => (
  <GenericButton style={{ padding: 16, ...style }} {...props} />
);

const CadastrarProntuario = () => {
  const history = useHistory();

  const { id } = useParams();

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [prontuario, setProntuario] = useState();

  async function getProntuario() {
    try {
      setLoading(true);
      const { data } = await api.get(`/prontuarios/${id}`);
      formRef.current.setData(data.paciente);
      formRef.current.setFieldValue("observacoes", data.observacoes);
      setProntuario(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) getProntuario();
  }, [id]);

  async function submitForm(formData) {
    try {
      const { success, errors } = await validate(createSchema, formData);
      if (!success) return formRef.current.setErrors(errors);

      const {
        nome,
        CPF,
        data_nascimento,
        nome_mae,
        observacoes,
        cidade_nascimento,
      } = formData;

      const paciente = {
        nome,
        CPF,
        data_nascimento: new Date(),
        nome_mae,
        sexo: "M",
        cidade_nascimento,
      };

      if (id) {
        await api.put(`/pacientes/${prontuario.paciente_id}`, paciente);
        const prontuarioForm = { observacoes };
        await api.put(`/prontuarios/${id}`, prontuarioForm);
      } else {
        const { data: novoPaciente } = await api.post("/pacientes", paciente);

        const prontuario = { paciente_id: novoPaciente.id, observacoes };
        await api.post("/prontuarios", prontuario);
      }

      history.push('/prontuarios');
    } catch (error) {
      console.log("zz", error);
    }
  }

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar placeholder="Pesquise por nome ou CPF" titulo="Prontuários"/>
      </Box>
      <Content>
        <Form onSubmit={submitForm} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Heading level={2}>Dados do paciente</Heading>
            </Grid>
            <Grid item xs={4}>
              <Input name="nome" label="Nome completo" />
            </Grid>
            <Grid item xs={4}>
              <Input name="nome_mae" label="Nome da mãe" />
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={4}>
              <Input name="CPF" label="CPF do paciente" />
            </Grid>
            {!id && (
              <>
                <Grid item xs={4}>
                  <Input
                    name="data_nascimento"
                    label="Data de nascimento"
                    type="date"
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </>
            )}

            <Grid item xs={4}>
              <Input name="cidade_nascimento" label="Cidade de nascimento" />
            </Grid>

            <Grid item xs={12} style={{ marginTop: 48 }}>
              <Heading level={2}>Outras informações</Heading>
            </Grid>
            <Grid item xs={12}>
              <Input
                type="textarea"
                name="observacoes"
                label="Observações"
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                backgroundColor="grey"
                color="light"
                style={{ marginRight: 8 }}
                onClick={() => history.push("/prontuarios")}
              >
                <CancelIcon style={{ marginRight: 8 }} />
                Cancelar
              </Button>

              <Button type="submit">
                <SaveIcon style={{ marginRight: 8 }} />
                Finalizar {id ? 'edição' : 'cadastro'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Content>
    </Container>
  );
};

export default CadastrarProntuario;
