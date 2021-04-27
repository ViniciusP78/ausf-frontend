import  React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "api";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CircularProgress from '@material-ui/core/CircularProgress';
import InputField from "./InputField"
import { Container, Label, InputContainer} from "./styles";

const ProntuariosList = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [prontuarios, setProntuarios] = useState();

  async function listProntuarios(formData) {
    try {
      setLoading(true);
      const { data } = await api.get("/prontuarios/");
      setProntuarios(data);
    } catch (error) {
    }finally {
      setLoading(false);
    }
    
  }
  useEffect(()=>{listProntuarios()},[]);
  return (
    <Container>
        <div>
            <InputContainer>
                <Label>Nome completo</Label>
                TESTE
            </InputContainer>
            <InputContainer>
                <Label>Nome da mãe</Label>
            </InputContainer>
            <InputContainer>
                <Label>Cartão SUS</Label>
            </InputContainer>
            <InputContainer>
                <Label>Logradouro</Label>
            </InputContainer>
        </div>
        <div>
            <InputContainer>
                <Label>CPF</Label>
            </InputContainer>
            <InputContainer>
                <Label>Nome do pai</Label>
            </InputContainer>
            <InputContainer>
                <Label>RG</Label>
            </InputContainer>
            <InputContainer>
                <Label>Data de nascimento</Label>
            </InputContainer>
        </div>
      
    </Container>
  );
};

export default ProntuariosList;
