"use client";

import GenderChart from "@/features/pm/GenderChart/GenderChart";
import StaffSalary from "@/features/pm/StaffSalary/StaffSalary";
import StaffStats from "@/features/pm/StaffStats/StaffStats";
import SalaryStats from "@/features/pm/SalaryStats/SalaryStats";
import SalarySummary from "@/features/pm/SalarySummary/SalarySummary";
import StaffList from "@/features/pm/StaffList/StaffList";
import { useAuth } from "@/contexts/AuthContext";

export default function Page() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="mb-2 text-white md:text-3xl">Панель управления кадрами</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {user?.user_type !== "accountant" && (
          <div className="col-span-full lg:col-span-5">
            <StaffList />
          </div>
        )}
        <div className="col-span-full space-y-4 lg:col-span-4">
          <GenderChart />
          <StaffSalary />
          <StaffStats />
        </div>
        <div className="col-span-full space-y-4 lg:col-span-3">
          <SalaryStats />
          <SalarySummary />
        </div>
      </div>
    </div>
  );
}
