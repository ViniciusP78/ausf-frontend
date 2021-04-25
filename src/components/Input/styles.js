import styled, { css } from "styled-components";
import getColor from "utils/getColor";

export const inputStyles = css`
  background-color: ${({ theme }) => theme.grey.light};
  color: ${({ theme }) => theme.dark.main};
  border-radius: 5px;
  padding: 10px;
`;

export const Container = styled.div`
  width: 100%;

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        max-width: none;
      `;
  }}
`;

export const Field = styled.input`
  ${inputStyles};
  -webkit-appearance: none;

  width: 100%;
  font-size: 16px;

  padding: 10px;

  border: 2px solid ${({ theme }) => theme.border.main};
  border-radius: 3px;
  transition: border-color 200ms linear;

  &::placeholder {
    font-size: 16px;
    color: #aeaeb2;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #ff3b2f;

      &:hover {
        border-color: #f83019;
      }
    `}

  ${({ variant }) => {
    if (variant === "border")
      return css`
        border: 1px solid #e0e0e0;

        :hover,
        :focus {
          border-color: #aeaeb2;
        }
      `;

    return "";
  }}
`;

export const FieldTextArea = styled.textarea`
  ${inputStyles}
  -webkit-appearance: none;

  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: 16px;

  padding: 10px;

  border-radius: 3px;
  transition: border-color 200ms linear;

  background: #ffffff;
  box-sizing: border-box;

  &::placeholder {
    font-size: 16px;
    color: #aeaeb2;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #ff3b2f;

      &:hover {
        border-color: #f83019;
      }
    `}

  ${({ variant }) => {
    if (variant === "border")
      return css`
        border: 1px solid #e0e0e0;

        :hover,
        :focus {
          border-color: #aeaeb2;
        }
      `;

    return "";
  }}
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;

  color: ${({ theme, error }) =>
    error ? theme.error.main : theme.grey.light};
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
