import styled from 'styled-components';

import GenericDatepicker from 'react-datepicker';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey.light};
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.grey.main};
  padding-left: 12px;
`;

export const Datepicker = styled(GenericDatepicker)`
  background-color: transparent;
  border: none;
  padding: 16px;
  color: ${({ theme }) => theme.grey.main};
`;