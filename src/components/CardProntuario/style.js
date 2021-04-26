import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    display:"flex",
    justifyContent:"space-between"
  },
  iconTransform:{
    transform: "scaleX(-1)"
  }
}));

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
  border-radius: 3px;
  min-height:100px;
`;
