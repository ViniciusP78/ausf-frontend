import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import {
  Container,
  Label,
  Error,
  OptionalLabel,
  LabelWrapper,
} from '../styles';
// import Input from '~/components/Input';
import { Input, StyledAutocomplete } from './styles';

const Autocomplete = ({
  label,
  optional,
  name,
  colorLabel,
  className,
  fullWidth,
  multiline,
  rows,
  options,
  getOptionValue,
  getOptionLabel,
  onChange,
  onInputChange,
  defaultValue,
  placeholder,
  autoComplete,
  freeSolo,
  value,
  ignoreStateValue,
  noMb,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        getValue: (ref, value) => {
          if (inputValue) {
            return !ignoreStateValue ? getOptionValue(inputValue) : inputValue;
          }
          return null;
        },
        setValue: (ref, value) => {
          setInputValue(value);
        },
      });
    }
  }, [fieldName, registerField, inputValue]);

  const handleChange = (e, selected) => {
    e.persist();
    setInputValue(selected);
    if (onChange) onChange(e, selected);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Container
      className={`root-input ${className}`}
      fullWidth={fullWidth}
      {...(typeof noMb === 'boolean' && { noMb })}
    >
      {label && (
          <Label htmlFor={fieldName} color={colorLabel} error={Boolean(error)}>
            {label}
          </Label>
      )}
      <StyledAutocomplete
        disableClearable
        options={options || []}
        type="text"
        id={name}
        defaultValue={defaultValue}
        renderInput={(props) => (
          <Input
            {...props}
            error={!!error}
            name={name}
            inputRef={inputRef}
            inputProps={{
              ...props.inputProps,
              autoComplete: autoComplete || 'new-password',
            }}
            placeholder={placeholder}
            onChange={onInputChange || (freeSolo ? handleInputChange : null)}
          />
        )}
        onChange={handleChange}
        getOptionLabel={getOptionLabel}
        freeSolo={freeSolo}
        {...rest}
        {...(!ignoreStateValue && { value: inputValue })}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Autocomplete;
