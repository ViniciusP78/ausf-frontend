import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openConfirmation } from "store/modules/confirmation/actions";

import api from "api";

import { ReactComponent as Trash } from "assets/icons/trash.svg";

import Field from "./InputField";
import Button from "components/Button";
import { Grid, CircularProgress } from "@material-ui/core";
import { Container, Content } from "./styles";
import SearchBar from 'components/Searchbar';
import Box from '@material-ui/core/Box';

import { format } from 'date-fns';
import cargos from "utils/cargos"

const UsuariosList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState({});

  const { id } = useParams();

  async function getUsuario() {
    try {
      setLoading(true);
      const { data } = await api.get(`/users/${id}`);
      console.log(data);
      setUsuario(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  async function deleteUsuario() {
    try {
      await api.delete(`/users/${id}`);
      history.push("/usuarios");
    } catch (error) {}
  }

  function confirmDeletion() {
    dispatch(
      openConfirmation({
        content: "Deseja mesmo remover esse usuário ?",
        onYes: deleteUsuario,
      })
    );
  }

  useEffect(() => {
    if (id) getUsuario();
  }, [id]);

  return (
    <Container>
      <Box position="sticky" top="0" zIndex="10">
        <SearchBar placeholder="Pesquise por nome ou login" titulo="Usuários"/>
      </Box>
      <Content>
        <Grid container>
          {loading && !usuario ? (
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
                <Field label="Nome do usuário" value={usuario?.name} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field label="Login" value={usuario?.login} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field
                  label="Cargo"
                  value={cargos[usuario?.cargo_id - 1]}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  label="Status"
                  value={usuario.status ? 'Ativo': 'Inativo'}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ padding: 8, marginRight: 8 }}
                  onClick={() =>
                    history.push(`/usuarios/edit/${usuario.id}`)
                  }
                >
                  Editar usuário
                </Button>
                <Button style={{ padding: 8 }} backgroundColor="error" onClick={confirmDeletion}>
                  <Trash style={{ marginRight: 8 }} />
                  Deletar
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Content>
    </Container>
  );
};

export default UsuariosList;
