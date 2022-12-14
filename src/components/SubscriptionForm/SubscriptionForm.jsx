import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button } from "../Button/Button.jsx";
import "./SubscriptionForm.scss";

export const SubscriptionForm = ({ ...props }) => {
  return (
    <form className={clsx("subscription-form", props.className)}>
      <label htmlFor="subscription-form" className="visually-hidden">
        Subscription form
      </label>
      <input
        type="text"
        id="subscription-form"
        className="subscription-form__input"
        placeholder="Your E-mail"
      />
      <Button className="subscription-form__button" aria-label="Search" onClick={props.submit}>Subscribe</Button>
    </form>
  );
};

SubscriptionForm.propTypes = {
  submit: PropTypes.func,
};

SubscriptionForm.defaultProps = {
  submit: (e) => {
    console.log("click");
  },
};
