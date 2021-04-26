import React from "react";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import Card from "components/CardProntuario";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Container } from "./styles";

const ProntuariosList = () => {
  return (
    <Container>
      <Box minHeight="100px">
        <Box display="flex">
          <Button type="submit">
            <AddCircleIcon />
            Adicionar Paciente
          </Button>
        </Box>
      </Box>
      <Card />
    </Container>
  );
};

export default ProntuariosList;
