import React from 'react';
import { Container, Label, Value } from './style';

export default function InputField({ label, value }) {

  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value ? value : 'Não informado'}</Value>
    </Container>
  );
}
