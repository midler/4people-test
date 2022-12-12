import React from "react";
import PropTypes from "prop-types";

import "./UserMenuLink.scss";

export const UserMenuLink = ({ ...props }) => {
  return props.href ? (
    <a className={`user-menu-link ${props.className}`} href={props.href}>
      {props.children}
    </a>
  ) : (
    <button type="button" className={`user-menu-link ${props.className}`}>
      {props.children}
    </button>
  );
};

UserMenuLink.propTypes = {
  children: PropTypes.string || PropTypes.element,
  href: PropTypes.string,
};

UserMenuLink.defaultProps = {
  href: "",
  className: "",
};
