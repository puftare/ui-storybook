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
  color: "bg-blue-500",
};

export const OtherHeader = Template.bind({});
OtherHeader.args = {
  text: "Other Header",
  color: "bg-red-500",
};

export const OrangeHeader = Template.bind({});
OrangeHeader.args = {
  text: "Pink Header",
  color: "bg-orange-500",
};
