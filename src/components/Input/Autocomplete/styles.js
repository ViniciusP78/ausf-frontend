import styled, { css } from "styled-components";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import getColor from 'utils/getColor';

export const Input = styled(TextField)`
  padding: 0;

  input {
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor ? getColor(backgroundColor) : theme.grey.light};
    width: 100%;
    font-size: 16px;
    padding: 14px !important;
    border: none;
    border-radius: 5px;
    transition: border-color 200ms linear;
    color: #0D4A87;

    :hover, :focus {
      border-color: #c4cdd9;
    }

    &::placeholder {
      font-size: 13px;
      color: #c5d3e6;
      opacity: 1;
    }

    ${({ error }) =>
      error &&
      css`
        border-color: #cc0a2e;

        &:hover {
          border-color: #cc0a2e;
        }
      `}
  }

  .MuiInput-underline:before, .MuiInput-underline:after {
    display: none;
  }
`;

export const StyledAutocomplete = styled(Autocomplete)`
  background-color: ${({ theme, backgroundColor }) =>
      backgroundColor ? getColor(backgroundColor) : theme.grey.light};
  border-radius: 5px;
  padding-right: 14px;
  /* .MuiAutocomplete-endAdornment {
    display: none;
  } */

  .MuiAutocomplete-inputRoot {
    padding-right: 0px;
  }
`;
