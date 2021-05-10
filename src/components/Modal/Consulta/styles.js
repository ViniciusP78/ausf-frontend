import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  modal: {
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
    marginBottom: 12,
  },
}));