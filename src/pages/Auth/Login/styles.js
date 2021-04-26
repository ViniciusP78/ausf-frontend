import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const FormContainer = styled.div`
  padding: 48px;
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.dark.main};
  margin-bottom: 32px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 64px;

  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.grey.main};
`;

export const GreenSide = styled.div`
  background-color: ${({ theme }) => theme.primary.main};
  flex: 1;
`;