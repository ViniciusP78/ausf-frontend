import React from 'react';
import { format } from 'date-fns';

import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';

import Button from 'components/Button';
import Text from 'components/Text';
import { Container, UpperContainer } from './styles';

const CardExame = () => {

  return (
    <Container>
      <UpperContainer>
        <Text color="grey" size={12} weight={500}>Feito em</Text>
        <Text color="dark" size={16} weight={600} style={{ marginTop: 8}} transform="uppercase">
          {format(new Date(), "dd/MM/yyyy hh:mm aaaaa'm'")}
        </Text>
      </UpperContainer>
      <Button style={{ borderRadius: 0 }}>
        <DownloadIcon style={{ marginRight: 8 }}/>
        Baixar exame
      </Button>
    </Container>
  );
}

export default CardExame;