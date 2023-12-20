import { classNames, dateFormat } from "@/utils";
import {
  CalendarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  ShoppingBagIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

interface Navigation {
  name: string;
  href: string;
  current: boolean;
  icon: any;
}

interface MenuNavProps {}

const MenuNav: FC<MenuNavProps> = () => {
  const [navigation, setNavigation] = useState<Navigation[]>([
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
    { name: "Income", href: "/incomes", icon: WalletIcon, current: false },
    {
      name: "Expense",
      href: "/expenses",
      icon: ShoppingBagIcon,
      current: false,
    },
    { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false },
    {
      name: "Documents",
      href: "/documents",
      icon: DocumentDuplicateIcon,
      current: false,
    },
  ]);

  useEffect(() => {
    const { pathname } = window.location;
    const findActive = navigation.find(
      (item: { current: boolean }) => item.current
    );
    if (findActive?.href !== pathname) {
      setNavigation((navigation: any) => {
        return navigation.map((nav: { href: string; current: boolean }) => ({
          ...nav,
          current: nav.href === pathname,
        }));
      });
    }
  }, []);

  return (
    <nav className="flex flex-1 flex-col pt-3">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  onClick={() =>
                    setNavigation((navigation) => {
                      return navigation.map((i: any) => {
                        return {
                          ...i,
                          current: i.href === item.href,
                        };
                      });
                    })
                  }
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-auto">
          <div className="text-2xl antialiased text-gray-300">
            <h3>{dateFormat(new Date().toDateString())}</h3>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
