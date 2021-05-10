import styled from 'styled-components';

import GenericDatepicker from 'react-datepicker';

export const Datepicker = styled(GenericDatepicker)`
  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => 'green'};
  }
`;