import { FC, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Route, Routes } from "react-router-dom";
import {
  NotificationNav,
  SeparateNav,
  UserNavigation,
  SearchFormNav,
} from "@/components/navigation";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import {
  DashboardPage,
  ExpensePage,
  IncomePage,
  CalendarPage,
  DocumentPage,
} from "@/pages";

interface AuthenticatedLayoutProps {}

const AuthenticatedLayout: FC<AuthenticatedLayoutProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const routes = [
    {
      path: "dashboard",
      element: <DashboardPage />,
    },
    {
      path: "expenses",
      element: <ExpensePage />,
    },
    {
      path: "incomes",
      element: <IncomePage />,
    },
    {
      path: "calendar",
      element: <CalendarPage />,
    },
    {
      path: "documents",
      element: <DocumentPage />,
    },
  ];

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Static sidebar for desktop */}
      <DesktopSidebar />

      <div className="lg:pl-72">
        <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <SearchFormNav />
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <NotificationNav />
              {/* Separator */}
              <SeparateNav />
              {/* Profile dropdown */}
              <UserNavigation />
            </div>
          </div>
        </div>

        <main className="py-10 ">
          <div className="px-4 sm:px-6 lg:px-8">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
