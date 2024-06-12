import { Meta, StoryFn } from "@storybook/react";
import { CTASection, CTASectionProp } from "./CTASection";

export default {
  title: "Components/CTASection",
  component: CTASection,
} as Meta;

const Template: StoryFn<CTASectionProp> = (args: CTASectionProp) => (
  <CTASection {...args} />
);

export const MainCTASection = Template.bind({});
MainCTASection.args = {
  text: "Hero Section",
  color: "bg-blue-900",
};

export const OtherCTASection = Template.bind({});
OtherCTASection.args = {
  text: "Other Hero Section",
};
