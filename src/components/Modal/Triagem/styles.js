import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  modal: {
    maxWidth: 400,
    width:400,
    height:450,
    padding: 38,
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