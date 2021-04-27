import React from "react";

import PropTypes from "prop-types";

import { Container } from "./styles";

function Text({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export const Heading = ({ children, level, ...props }) => {
  const levels = [
    { fontSize: "32px", element: "h1" },
    { fontSize: "28px", element: "h2" },
    { fontSize: "24px", element: "h3" },
    { fontSize: "20px", element: "h4" },
    { fontSize: "18px", element: "h5" },
    { fontSize: "16px", element: "h6" },
  ];

  const element = levels[level].element;
  const fontSize = levels[level].fontSize;

  return (
    <Text weight={600} color="dark" size={fontSize} as="element" {...props}>
      {children}
    </Text>
  );
};

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
