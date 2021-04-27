import React from "react";
import { useHistory } from 'react-router-dom';

import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Container } from "./styles";

const ProntuariosList = () => {
  const history = useHistory();

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
      <Card />
    </Container>
  );
};

export default ProntuariosList;
