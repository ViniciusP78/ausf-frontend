import React, { useState, useEffect } from "react";

import api from "api";

import debounce from "awesome-debounce-promise";

import Form from "components/Form";
import DateInput from "components/Input/Datepicker";
import Button from "components/Button";
import Autocomplete from "components/Input/Autocomplete";
import { Dialog } from "@material-ui/core";
import useStyles from "./styles";

const debouncedMedicSearch = debounce(async (search) => {
  return api.get(`users?cargo=2&search=${search}`);
}, 400);

const debouncedPatientSearch = debounce(async (search) => {
  return api.get(`prontuarios?search=${search}`);
}, 400);

const ModalConsulta = ({ ...props }) => {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const [medics, setMedics] = useState();
  const [patients, setPatients] = useState();

  const [date, setDate] = useState();
  const [selectedMedico, setSelectedMedico] = useState(null);

  async function getUsers() {
    try {
      const { data } = await api.get("/users?cargo=2");
      setMedics(data);
    } catch (error) {}
  }

  async function getPatients() {
    try {
      const { data } = await api.get("/prontuarios");
      setMedics(data);
    } catch (error) {}
  }

  async function searchMedics(e) {
    e.persist();
    const { data } = await debouncedMedicSearch(e.target.value);

    setMedics(data);
  }

  async function searchPatients(e) {
    e.persist();
    const { data } = await debouncedPatientSearch(e.target.value);

    setMedics(data);
  }

  useEffect(() => {
    getUsers();
    getPatients();
  }, []);

  return (
    <Dialog classes={{ paper: classes.modal }} {...props}>
      {step === 0 && (
        <>
          <p className={classes.title}>Data e horário</p>
          <p className={classes.subtitle}>
            Selecione uma data e horário para a consulta
          </p>
          <DateInput
            placeholderText="Selecione uma data"
            selected={date}
            onChange={(date) => setDate(date)}
            style={{ marginBottom: 32 }}
            dateFormat="dd/MM/yyyy hh:mm"
          />

          <Button fullWidth onClick={() => setStep(step + 1)}>
            Continuar
          </Button>
        </>
      )}

      {step === 1 && (
        <>
          <p className={classes.title}>Médico e paciente</p>
          <p className={classes.subtitle}>
            Selecione um médico e verifique os horários das consultas já
            agendadas com ele
          </p>
          <Form style={{ width: "100%", marginBottom: 32 }}>
            <Autocomplete
              label="Selecione um médico"
              name="medic"
              colorLabel="grey"
              options={medics}
              getOptionValue={(medic) => medic.id}
              getOptionLabel={(medic) => medic.name}
              autoComplete="off"
              onInputChange={searchMedics}
              filterOptions={(options, state) => options}
              onChange={(e, value) => setSelectedMedico(value)}
              fullWidth
              style={{ marginBottom: 12 }}
            />

            <Autocomplete
              label="Selecione um paciente"
              name="medic"
              colorLabel="grey"
              options={patients}
              getOptionValue={(prontuario) => prontuario.id}
              getOptionLabel={(prontuario) => prontuario?.paciente?.nome}
              autoComplete="off"
              onInputChange={searchPatients}
              filterOptions={(options, state) => options}
              onChange={(e, value) => setSelectedMedico(value)}
              fullWidth
            />
          </Form>

          <Button fullWidth onClick={() => setStep(step + 1)}>
            Continuar
          </Button>
        </>
      )}
    </Dialog>
  );
};

export default ModalConsulta;
