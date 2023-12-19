import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { amountFormat, classNames } from "@/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const stats = [
  {
    name: "Total Income",
    stat: 71897,
    previousStat: 70946,
    change: 12,
    changeType: "increase",
  },
  {
    name: "Total Expense",
    stat: 58.16,
    previousStat: "56.14%",
    change: 2.02,
    changeType: "increase",
  },
];

const data = [
  {
    name: "Electricity Bill",
    amount: "100.00",
    id: "1234567890",
    date: "2021-01-01T12:00:00Z",
  },
  {
    name: "Water Bill",
    amount: "50.00",
    id: "0987654321",
    date: "2021-01-02T09:00:00Z",
  },
  {
    name: "Internet Bill",
    amount: "80.00",
    id: "1357924680",
    date: "2021-01-03T15:30:00Z",
  },
  {
    name: "Phone Bill",
    amount: "30.00",
    id: "2468135790",
    date: "2021-01-04T18:45:00Z",
  },
  {
    name: "Gas Bill",
    amount: "70.00",
    id: "9876543210",
    date: "2021-01-05T10:15:00Z",
  },
  {
    name: "Cable TV Bill",
    amount: "60.00",
    id: "0123456789",
    date: "2021-01-06T14:20:00Z",
  },
  {
    name: "Credit Card Bill",
    amount: "200.00",
    id: "5678901234",
    date: "2021-01-07T16:30:00Z",
  },
  {
    name: "Mortgage Payment",
    amount: "1000.00",
    id: "4321098765",
    date: "2021-01-08T11:00:00Z",
  },
  {
    name: "Car Loan Payment",
    amount: "300.00",
    id: "7890123456",
    date: "2021-01-09T13:45:00Z",
  },
  {
    name: "Student Loan Payment",
    amount: "150.00",
    id: "3210987654",
    date: "2021-01-10T17:00:00Z",
  },
].map((item: any) => ({ ...item, amount: +item.amount }));

export default function DashboardStat() {
  return (
    <div className="">
      <div className="grid grid-cols-1 border bg-white rounded-lg shadow-md p-1">
        <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden bg-white md:grid-cols-2 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-gray-700">
                  {amountFormat(+item.stat)}
                  <span className="ml-2 text-sm font-medium text-gray-500"></span>
                </div>

                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="w-full border p-3 bg-white rounded-lg shadow-md mt-5">
        <div className="pl-5 mb-3 pb-2 border-b">
          <h3 className="font-bold text-gray-700">Transactions</h3>
        </div>
        <ResponsiveContainer className={"w-full"} aspect={2}>
          <AreaChart className="text-xs" data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
