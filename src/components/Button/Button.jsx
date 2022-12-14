import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Button.scss";

export const Button = ({ ...props }) => {
  return (
    <button type="button" className={clsx("button", props.className)}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string || PropTypes.element,
 };
