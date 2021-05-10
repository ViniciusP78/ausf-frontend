import React, { useState } from "react";

import DateInput from 'components/Input/Datepicker';
import { Dialog } from "@material-ui/core";
import useStyles from "./styles";

const ModalConsulta = ({ ... props }) => {
  const classes = useStyles();

  return (
    <Dialog classes={{ paper: classes.modal }} {...props}>
      <p className={classes.title}>Data e horário</p>
      <p className={classes.subtitle}>
        Selecione uma data e horário para a consulta
      </p>
      <DateInput/>
    </Dialog>
  );
};

export default ModalConsulta;
