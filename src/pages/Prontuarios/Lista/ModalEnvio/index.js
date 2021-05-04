import React, { useEffect, useState } from "react";

import { ReactComponent as UserIcon } from "assets/icons/person.svg";

import socket from "services/socket";
import api from "api";

import debounce from 'awesome-debounce-promise';

import Form from "components/Form";
import Input from "components/Input";
import Autocomplete from "components/Input/Autocomplete";
import Button from "components/Button";
import { Menu } from "@material-ui/core";
import useStyles from "./styles";

const debouncedSearch = debounce(async (search) => {
  return api.get(`users?cargo=2&search=${search}`);
}, 400);

const ModalEnvio = ({ anchor, prontuario, ...rest }) => {
  const classes = useStyles();

  const [clients, setClients] = useState();
  const [selectedMedico, setSelectedMedico] = useState(null);

  async function getUsers() {
    try {
      const { data } = await api.get("/users?cargo=2");
      setClients(data);
    } catch (error) {}
  }

  async function sendProntuario() {
    socket.emit("enviarProntuario", {
      prontuario: prontuario.id,
      medico: selectedMedico.id,
    });
  }

  async function search(e) {
    e.persist();
    // setLoadingSearch(true);
    const { data } = await debouncedSearch(e.target.value);

    setClients(data);
    // setLoadingSearch(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Menu
      open={Boolean(anchor)}
      anchorEl={anchor}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ paper: classes.menu }}
      {...rest}
    >
      <div>
        <Form>
          <Autocomplete
            label="Procure um médico"
            name="medic"
            colorLabel="grey"
            icon={UserIcon}
            options={clients}
            getOptionValue={(medico) => medico.id}
            getOptionLabel={(medico) => medico.name}
            autoComplete="off"
            onInputChange={search}
            filterOptions={(options, state) => options}
            onChange={(e, value) => setSelectedMedico(value)}
          />
          <Button fullWidth style={{ marginTop: 12 }} onClick={sendProntuario}>
            Enviar prontuário
          </Button>
        </Form>
      </div>
    </Menu>
  );
};

export default ModalEnvio;
