import income_list from "@/json/income.json";
import { useState, useEffect, Fragment, FC } from "react";
import {
  amountFormat,
  classNames,
  dateFormat,
  statuses,
  sumList,
} from "@/utils";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Modal } from "@/components";
import FormTransaction from "@/components/income/FormTransaction";

interface IncomePageProps {}

const IncomePage: FC<IncomePageProps> = () => {
  const [incomeList, setIncomeList] = useState<any[]>([]);
  const [openModalIncome, setOpenModalIncome] = useState<boolean>(false);
  const [selectedIncome, setSelectedIncome] = useState<any>();

  useEffect(() => {
    setIncomeList(
      income_list.map((item: any) => ({
        ...item,
        type: "INCOME",
        date: new Date(item.date),
      }))
    );

    return () => {};
  }, []);

  const totalExpense = () => {
    const sum: number = sumList(incomeList, "amount");
    return amountFormat(sum);
  };

  return (
    <>
      <Modal
        openModal={openModalIncome}
        toggleModal={() => setOpenModalIncome(!openModalIncome)}
        children={
          <FormTransaction
            transaction={selectedIncome}
            closeModal={() => setOpenModalIncome(false)}
          />
        }
      />
      <div className="w-full">
        <div className="border-b bg-gray-800 text-white px-4 py-8 sm:px-6 rounded-lg p-0.5 shadow-lg">
          <div className="flex flex-wrap justify-between sm:flex-nowrap">
            <div className="ml-1 space-y-2">
              <h3 className="text-4xl font-bold leading-6 ">
                {totalExpense()}
              </h3>
              <p
                className="text-xs uppercase"
                style={{
                  letterSpacing: "0.15rem",
                }}
              >
                total income
              </p>
            </div>
            <div className="mt-2 space-y-2 flex-shrink-0 justify-center text-right">
              <button
                onClick={() => {
                  setOpenModalIncome(true);
                  setSelectedIncome(null);
                }}
                type="button"
                className="relative inline-flex items-center rounded-md text-gray-800 p-2.5 text-sm font-semibold bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create new income
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-2 mx-4 border-b border-gray-300">
          <h5 className="text-sm text-gray-800 font-bold">Transactions</h5>
        </div>
        <ul role="list" className="divide-y divide-gray-100 pb-3 px-4">
          {incomeList
            .sort((item: any, item2: any) => {
              const date1: any = new Date(item.date);
              const date2: any = new Date(item2.date);
              return date2 - date1;
            })
            .map((income: any, index: number) => (
              <li
                key={`${income.id}-${index}`}
                className="flex items-center justify-between gap-x-6 py-5"
              >
                <div className="min-w-0">
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      #{income.id} - {income.name}
                    </p>
                    <p
                      className={classNames(
                        statuses[income.type],
                        "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                      )}
                    >
                      {income.type}
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p className="whitespace-nowrap">{income.note}</p>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-x-4">
                  <div className="text-right">
                    <h3 className="text-lg text-green-800 font-semibold">
                      {amountFormat(+income.amount)}
                      <span className="sr-only">{income.amount}</span>
                    </h3>
                    <time
                      className="text-gray-500 text-sm"
                      dateTime={income.date}
                    >
                      {dateFormat(income.date)}
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
                              onClick={() => {
                                setSelectedIncome(income);
                                setOpenModalIncome(true);
                              }}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              Edit
                              <span className="sr-only">, {income.name}</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }: any) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900 opacity-50 cursor-not-allowed"
                              )}
                            >
                              Move
                              <span className="sr-only">, {income.name}</span>
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
                              <span className="sr-only">, {income.name}</span>
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
    </>
  );
};

export default IncomePage;
