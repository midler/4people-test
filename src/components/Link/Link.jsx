import React from "react";
import PropTypes from "prop-types";

import "./Link.scss";

export const Link = ({ ...props }) => {
  return (
    <a className={`link ${props.className}`} href={props.href}>
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
  className: ""
};
