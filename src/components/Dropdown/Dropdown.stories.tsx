import { Meta, StoryFn } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => <Dropdown {...args}/>;

export const MainDropdown = Template.bind({});
MainDropdown.args = {
  items: [
    { text: "Account Settings" },
    { text: "Support" },
    { text: "Licence" },
  ],
};
