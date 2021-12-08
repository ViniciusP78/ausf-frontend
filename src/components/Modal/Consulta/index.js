import React, { useState, useEffect, useRef } from "react";

import api from "api";
import { steps } from "validators/Consulta/create.schema";
import validate from "utils/yupValidate";

import debounce from "awesome-debounce-promise";
import { useDispatch } from "react-redux";
import Form from "components/Form";
import DateInput from "components/Input/Datepicker";
import Button from "components/Button";
import Autocomplete from "components/Input/Autocomplete";
import { Dialog } from "@material-ui/core";
import { openAlert } from "store/modules/alert/actions";
import useStyles, { StepContainer } from "./styles";

const debouncedMedicSearch = debounce(async (search) => {
  return api.get(`users?cargo=2&search=${search}`);
}, 400);

const debouncedPatientSearch = debounce(async (search) => {
  return api.get(`prontuarios?search=${search}`);
}, 400);

const ModalConsulta = ({ onClose, onSubmit, open, ...props }) => {
  const classes = useStyles();

  const formRef = useRef();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [medics, setMedics] = useState();
  const [patients, setPatients] = useState();

  const [date, setDate] = useState();
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  function closeModal() {
    setStep(0);
    setSelectedMedico(null);
    setSelectedPatient(null);
    setDate(null);

    onClose();
    onSubmit();
  }

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

  async function createConsulta(data_agendada) {
    try {
      const consulta = {
        data_agendada,
        prontuario_id: selectedPatient?.id,
        medico_id: selectedMedico?.id,
      };

      const { success, errors } = await validate(steps[step], consulta);
      if (!success) return formRef.current.setErrors(errors);
      
      setLoading(true);

      await api.post("/consultas", consulta);

      closeModal();
      dispatch(
        openAlert({
          message: "Consulta agendada",
          severity: "success",
          duration: 5000,
        })
      );
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  async function nextStep(formData) {
    try {
      const { success, errors } = await validate(steps[step], formData);
      if (!success) return formRef.current.setErrors(errors);
      setStep(step + 1);
    } catch (error) {}
  }

  async function handleSubmit(formData) {
    if (step === 0) return nextStep(formData);
    await createConsulta(formData.data_agendada);
  }

  useEffect(() => {
    getUsers();
    getPatients();
  }, []);

  useEffect(() => {
    setStep(0);
  }, [open]);

  return (
    <Dialog onClose={onClose} open={open} classes={{ paper: classes.modal }} {...props}>
      <Form onSubmit={handleSubmit} ref={formRef} style={{ width: "100%" }}>
        <StepContainer hide={step != 0}>
          <p className={classes.title}>Data e horário</p>
          <p className={classes.subtitle}>
            Selecione uma data e horário para a consulta
          </p>
          <DateInput
            name="data_agendada"
            placeholderText="Selecione uma data"
            showTimeSelect
            dateFormat="dd/MM/yyyy hh:mm"
            style={{ width: '100%' }}
          />

          <Button
            style={{ marginTop: 32, width: "100%" }}
            fullWidth
            type="submit"
          >
            Continuar
          </Button>
        </StepContainer>

        <StepContainer hide={step != 1}>
          <p className={classes.title}>Médico e paciente</p>
          <p className={classes.subtitle}>
            Selecione um médico e verifique os horários das consultas já
            agendadas com ele
          </p>
          <Autocomplete
            label="Selecione um médico"
            name="medico_id"
            colorLabel="grey"
            options={medics}
            getOptionValue={(medic) => medic.id}
            getOptionLabel={(medic) => medic.name}
            autoComplete="off"
            onInputChange={searchMedics}
            filterOptions={(options, state) => options}
            onChange={(e, value) => setSelectedMedico(value)}
            fullWidth
          />

          <div style={{ marginTop: 24 }} />

          <Autocomplete
            label="Selecione um paciente"
            name="prontuario_id"
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

          <Button
            style={{ marginTop: 32, width: "100%" }}
            fullWidth
            loading={loading}
            type="submit"
          >
            Agendar Consulta
          </Button>
        </StepContainer>
      </Form>
    </Dialog>
  );
};

export default ModalConsulta;
