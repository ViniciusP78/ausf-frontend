import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';


export default makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  title:{
    color: theme.palette.secondary.main,
    fontWeight:700,  
    marginRight:'2rem',
    alignSelf:'center',  
  },

  searchbarContainer: {
    backgroundColor: theme.palette.grey.light,
    boxShadow: 'none',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  backButton: {
    cursor: 'pointer',
    marginRight: 24,
  }
}));

export const Container = styled.div`
  background-color: ${({ theme }) => theme.light.main};
  z-index: 10;
  
  display:flex;
  align-items: center;

  box-shadow: 0px 4px 10px rgba(0, 218, 113, 0.2);
  padding:25px;
  width:100%;
  height:102px;
  border-bottom: 2px solid ${({theme}) => (theme.primary.main)};
`;

