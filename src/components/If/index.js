import React from "react";

export const If = ({ children, condition, otherwise }) => {
  return <React.Fragment>{condition ? children : otherwise}</React.Fragment>;
};
