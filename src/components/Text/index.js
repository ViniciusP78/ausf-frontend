import React from "react";

import PropTypes from "prop-types";

import { Container } from "./styles";

function Text({ children,  ...props }) {
  return <Container {...props}>{children}</Container>;
}

Text.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  align: PropTypes.string,
  transform: PropTypes.string,
  lineHeight: PropTypes.string,
  pointer: PropTypes.bool,
  noOverflow: PropTypes.bool,
  clamp: PropTypes.number,
};

export default Text;
