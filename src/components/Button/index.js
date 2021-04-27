import React from 'react';

import useStyles from './styles';

import { Button as MuiButton } from '@material-ui/core';

const Button = ({ children, backgroundColor, color, fullWidth, ...rest }) => {
  const classes = useStyles({ backgroundColor, color, fullWidth })()
  
  return (
    <MuiButton className={classes.button} {...rest}>
      {children}
    </MuiButton>
  );
}

export default Button;