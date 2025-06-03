"use client";

import { EmployeeStatsCard } from "@/features/pm/components/EmployeeStats";
import ListContainer from "@/features/pm/components/ListContainer";
import { SalaryCard } from "@/features/pm/components/SalaryCard";
import { SalaryStats } from "@/features/pm/components/SalaryStats";
import { SummaryCard } from "@/features/pm/components/SummaryCard";
import { GenderChart } from "@/features/pm/components/GenderChart";
import { StaffSalaryDialog } from "@/features/pm/components/StaffSalaryDialog";
import { useState } from "react";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { StaffService } from "@/features/pm/api/staff.service";
import { format } from "date-fns";

const mockData = {
  genderStats: {
    total: 97,
    men: 57,
    women: 40,
  },
  salaryRange: {
    average: 180000.0,
    high: 300000.0,
    low: 130000.0,
  },
  salarySummary: {
    accrued: 971096193.46,
    withheld: 43585304.5,
    transferred: 1789111191.02,
  },
};

export default function HomePage() {
  const [isSalaryDialogOpen, setIsSalaryDialogOpen] = useState(false);
  const { startDate, endDate, branch } = useFilter();
  const staffService = StaffService();

  // Format the dates for the API
  const formattedStartDate = startDate
    ? format(startDate, "yyyy-MM-dd")
    : undefined;
  const formattedEndDate = endDate ? format(endDate, "yyyy-MM-dd") : undefined;

  // Determine if we should make the API call
  const shouldFetch = Boolean(startDate && endDate);

  // Get employee report data with filters
  const { data: employeeReport, isLoading: isLoadingReport } = useQuery({
    queryKey: ["employeeReport", formattedStartDate, formattedEndDate, branch],
    queryFn: () =>
      staffService.getEmployeeReport({
        period_start: formattedStartDate,
        period_end: formattedEndDate,
        branches: branch ? [branch] : undefined,
      }),
    enabled: shouldFetch,
  });

  // Prepare employee stats data from API or use empty values if not loaded
  const employeeStats =
    shouldFetch && employeeReport?.success
      ? [
          {
            label: "Принято",
            startValue: employeeReport.data.hired_year,
            endValue: employeeReport.data.hired,
            color: "green" as const,
          },
          {
            label: "Выбыло",
            startValue: employeeReport.data.dropped_out_year,
            endValue: employeeReport.data.dropped_out,
            color: "orange" as const,
          },
          {
            label: "Вакансии",
            startValue: employeeReport.data.vacancies_year,
            endValue: employeeReport.data.vacancies,
          },
          {
            label: "Гражданско-правововые договора",
            startValue: employeeReport.data.civil_workers_year,
            endValue: employeeReport.data.civil_workers,
          },
        ]
      : [];

  return (
    <>
      <h1 className="mb-2 text-white md:mb-6 md:text-3xl">
        Панель управления кадрами
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-full lg:col-span-5">
          <ListContainer />
        </div>
        <div className="col-span-full space-y-4 lg:col-span-4">
          <h2 className="font-medium text-white">Состав по полу</h2>
          <GenderChart />
          <SalaryCard
            title="Заработные платы по должностям"
            subtitle="Главный специалист"
            value="258 000, 00 ₸"
            onClick={() => setIsSalaryDialogOpen(true)}
          />
          {shouldFetch ? (
            <EmployeeStatsCard
              title="Работники за отчетный период"
              subtitle="С начала года / за отчетный квартал"
              stats={employeeStats}
              isLoading={isLoadingReport}
            />
          ) : (
            <EmployeeStatsCard
              title="Работники за отчетный период"
              subtitle="Выберите период для отображения данных"
              stats={[]}
              isLoading={false}
              isEmpty
            />
          )}
        </div>
        <div className="col-span-full space-y-4 lg:col-span-3">
          <h2 className="font-medium text-white">Заработные платы</h2>
          <SalaryStats salaryRange={mockData.salaryRange} />
          <div className="space-y-4">
            <h2 className="font-medium text-white">Свод по заработной плате</h2>
            <SummaryCard
              label="Начислено"
              value={mockData.salarySummary.accrued}
              color="purple"
            />
            <SummaryCard
              label="Удержано"
              value={mockData.salarySummary.withheld}
              color="orange"
            />
            <SummaryCard
              label="Перечисление"
              value={mockData.salarySummary.transferred}
              color="green"
            />
          </div>
        </div>
      </div>

      <StaffSalaryDialog
        isOpen={isSalaryDialogOpen}
        onClose={() => setIsSalaryDialogOpen(false)}
      />
    </>
  );
}
