import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "api";

import debounce from "awesome-debounce-promise";
import validate from "utils/yupValidate";

import Form from "components/Form";
import Button from "components/Button";
import Autocomplete from "components/Input/Autocomplete";
import { Dialog } from "@material-ui/core";
import GenericInput from "components/Input";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const debouncedEnfermeirsSearch = debounce(async (search) => {
  return api.get(`users?cargo=3&search=${search}`);
}, 400);


const debouncedPatientSearch = debounce(async (search) => {
  return api.get(`prontuarios?search=${search}`);
}, 400);

const Input = (props) => <GenericInput {...props} colorLabel="grey" />;

const ModalConsulta = ({ onClose, onSubmit, ...props }) => {
  const classes = useStyles();
  const formRef = useRef();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id:prontuario_id } = useParams();

  const [enfermeirs, setEnfermeirs] = useState();
  const [patients, setPatients] = useState();

  const [date, setDate] = useState();
  const [selectedEnfermeiro, setSelectedEnfermeiro] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const user = useSelector((state) => state.auth.user);

  function closeModal() {
    setStep(0);
    setSelectedEnfermeiro(null)
    setSelectedPatient(null);
    setDate(null);

    onClose();
    onSubmit();
  }

  async function getUsers() {
    try {
      const { data } = await api.get("/users?cargo=3");
      setEnfermeirs(data);
    } catch (error) {}
  }

  async function getPatients() {
    try {
      const { data } = await api.get("/prontuarios");
      setPatients(data);
    } catch (error) {}
  }

  async function searchEnfermeirs(e) {
    e.persist();
    const { data } = await debouncedEnfermeirsSearch(e.target.value);

    setEnfermeirs(data);
  }

  async function searchPatients(e) {
    e.persist();
    const { data } = await debouncedPatientSearch(e.target.value);

    setPatients(data);
  }

  async function submit(formData) {
    try {
      

      const {
        pressao: pressao,
        altura: altura,
        peso: peso,
        } = formData;

      const triagem = {
        pressao: pressao,
        altura: altura,
        peso: peso,
        enfermeira_id:user.id,
        prontuario_id:prontuario_id,
      };

      setLoading(true);

      await api.post("/triagens", triagem);

      closeModal();
    } catch (error) {
        console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
    getPatients();
  }, []);

  useEffect(() => {
    console.log(selectedEnfermeiro);
  }, [selectedEnfermeiro]);

  return (
    <Dialog onClose={onClose} classes={{ paper: classes.modal }} {...props}>
      {step === 0 && (
        <>
          <p className={classes.title}>Triagem</p>
          <p className={classes.subtitle}>
            Dados do Paciente
          </p>
          <Form ref={formRef} onSubmit={submit}>
            <Grid container spacing={2}>
                <Input name="peso" label="Peso"/>
                <Input name="altura" label="Altura" />
                <Input name="pressao" label="Pressão" />
            </Grid>
            <Button fullWidth type="submit">
                Continuar
            </Button>
           </Form>

          
        </>
      )}
    </Dialog>
  );
};

export default ModalConsulta;
