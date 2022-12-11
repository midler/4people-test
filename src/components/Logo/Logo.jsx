import React from "react";
import PropTypes from "prop-types";

import LogoSVG from "./Logo.svg";

import "./Logo.scss";

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ ...props }) => {
  return (
    <a className="logo" href={props.href}>
      <img src={LogoSVG} className="logo__svg" alt={props.description} />
    </a>
  );
};

Logo.propTypes = {
  href: PropTypes.string,
  description: PropTypes.string,
};

Logo.defaultProps = {
  href: "#",
  description: "Company Logo",
};
