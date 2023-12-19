import bills from "@/json/bills.json";
import { amountFormat, dateFormat, paidStatuses } from "@/utils";

export default function DashboardBills() {
  return (
    <div className="px-4 pt-5 pb-2 border border-gray-300 rounded-md bg-white">
      <div className="border-b border-gray-300 pb-2">
        <h3 className="font-bold text-gray-600 text-sm">Monthly Bills</h3>
      </div>
      <ul role="list" className="divide-y divide-gray-100 mt-1">
        {bills.map((bill: any) => (
          <li key={bill.id} className="relative flex justify-between py-2">
            <div className="flex gap-x-4 pr-6 sm:flex-none flex-col">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {bill.name}
                </p>
              </div>
              <p
                className={`${
                  paidStatuses[bill.status]
                } border text-[0.5rem] shadow-sm px-1 py-0.5 rounded-md flex justify-center w-[60px]`}
              >
                {bill.status}
              </p>
            </div>
            <div className="flex items-center justify-between sm:flex-none">
              <div className="text-right w-full">
                <p className="text-base font-semibold leading-6 text-gray-900">
                  {amountFormat(+bill.amount)}
                </p>
                <p className="text-xs text-gray-500">{dateFormat(bill.date)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
