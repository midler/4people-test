import React from "react";
import PropTypes from "prop-types";

import "./SearchInput.scss";

export const SearchInput = ({ ...props }) => {
  return (
    <div className="search-form">
      <label htmlFor="search-input" className="visually-hidden">Введите фразу или слово для поиска</label>
      <input type="text" id="search-input" className="search-form__input" placeholder="Product SKU, Name…"/>
      <button type="button" className="search-form__button" aria-label="Искать" onClick={props.submit}></button>
    </div>
  );
};

SearchInput.propTypes = {
  submit: PropTypes.func,
};

SearchInput.defaultProps = {
  submit: (e)=>{console.log('click')}
};
