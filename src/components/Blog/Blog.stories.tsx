import { Meta, StoryFn } from "@storybook/react";
import { Blog, BlogProps } from "./Blog";

export default {
  title: "Components/Blog",
  component: Blog,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<BlogProps> = (args: BlogProps) => <Blog {...args} />;


export const PrimarySidebar = Template.bind({});
PrimarySidebar.args = {
};