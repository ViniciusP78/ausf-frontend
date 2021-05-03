import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.background.light};
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;