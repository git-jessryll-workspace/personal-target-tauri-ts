import { FC } from "react";
import {
  DashboardBills,
  DashboardOverallTransaction,
  DashboardStat,
} from "@/components/dashboard";

interface DashboardProps {}

const DashboardPage: FC<DashboardProps> = () => {
  return (
    <div className="-mt-4 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-0 md:gap-x-3">
      <div className="col-span-2 space-y-3">
        <DashboardStat />
        <DashboardOverallTransaction />
      </div>
      <div className="col-span-1 grid grid-cols-1 gap-y-2">
        <DashboardBills />
      </div>
    </div>
  );
};

export default DashboardPage;
