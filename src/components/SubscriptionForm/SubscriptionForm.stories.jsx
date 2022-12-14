import React from 'react';

import "../../styles/index.scss";

import { SubscriptionForm } from './SubscriptionForm';

export default {
  title: 'SubscriptionForm',
  component: SubscriptionForm,
};


const Template = (args) => <SubscriptionForm {...args} />;

export const Main = Template.bind({});
Main.args = {};
