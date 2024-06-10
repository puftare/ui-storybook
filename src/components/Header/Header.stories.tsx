import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const MainHeader = Template.bind({});
MainHeader.args = {
  text: "Main Header",
  color: "bg-blue-500",
  items: [
    { name: "Product", href: "/" },
    { name: "Features", href: "/" },
    { name: "Marketplace", href: "/" },
    { name: "Company", href: "/" },
  ],
};

export const OtherHeader = Template.bind({});
OtherHeader.args = {
  text: "Other Header",
  color: "bg-red-500",
  items: [
    { name: "Development", href: "/" },
    { name: "Features", href: "/" },
    { name: "Market", href: "/" },
    { name: "Shop", href: "/" },
  ],
};

export const OrangeHeader = Template.bind({});
OrangeHeader.args = {
  text: "Orange Header",
  color: "bg-orange-500",
  items: [
    { name: "Menu", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact", href: "/" },
    { name: "Location", href: "/" },
  ],
};
