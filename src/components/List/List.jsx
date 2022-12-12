import React from "react";
import PropTypes from "prop-types";

import "./List.scss";

const List = ({ ...props }) => {
  const alignClass = `list--align-${props.align}`;
  return (
    <ul
      className={`list ${props.horizontal ? "list--horizontal" : ""} ${
        props.align ? alignClass : ""
      }`}
    >
      {props.children?.map((item, key) => {
        return <li key={key}>{item}</li>;
      })}
    </ul>
  );
};

List.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

List.defaultProps = {
  horizontal: false,
  align: ["top", "bottom", "center"],
};
export default List;
