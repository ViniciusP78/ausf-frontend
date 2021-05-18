import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.light.main};
  max-width: 220px;
  width: 220px;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

export const UpperContainer = styled.div`
  padding: 16px;
`;