import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
   flex-direction:column;
   align-items: flex-start;
   margin-bottom: 32px;
`;

export const Label = styled.p`
  font-weight:600;
  font-size:14px;
  color:${({theme}) => (theme.grey.main)};
  margin-bottom: 4px;
`;

export const Value = styled.div`
  font-weight:500;
  font-size:18px;
  color:${({theme}) => (theme.dark.main)};
`;