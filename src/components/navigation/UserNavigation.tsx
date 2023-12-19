import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ProfileImageNav } from ".";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
interface UserNavigationProps {}

const UserNavigation: FC<UserNavigationProps> = () => {
  return (
    <Menu as="div" className="relative">
      <ProfileImageNav />
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none flex flex-col">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={`${
                    active ? "bg-gray-50" : ""
                  }"block px-3 py-1 text-sm leading-6 text-gray-900"`}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserNavigation;
