import { Meta, StoryFn } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import {
  AppWindow,
  SettingsIcon,
  Award,
  UserCheck,
  Database,
  Search,
  FilterIcon,
  Home,
  Airplay,
} from "lucide-react";

const sidebarItems = [
  { icon: <AppWindow size={20} />, text: "Home", active: true },
  { icon: <Award size={20} />, text: "Dashboard", active: false },
  { icon: <UserCheck size={20} />, text: "About", active: false },
  { icon: <Database size={20} />, text: "Contact", active: false },
  { icon: <SettingsIcon size={20} />, text: "Settings", active: false },
  { icon: <Home size={20} />, text: "File", active: false },
  { icon: <Search size={20} />, text: "Search", active: false },
  { icon: <FilterIcon size={20} />, text: "Filter", active: false },
  { icon: <Airplay size={20} />, text: "Order", active: false },
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
};
