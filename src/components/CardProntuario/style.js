import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    display:"flex",
    justifyContent:"space-between"
  },
  button:{
      '.MuiButtonBase-root':{textTransform:'capitalize'},
  }
}));