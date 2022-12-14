import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {Button} from '../Button/Button.jsx';
import "./LiveChatButton.scss";

export const LiveChatButton = ({ ...props }) => {
  return (
    <Button className={clsx('livechat', props.className )}>
      <span className="livechat__text">Live Chat</span>
    </Button>
  );
};

LiveChatButton.propTypes = {
  children: PropTypes.string || PropTypes.element,
};
