import React from 'react';
import Sidebar from 'components/Sidebar';
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
      </Content>
    </Container>
  );
}

export default PrivateLayout;