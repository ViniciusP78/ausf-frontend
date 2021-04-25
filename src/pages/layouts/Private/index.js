import React from 'react';

import Sidebar from 'components/Sidebar';

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