import React from "react";
import PropTypes from "prop-types";

import "./UserMenu.scss";

export const UserMenu = ({ ...props }) => {
  return (
    <ul>
      {/* {props.children.map((item) => (
        <li>{item}</li>
      ))} */}
    </ul>
  );
};

UserMenu.propTypes = {
  item: PropTypes.element,
};

UserMenu.defaultProps = {};
