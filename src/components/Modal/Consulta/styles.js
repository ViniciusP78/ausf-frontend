import styled from 'styled-components';

import { makeStyles } from '@material-ui/core';

export const StepContainer = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
`

export default makeStyles(theme => ({
  modal: {
    maxWidth: 450,
    padding: 24,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
  },
  
  title: {
    color: theme.palette.dark.main,
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 12,
  },

  subtitle: {
    color: theme.palette.grey.main,
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
}));