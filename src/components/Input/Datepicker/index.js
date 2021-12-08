import React, { useRef, useState, useEffect } from "react";

import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

import { useField } from "@unform/core";
import PropTypes from "prop-types";

import { Label, Error } from "../styles";
import { Datepicker, Container, InputContainer } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  name,
  label,
  className,
  fullWidth,
  onChange,
  style,
  ...rest
}) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(new Date());
  delete rest.defaultValue;

  const handleChange = (date) => {
    setDate(date);

    if (onChange) onChange(date);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: "props.selected",
      setValue: (ref, value) => {
        if (!value) return;

        setDate(new Date(value));
      },
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue) setDate(new Date(defaultValue));
    else setDate(new Date());
  }, [defaultValue]);

  return (
    <Container>
      <InputContainer
        style={style}
        className={`root-input ${className}`}
        fullWidth={fullWidth}
        error={error}
      >
        {label && (
          <Label htmlFor={fieldName} error={!!error} color="text">
            {label}
          </Label>
        )}
        <CalendarIcon />
        <Datepicker
          ref={datepickerRef}
          selected={date}
          onChange={handleChange}
          error={error}
          locale="pt-BR"
          dateFormat="dd/MM/yyyy"
          {...rest}
        />
      </InputContainer>
      {error && <Error style={{ marginTop: 8 }}>{error}</Error>}
    </Container>
  );
};

DatePicker.defaultProps = {
  className: "",
  fullWidth: true,
  onChange: null,
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

export default DatePicker;
