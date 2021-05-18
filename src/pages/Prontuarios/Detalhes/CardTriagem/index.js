import React from 'react';
import { format } from 'date-fns';

import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';

import Button from 'components/Button';
import Text from 'components/Text';
import { Container, UpperContainer } from './styles';
import {
    Box,
  } from "@material-ui/core";

const CardTriagem = ({triagem}) => {

  return (
    <Container>
      <UpperContainer>
        <Text color="grey" size={12} weight={500}>Feito em</Text>
        <Text color="dark" size={16} weight={600} style={{ marginTop: 8}} transform="uppercase">
          {format(new Date(triagem.created_at), "dd/MM/yyyy hh:mm aaaaa'm'")}
        </Text>
        <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" marginTop="16px">
                <Text color="grey" size={12} weight={500}>Altura</Text>
                <Text color="dark" size={16} weight={600}>
                    {triagem?.altura}m
                </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="16px">
                <Text color="grey" size={12} weight={500}>Peso</Text>
                <Text color="dark" size={16} weight={600}>
                    {triagem?.peso}
                </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="16px">
                <Text color="grey" size={12} weight={500}>Pressão</Text>
                <Text color="dark" size={16} weight={600} transform="uppercase">
                    {triagem?.pressao}
                </Text>
            </Box>
        </Box>
      </UpperContainer>
    </Container>
  );
}

export default CardTriagem;