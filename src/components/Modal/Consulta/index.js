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

const ModalConsulta = ({ onClose, onSubmit, ...props }) => {
  const classes = useStyles();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [medics, setMedics] = useState();
  const [patients, setPatients] = useState();

  const [date, setDate] = useState();
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  async function getUsers() {
    try {
      const { data } = await api.get("/users?cargo=2");
      setMedics(data);
    } catch (error) {}
  }

  async function getPatients() {
    try {
      const { data } = await api.get("/prontuarios");
      setPatients(data);
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

    setPatients(data);
  }

  async function submit() {
    try {
      const consulta = {
        data_agendada: date,
        prontuario_id: selectedPatient.id,
        medico_id: selectedMedico.id,
      };

      setLoading(true);

      await api.post("/consultas", consulta);

      onClose();
      onSubmit();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
    getPatients();
  }, []);

  useEffect(() => {
    console.log(selectedMedico);
  }, [selectedMedico]);

  return (
    <Dialog onClose={onClose} classes={{ paper: classes.modal }} {...props}>
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
            style={{ marginBottom: 32, width: '100%' }}
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
              style={{ marginBottom: 24 }}
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
              onChange={(e, value) => setSelectedPatient(value)}
              fullWidth
            />
          </Form>

          <Button
            fullWidth
            loading={loading}
            onClick={() => (step === 0 ? setStep(1) : submit())}
          >
            {step === 1 ? "Agendar Consulta" : "Continuar"}
          </Button>
        </>
      )}
    </Dialog>
  );
};

export default ModalConsulta;
