import { FC } from "react";
import { Logo } from "../components/logo";
import { MenuNav } from "../components/navigation";

interface DesktopSidebarProps {}

const DesktopSidebar: FC<DesktopSidebarProps> = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>
        <MenuNav />
      </div>
    </div>
  );
};

export default DesktopSidebar;
