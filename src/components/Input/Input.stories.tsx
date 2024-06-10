import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const MainInput = Template.bind({});
MainInput.args = {};
