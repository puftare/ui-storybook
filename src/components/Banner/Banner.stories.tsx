import { Meta, StoryFn } from "@storybook/react";
import { Banner, BannerProps } from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta;

const Template: StoryFn<BannerProps> = (args: BannerProps) => (
  <Banner {...args} />
);

export const FirstBanner = Template.bind({});
FirstBanner.args = {
  text: "Banner 1",
  color: "bg-blue-500",
};

export const SecondBanner = Template.bind({});
SecondBanner.args = {
  text: "Banner 2",
  color: "bg-yellow-500",
};
