import React from 'react';

import "../../styles/index.scss";

import { SearchInput } from './SearchInput';

export default {
  title: 'SearchInput',
  component: SearchInput,
};


const Template = (args) => <SearchInput {...args} />;

export const Main = Template.bind({});
Main.args = {};
