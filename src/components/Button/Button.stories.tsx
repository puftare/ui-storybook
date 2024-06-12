import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps, Variant } from "./Button";

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
  variant: Variant.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  variant: Variant.Secondary,
};
