import React from "react";

import "../../styles/index.scss";

import UserMenuLink from "./UserMenuLink";

export default {
  title: "UserMenuLink",
  component: UserMenuLink,
};

const Template = (args) => <UserMenuLink {...args}>Ссылка</UserMenuLink>;

export const UserMenuLinkAsLink = Template.bind({});
UserMenuLinkAsLink.args = {
  href: "#",
};

export const UserMenuLinkAsButton = Template.bind({});
UserMenuLinkAsButton.args = {
  href: "",
};
