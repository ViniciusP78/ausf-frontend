import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAlert } from 'store/modules/alert/actions';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import useStyles from './styles';

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const alert = useSelector((state) => state.alert);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const close = () => {
    dispatch(closeAlert());
  };

  useEffect(() => {
    setOpen(alert.open);
    setMessage(alert.message);
    setSeverity(alert.severity);
  }, [alert]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      message={message}
      onClose={close}
    >
      <Alert
        elevation={4}
        variant="filled"
        severity={severity || 'error'}
        onClose={close}
        classes={{ root: classes.alert }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default App;
