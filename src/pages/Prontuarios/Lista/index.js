import React from "react";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Container } from "./styles";

const ProntuariosList = () => {
  return (
    <Container>
      <Box marginBottom="30px">
        <Box display="flex">
          <Button style={{padding:8}}>
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
