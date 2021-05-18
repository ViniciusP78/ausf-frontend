import styled from 'styled-components';

import { makeStyles } from '@material-ui/core';

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
export const Title = styled.h1`
  font-weight:700;
  font-size:24px;
  color:${({theme}) => (theme.dark.main)};
  margin-bottom: 24px;
`;
export const InputContainer = styled.div`
   display:flex;
   flex-direction:column;
`;
export const ExameContainer = styled.div`
  margin-right: 12px;
`;

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

  examesContainer: {
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 12
  }
}));