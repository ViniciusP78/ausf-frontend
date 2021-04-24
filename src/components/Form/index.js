/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { Form as Unform } from "@unform/web";

const Form = ({ children, onSubmit, ...rest }, ref) => {
  return (
    <Unform ref={ref} onSubmit={onSubmit} {...rest}>
      {children}
    </Unform>
  );
};
export default forwardRef(Form);
