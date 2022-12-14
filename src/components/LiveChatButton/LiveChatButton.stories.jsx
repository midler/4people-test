import React from 'react';

import "../../styles/index.scss";

import { LiveChatButton } from './LiveChatButton';

export default {
  title: 'LiveChatButton',
  component: LiveChatButton,
};


const Template = (args) => <LiveChatButton {...args}>LiveChatButton</LiveChatButton>;

export const Main = Template.bind({});
Main.args={
}
