import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Link.scss";

export const Link = ({ ...props }) => {
  return (
    <a className={clsx("link", props.className)} href={props.href}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string || PropTypes.element,
  href: PropTypes.string,
};

Link.defaultProps = {
  href: "#",
  className: "",
};
