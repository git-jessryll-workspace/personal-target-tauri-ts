import { Menu, Transition } from "@headlessui/react";
import { amountFormat, classNames, dateFormat, statuses } from "@/utils";
import expense_list from "@/json/expense.json";
import income_list from "@/json/income.json";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const list = [
  ...expense_list.map((item) => ({ ...item, type: "EXPENSE" })),
  ...income_list.map((item) => ({ ...item, type: "INCOME" })),
];

const DashboardOverallTransaction = () => {
  return (
    <div className="border border-gray-300 rounded-lg bg-white">
      <div className="pt-4 pb-2.5 mx-4 border-b border-gray-300">
        <h5 className="text-sm text-gray-800 font-bold">Recent 10 Transactions</h5>
      </div>
      <ul role="list" className="divide-y divide-gray-100 pb-5 px-4">
        {list
          .sort((item: any, item2: any) => {
            const date1: any = new Date(item.date);
            const date2: any = new Date(item2.date);
            return date2 - date1;
          })
          .slice(0, 9)
          .map((expense: any) => (
            <li
              key={expense.id}
              className="flex items-center justify-between gap-x-6 py-1.5"
            >
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    #{expense.id} - {expense.name}
                  </p>
                  <p
                    className={classNames(
                      statuses[expense.type],
                      "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {expense.type}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p className="whitespace-nowrap">{expense.note}</p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <div className="text-right">
                  <h3 className="text-lg text-gray-800 font-semibold">
                    {amountFormat(+expense.amount)}
                    <span className="sr-only">{expense.amount}</span>
                  </h3>
                  <time
                    className="text-gray-500 text-sm"
                    dateTime={expense.date}
                  >
                    {dateFormat(expense.date)}
                  </time>
                </div>
                <Menu as="div" className="relative flex-none">
                  <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Edit
                            <span className="sr-only">, {expense.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Move
                            <span className="sr-only">, {expense.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            Delete
                            <span className="sr-only">, {expense.name}</span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DashboardOverallTransaction;
