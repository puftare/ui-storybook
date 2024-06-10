import { Meta, StoryFn } from "@storybook/react";
import { GridList, GridListProps } from "./GridList";

export default {
  title: "Components/GridList",
  component: GridList,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<GridListProps> = (args: GridListProps) => (
  <GridList {...args} />
);

export const MainGridList = Template.bind({});
MainGridList.args = {
  users: [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Alice Cooper",
      title: "Technical Support",
      role: "User",
      email: "alicecooper@example.com",
      telephone: "+1-555-333-4422",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Bradley Cooper",
      title: "Software Developer",
      role: "Delegee",
      email: "bradleycooper@example.com",
      telephone: "+1-723-452-1234",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ],
  color: "bg-gray-50",
};
