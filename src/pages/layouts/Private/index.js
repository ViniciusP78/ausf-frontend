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
        <Box marginBottom="2rem">
          <SearchBar placeholder="Pesquise por nome ou CPF" titulo="Pesquisar"/>
        </Box>

        {children}
      </Content>
    </Container>
  );
}

export default PrivateLayout;