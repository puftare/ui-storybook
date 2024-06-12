import { Meta, StoryFn } from "@storybook/react";
import NewSidebar, { SidebarItem } from "./NewSidebar";
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

export default {
  title: "Components/Sidebar",
  component: NewSidebar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<any> = (args: any) => (
  <NewSidebar>
    <SidebarItem icon={<AppWindow size={20} />} text="Home" active />
    <SidebarItem icon={<Award size={20} />} text="Dashboard" />
    <SidebarItem icon={<UserCheck size={20} />} text="About" />
    <SidebarItem icon={<Database size={20} />} text="Contact" />
    <SidebarItem icon={<SettingsIcon size={20} />} text="Settings" />
    <SidebarItem icon={<Home size={20} />} text="File" />
    <SidebarItem icon={<Search size={20} />} text="Search" />
    <SidebarItem icon={<FilterIcon size={20} />} text="Filter" />
    <SidebarItem icon={<Airplay size={20} />} text="Order" />
  </NewSidebar>
);

export const PrimarySidebar = Template.bind({});
PrimarySidebar.args = {};
