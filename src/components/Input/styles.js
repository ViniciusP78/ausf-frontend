import styled, { css } from "styled-components";
import getColor from "utils/getColor";

export const fieldContainerStyles = css`
  ${({ backgroundColor, color, theme }) => {
    const bgColor = backgroundColor
      ? getColor(backgroundColor)
      : theme.grey.light;
    const textColor = color ? getColor(color) : theme.grey.main;

    return css`
      background-color: ${bgColor};
      color: ${textColor};
      border-radius: 5px;
      border: none;
      padding: 16px;
    `;
  }}
`;

export const inputStyles = css`
  background-color: transparent;
  color: currentColor;
  font-weight: 500;
  border: none;
  padding: 0px;
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

export const FieldContainer = styled.div`
  ${fieldContainerStyles}
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  svg {
    margin-right: 16px;
  }

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        max-width: none;
      `;
  }}

  ${({ error, theme }) =>
    error &&
    css`
      max-width: none;
      border-color: ${theme.error.main};
    `}
`;

export const Field = styled.input`
  ${inputStyles};
  -webkit-appearance: none;
  background-color: 
  width: 100%;
  font-size: 14px;

  border-radius: 5px;
  transition: border-color 200ms linear;

  &::placeholder {
    font-size: 14px;
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
  ${fieldContainerStyles}
  -webkit-appearance: none;

  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: 16px;

  padding: 10px;

  border-radius: 3px;
  transition: border-color 200ms linear;
  resize: none;

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

  color: ${({ theme, error, color }) =>
    error
      ? theme.error.main
      : color
      ? getColor(color, theme)
      : theme.grey.light};
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.error.main};
  font-size: 12px;
  font-weight: 500;
`;
