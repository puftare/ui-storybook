import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  type: "button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  type: "button",
  variant: "secondary",
};
