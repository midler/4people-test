import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./SearchInput.scss";

export const SearchInput = ({ ...props }) => {
  return (
    <form className={clsx("search-form", props.className)}>
      <label htmlFor="search-input" className="visually-hidden">Search</label>
      <input type="text" id="search-input" className="search-form__input" placeholder="Product SKU, Name…"/>
      <button type="button" className="search-form__button" aria-label="Search" onClick={props.submit}></button>
    </form>
  );
};

SearchInput.propTypes = {
  submit: PropTypes.func,
};

SearchInput.defaultProps = {
  submit: (e)=>{console.log('click')}
};
