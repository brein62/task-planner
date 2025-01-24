import type React from "react";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

interface MobileSidebarProps {
  navItems: NavItem[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-40 md:hidden"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <h1 className="text-2xl font-bold">Task Planner</h1>
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`
              }
              onClick={() => setOpen(false)}
            >
              <div className="flex flex-row gap-3 items-center">
                {item.icon}
                {item.name}
              </div>
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
