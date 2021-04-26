import React from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from 'components/Sidebar';
import SearchBar from 'components/Searchbar';
import Button from 'components/Button';
import Card from 'components/CardProntuario';
import AddCircleIcon from '@material-ui/icons/AddCircle';


import { Container, Content } from './styles';

const PrivateLayout = ({ children }) => {

  return (
    <Container>
      <Sidebar/>
      <Content>
        {children}
        <Box marginBottom="2rem">
          <SearchBar placeholder="Pesquise por nome ou CPF" titulo="Pesquisar"/>
        </Box>
        <Box minHeight="100px">
          <Box display="flex">
            <Button type="submit">
              <AddCircleIcon/>
              Adicionar Paciente
            </Button>
          </Box>
        </Box>
        <Card />
      </Content>
    </Container>
  );
}

export default PrivateLayout;