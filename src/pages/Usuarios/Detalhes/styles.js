import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
`;
export const Content = styled.div`
  padding: 48px 24px;
  display:flex;
`;
export const Label = styled.p`
  font-weight:700;
  font-size:18px;
  color:${({theme}) => (theme.grey.main)};
`;
export const InputContainer = styled.div`
   display:flex;
   flex-direction:column;
`;