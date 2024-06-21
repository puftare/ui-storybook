import { Meta, StoryFn } from "@storybook/react";
import { Sidebar, SidebarProps } from "./Sidebar";
import {
  Award,
  NewspaperIcon,
  User,
  WorkflowIcon,
  ActivityIcon,
  GraduationCap,
  Calendar,
  MessageCircle,
  ScatterChart,
} from "lucide-react";

const sidebarItems = [
  { icon: <NewspaperIcon size={20} />, text: "News", active: true },
  { icon: <Award size={20} />, text: "Reources", active: false },
  { icon: <User size={20} />, text: "Members", active: false },
  { icon: <WorkflowIcon size={20} />, text: "Jobs", active: false },
  { icon: <ActivityIcon size={20} />, text: "Actions", active: false },
  { icon: <GraduationCap size={20} />, text: "Grants", active: false },
  { icon: <Calendar size={20} />, text: "Events", active: false },
  { icon: <MessageCircle size={20} />, text: "Chat", active: false },
  { icon: <ScatterChart size={20} />, text: "Statistics", active: false },
  { text: "Home", active: false },
];

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<SidebarProps> = (args: SidebarProps) => (
  <Sidebar {...args} />
);

export const PrimarySidebar = Template.bind({});
PrimarySidebar.args = {
  items: sidebarItems,
  collapsible: true,
};

export const NonCollapsibleSidebar = Template.bind({});
NonCollapsibleSidebar.args = {
  items: sidebarItems,
  collapsible: false,
};

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
  items: sidebarItems,
};
