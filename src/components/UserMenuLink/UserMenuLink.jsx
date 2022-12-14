import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./UserMenuLink.scss";

export const UserMenuLink = ({ ...props }) => {
  return props.href ? (
    <a className={clsx("user-menu-link", props.className)} href={props.href}>
      {props.icon ? (
        <span className="user-menu-link__icon">{props.icon}</span>
      ) : (
        ""
      )}

      <span className="user-menu-link__content">{props.children}</span>
    </a>
  ) : (
    <button type="button" className={clsx("user-menu-link", props.className)}>
      {props.icon ? (
        <span className="user-menu-link__icon">{props.icon}</span>
      ) : (
        ""
      )}

      <span className="user-menu-link__content">{props.children}</span>
    </button>
  );
};

UserMenuLink.propTypes = {
  children: PropTypes.string || PropTypes.element,
  href: PropTypes.string,
  icon: PropTypes.element,
};

UserMenuLink.defaultProps = {
  href: "",
  className: "",
  icon: "",
};
