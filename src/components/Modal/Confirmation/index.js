import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeConfirmation } from 'store/modules/confirmation/actions';

import { ReactComponent as Close } from 'assets/icons/close.svg';

import { Dialog, Typography, Grid, Paper } from '@material-ui/core';
 
import {
  Backdrop,
  Title,
  Container,
  Modal,
  ModalHeader,
  ModalContent,
  ModalControls,
  Button,
  CloseWrapper,
} from './styles';

function ConfirmationModal() {
  const dispatch = useDispatch();

  const { open: isOpen, title, content, onYes } = useSelector(
    (state) => state.confirmation
  );

  const close = () => dispatch(closeConfirmation());
  const handleYes = () => {
    onYes();
    dispatch(closeConfirmation());
  };

  return (
    isOpen && <Backdrop onClick={close}>
      <Container>
        <Modal onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <Title style={{ marginRight: 'auto' }}>Confirmação</Title>

            <CloseWrapper onClick={close}>
              <Close width={14} />
            </CloseWrapper>
          </ModalHeader>
          <ModalContent>
            <span weight={400}>{content}</span>
          </ModalContent>

          <ModalControls>
            <Button backgroundColor="error" color="light" onClick={handleYes}>Sim</Button>
            <Button backgroundColor="gray" color="grey" onClick={close}>Não</Button>
          </ModalControls>
          </Modal>
      </Container>
    </Backdrop>
  );
}

export default ConfirmationModal;
