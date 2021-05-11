import React from 'react';

import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';

import { Container, Datepicker } from './styles';

const DatepickerInput = ({ style, ...props}) => {

  return (
    <Container style={style}>
      <CalendarIcon/>
      <Datepicker showTimeSelect {...props}/>
    </Container>
  )
}

export default DatepickerInput;