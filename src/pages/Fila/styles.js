import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles(theme => ({
  prontuarioItem: {
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
    },

    '& *': {
      pointerEvents: 'none',
    }
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