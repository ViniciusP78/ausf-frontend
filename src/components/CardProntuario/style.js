import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import getColor from 'utils/getColor';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    display:"flex",
    justifyContent:"space-between"
  },
  colorSecondary:{
    color:theme.palette.secondary.main
  }
}));

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-height:100px;
  justify-content:space-between;
  overflow:hidden;
`;
export const Button = styled.div`
  display:flex;
  font-weight:500;
  height:50%;
  width:100%;
  justify-content:space-around;
  align-items:center;
  border-left: 2px solid ${({theme}) => (theme.border.main)};
  background-color:${({theme}) => (theme.grey.light)};
  &:first-child{
    border-bottom: 2px solid ${({theme}) => (theme.border.main)}
  };
`;
