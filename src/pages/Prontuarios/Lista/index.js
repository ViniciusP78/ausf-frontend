import  React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import api from "api";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from "./styles";

const ProntuariosList = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [prontuarios, setProntuarios] = useState();

  async function listProntuarios(formData) {
    try {
      setLoading(true);
      const { data } = await api.get("/prontuarios");
      setProntuarios(data);
    } catch (error) {
    }finally {
      setLoading(false);
    }
    
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
      <Box width="100%" display="flex" justifyContent="center">
      {loading && <CircularProgress />}
      </Box>
      {prontuarios?.map((prontuario)=>(<Card prontuario={prontuario}/>))}
    </Container>
  );
};

export default ProntuariosList;
