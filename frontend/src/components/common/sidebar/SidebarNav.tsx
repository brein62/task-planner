import type React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import { HomeIcon, ListTodoIcon, SettingsIcon } from "lucide-react";

// Define the navigation items
export const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Tasks", path: "/tasks", icon: <ListTodoIcon /> },
  { name: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

const SidebarNav: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? (
        <MobileSidebar navItems={navItems} />
      ) : (
        <DesktopSidebar navItems={navItems} />
      )}
    </>
  );
};

export default SidebarNav;
