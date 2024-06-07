import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const MainHeader = Template.bind({});
MainHeader.args = {
  text: "Main Header",
  color: "blue",
};

export const OtherHeader = Template.bind({});
OtherHeader.args = {
  text: "Other Header",
  color: "red",
};

export const OrangeHeader = Template.bind({});
OrangeHeader.args = {
  text: "Pink Header",
  color: "orange",
};
