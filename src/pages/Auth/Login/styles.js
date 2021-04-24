import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  max-width: 320px;
  padding: 24px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.dark.main};
`;