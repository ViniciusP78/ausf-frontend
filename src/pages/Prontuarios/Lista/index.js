import  React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "api";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Container } from "./styles";

const ProntuariosList = () => {
  const history = useHistory();
  const [prontuarios, setProntuarios] = useState();

  async function listProntuarios(formData) {
    try {
      const { data } = await api.get("/prontuarios");
      setProntuarios(data);
      console.log(data);
      
    } catch (error) {}
  }
  useEffect(()=>{listProntuarios()},[]);
  return (
    <Container>
      <Box marginBottom="30px">
        <Box display="flex">
          <Button style={{padding:8}} onClick={() => history.push('/prontuarios/novo')}>
            <AddCircleIcon style={{marginRight:8}}/>
            Adicionar Paciente
          </Button>
        </Box>
      </Box>
      {prontuarios?.map((prontuario)=>(<Card prontuario={prontuario}/>))}
    </Container>
  );
};

export default ProntuariosList;
