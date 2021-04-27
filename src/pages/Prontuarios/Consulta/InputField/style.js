import styled from 'styled-components';

export const InputContainer = styled.div`
   display:flex;
   flex-direction:column;
`;
export const Label = styled.p`
  font-weight:700;
  font-size:18px;
  color:${({theme}) => (theme.grey.main)};
`;