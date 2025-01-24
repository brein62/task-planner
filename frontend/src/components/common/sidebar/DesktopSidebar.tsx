import type React from "react";
import { NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

interface DesktopSidebarProps {
  navItems: NavItem[];
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ navItems }) => {
  return (
    <Sidebar>
      <SidebarContent>
        <h1 className="text-2xl font-bold text-center m-4">Task Planner</h1>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : ""
                  }
                >
                  <div className="flex flex-row gap-3 items-center px-4 py-4 rounded-md">
                    {item.icon}
                    {item.name}
                  </div>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DesktopSidebar;
