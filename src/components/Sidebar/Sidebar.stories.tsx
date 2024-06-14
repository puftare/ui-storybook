import { Meta, StoryFn } from "@storybook/react";
import Sidebar, { SidebarItem, SidebarProps } from "./Sidebar";
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
  component: Sidebar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<SidebarProps> = (args: SidebarProps) => (
  <Sidebar>
    <SidebarItem icon={<AppWindow size={20} />} text="Home" active />
    <SidebarItem icon={<Award size={20} />} text="Dashboard" />
    <SidebarItem icon={<UserCheck size={20} />} text="About" />
    <SidebarItem icon={<Database size={20} />} text="Contact" />
    <SidebarItem icon={<SettingsIcon size={20} />} text="Settings" />
    <SidebarItem icon={<Home size={20} />} text="File" />
    <SidebarItem icon={<Search size={20} />} text="Search" />
    <SidebarItem icon={<FilterIcon size={20} />} text="Filter" />
    <SidebarItem icon={<Airplay size={20} />} text="Order" />
  </Sidebar>
);

export const PrimarySidebar = Template.bind({});
PrimarySidebar.args = {
  items: [
    { text: "Home", href: "/", current: true, icon: "Home" },
    { text: "Dashboard", href: "/", icon: "Dashboard" },
    { text: "About", href: "/", icon: "About" },
    { text: "Contact", href: "/", icon: "Contact" },
    { text: "Settings", href: "/", icon: "Settings" },
    { text: "File", href: "/", icon: "File" },
    { text: "Search", href: "/", icon: "Search" },
    { text: "Filter", href: "/", icon: "Filter" },
    { text: "Order", href: "/", icon: "Order" },
  ],
};
