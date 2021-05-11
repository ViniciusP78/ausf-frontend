import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openAlert } from "store/modules/alert/actions";

import api from "api";
import validate from "utils/yupValidate";
import createSchema from "validators/User/create.schema";

import { ReactComponent as CancelIcon } from "assets/icons/cancel-solid.svg";
import { ReactComponent as SaveIcon } from "assets/icons/save.svg";

import { Grid, Select, MenuItem  } from "@material-ui/core";
import GenericInput from "components/Input";
import Form from "components/Form";
import GenericButton from "components/Button";
import { Heading } from "components/Text";
import SearchBar from 'components/Searchbar';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles, { Container, Content } from "./styles";

import cargos from "utils/cargos"

const Input = (props) => <GenericInput {...props} colorLabel="grey" />;

const Button = ({ style, ...props }) => (
  <GenericButton style={{ padding: 16, ...style }} {...props} />
);

const CadastrarUsuario = () => {
  const history = useHistory();
  const classes = useStyles();

  const { id } = useParams();

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState();
  const [cargo, setCargo] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCargo(event.target.value);
  };

  async function getUsuario() {
    try {
      setLoading(true);
      const { data } = await api.get(`/users/${id}`);
      formRef.current.setData(data);
      setUsuario(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) getUsuario();
  }, [id]);

  async function submitForm(formData) {
    try {
      formData.cargo_id=cargo;
      const { success, errors } = await validate(createSchema, formData);
      console.log(errors)
      if (!success) return formRef.current.setErrors(errors);
      const {
        name,
        login,
        cargo_id,
        password,
      } = formData;

      const usuarioData = {
        name,
        login,
        cargo_id,
        password,
      };
      if (id) {
        await api.put(`/users/${usuario.id}`, usuarioData);
        dispatch(
            openAlert({
              message: "Usuário atualizado",
              severity: "success",
              duration: 5000,
            })
          );
      } else {
        const { data: novoUsuario } = await api.post("/users", usuarioData);
        dispatch(
            openAlert({
              message: "Novo usuário recebido",
              severity: "success",
              duration: 5000,
            })
          );
      }
      
      history.push('/usuarios');
    } catch (error) {
      console.log("zz", error);
      if(error?.response?.data.message=='Login already used'){
        dispatch(
            openAlert({
              message: "Login já está sendo usado",
              severity: "error",
              duration: 5000,
            })
          );
          formRef.current.setFieldError('login', 'Login já está sendo usado');
      }

    }
  }

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar placeholder="Pesquise por nome ou login" titulo="Usuários"/>
      </Box>
      <Content>
        <Form onSubmit={submitForm} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Heading level={2}>Dados do Usuário</Heading>
            </Grid>
            <Grid item xs={4}>
              <Input name="name" label="Nome completo" />
            </Grid>
            <Grid item xs={4}>
              <Input name="login" label="Login" />
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={4}>
              <InputLabel shrink id="cargo_id-label" className={classes.selectLabel}>
                    Cargo
              </InputLabel>
              <Select
                labelId="cargo_id"
                label="cargo_id"
                name="cargo_id"
                id="cargo_id"
                value={cargo}
                onChange={handleChange}
                className={classes.selectItem}
                >
                <MenuItem value={1}>{cargos[0]}</MenuItem>
                <MenuItem value={2}>{cargos[1]}</MenuItem>
                <MenuItem value={3}>{cargos[2]}</MenuItem>
                <MenuItem value={4}>{cargos[3]}</MenuItem>
               </Select>
            </Grid>
            <Grid item xs={4}>
              <Input name="password" label="Senha" type="password"/>
            </Grid>


            <Grid item xs={12}>
              <Button
                backgroundColor="grey"
                color="light"
                style={{ marginRight: 8 }}
                onClick={() => history.push("/usuarios")}
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

export default CadastrarUsuario;
