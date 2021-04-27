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
  },
  buttonMui:{
    padding:0,
    width:'100%',
    height:'100%',
    boxShadow:'none',
    backgroundColor:theme.palette.grey.light,
    borderRadius:0,
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
  &:not(:last-child){
    margin-bottom:18px
  }
`;
export const Button = styled.button`
  display:flex;
  font-weight:500;
  height:50%;
  width:100%;
  justify-content:space-around;
  align-items:center;
  border: 0;
  border-left: 2px solid ${({theme}) => (theme.border.main)};
  background-color:${({theme}) => (theme.grey.light)};
  &:first-child{
    border-bottom: 2px solid ${({theme}) => (theme.border.main)}
  };
`;
