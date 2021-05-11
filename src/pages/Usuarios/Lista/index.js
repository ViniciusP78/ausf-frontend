import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import api from "api";

import { ReactComponent as InfoIcon } from "assets/icons/info.svg";
import { ReactComponent as ArrowSendIcon } from "assets/icons/arrow-send.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import cargos from "utils/cargos"

// import ModalEnvio from "./ModalEnvio";

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

const UsuariosList = () => {
  const history = useHistory();
  const classes = useStyles();

  const user = useSelector(state => state.auth.user);

  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState();
  const [selectedUsuarios, setSelectedUsuario] = useState();
  const [anchor, setAnchor] = useState(null);

  async function listUsuarios(formData, search) {
    try {
      setLoading(true);
      const { data } = await api.get(
        search ? "/users?search=".concat(search) : "/users"
      );
      setUsuarios(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSelectedUsuario(null);
    setAnchor(null);
  }


  useEffect(() => {
    listUsuarios();
  }, []);

  return (
    <Container>
      {/* <ModalEnvio
        anchor={anchor}
        usuario={selectedUsuario}
        onClose={handleClose}
      /> */}

      <Box position="sticky" top="0" zIndex="10">
        <SearchBar
          placeholder="Pesquise por nome ou CPF"
          titulo="Usuários"
          onSearch={listUsuarios}
        />
      </Box>

      <Content>
        {user.cargo_id === 1 && (
          <Box marginBottom="30px">
            <Box display="flex">
              <Button
                style={{ padding: "12px 16px" }}
                onClick={() => history.push("/usuarios/novo")}
              >
                <AddCircleIcon style={{ marginRight: 8 }} />
                Adicionar Usuário
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
                <TableLabel>Nome</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>Login</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>Cargo</TableLabel>
              </Grid>
              <Grid item sm={2}>
                <TableLabel>Status</TableLabel>
              </Grid>
            </Grid>

            {usuarios?.map((usuario) => (
              <Grid container className={classes.usuarioItem}>
                <Grid item sm={4}>
                  <TableText>
                    {usuario.name}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {usuario.login}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {cargos[usuario.cargo_id - 1]}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <TableText>
                    {usuario.status ? 'Ativo': 'Inativo'}
                  </TableText>
                </Grid>
                <Grid item sm={2}>
                  <MuiButton
                    className={classes.actionButton}
                    onClick={() =>
                      history.push(`/usuarios/${usuario.id}`)
                    }
                  >
                    <InfoIcon />
                  </MuiButton>
                  {user.cargo_id === 4 && (
                    <MuiButton
                      className={classes.actionButton}
                      onClick={(e) => {
                        setAnchor(e.target);
                        setSelectedUsuario(usuario);
                      }}
                    >
                      <ArrowSendIcon />
                    </MuiButton>
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Content>
    </Container>
  );
};


export default UsuariosList;
