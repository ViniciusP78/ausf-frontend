import React from 'react';

import useStyles from './styles';

import { Button as MuiButton, CircularProgress } from '@material-ui/core';

const Button = ({ children, backgroundColor, color, fullWidth, loading, ...rest }) => {
  const classes = useStyles({ backgroundColor, color, fullWidth })()
  
  return (
    <MuiButton className={classes.button} {...rest}>
      {loading ? <CircularProgress color="light" size={24} /> : children}
    </MuiButton>
  );
}

export default Button;