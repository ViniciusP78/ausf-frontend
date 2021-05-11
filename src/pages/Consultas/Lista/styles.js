import { makeStyles, Button } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

export default makeStyles(theme => ({
  consultaItem: {
    background: theme.palette.light.main,
    borderRadius: 5,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    marginBottom: 24,
    paddingLeft: 16,

    '& > div': {
      padding: '12px 0',
      display: 'flex',
      alignItems: 'center',

      '&:last-child': {
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-end',
      }
    },
  },
  consultaFilter:{
    background: theme.palette.light.main,
    borderRadius: 5,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    marginBottom: 24,
    '& > div': {
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      '&:first-child':{
        padding:'12px',
      },
      '&:last-child': {
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-end',
      }
    },
  },

  consultaOfDay:{
    backgroundColor: theme.palette.primary.main,
    maxWidth:'150px',
    justifyContent:'center',
    padding:'12px !important',
    '& > p': {
      color:theme.palette.light.main,
    }
  },

  actionButton: {
    backgroundColor: theme.palette.grey.light,
    height: '100%',
    padding: '12px',
    color: theme.palette.grey.main,
    borderRadius: 0,

    // '&:hover': {
    //   backgroundColor: theme.palette.primary.main,
    //   color: theme.palette.light.main,
    // },

    '&:last-child': {
      borderRadius: '0 5px 5px 0',
    }
  },
  filterIcon:{
    fill:theme.palette.grey.main,
  },
}));

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding:24px;
`;

export const DateButton = styled(Button)`
  height: 100%;
  width: 100%;
  text-transform: none;
  border-radius: 0px;
  color: ${({ theme }) => theme.grey.main};

  ${({ active, theme }) => active && css`
    background-color: ${theme.primary.main};
    color: ${theme.primary.main};

    span { color: ${theme.light.main}; }

    :hover {
      background-color: ${darken(0.05, theme.primary.main)};
      span { color: ${theme.light.main}; }
    }
  `}

`;