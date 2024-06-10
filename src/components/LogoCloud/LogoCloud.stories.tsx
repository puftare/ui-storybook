import { Meta, StoryFn } from "@storybook/react";
import { LogoCloud, LogoCloudProps } from "./LogoCloud";

export default {
  title: "Components/LogoCloud",
  component: LogoCloud,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<LogoCloudProps> = (args: LogoCloudProps) => (
  <LogoCloud {...args} />
);

export const LogoCloudMain = Template.bind({});
LogoCloudMain.args = {
  text: "Main Logo Cloud",
  color: "bg-green-500",
};

export const LogoCloudOther = Template.bind({});
LogoCloudOther.args = {
  text: "Other Logo Cloud",
  color: "bg-pink-500",
};
