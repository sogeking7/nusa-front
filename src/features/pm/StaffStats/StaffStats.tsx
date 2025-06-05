"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { staffService } from "@/lib/api-service";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

interface StatItem {
  label: string;
  startValue: string | number;
  endValue: string | number;
  color?: "default" | "green" | "orange";
}

export default function StaffStats() {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: employeeReport, isLoading } = useQuery({
    queryKey: ["employeeReport", institution?.bin, startDate, endDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return staffService.getEmployeesReport(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  const getColorClass = (color: StatItem["color"]) => {
    switch (color) {
      case "green":
        return "text-primary-green";
      case "orange":
        return "text-primary-orange";
      default:
        return "text-white";
    }
  };

  const employeeStats: Array<StatItem> | null = employeeReport
    ? [
        {
          label: "Принято",
          startValue: employeeReport.hired_year,
          endValue: employeeReport.hired,
          color: "green" as const,
        },
        {
          label: "Выбыло",
          startValue: employeeReport.dropped_out_year,
          endValue: employeeReport.dropped_out,
          color: "orange" as const,
        },
        {
          label: "Вакансии",
          startValue: employeeReport.vacancies_year,
          endValue: employeeReport.vacancies,
        },
        {
          label: "Гражданско-правововые договора",
          startValue: employeeReport.civil_workers_year,
          endValue: employeeReport.civil_workers,
        },
      ]
    : null;

  return (
    <Card className={cn("!rounded-xl border border-white/20")}>
      <CardHeader className="space-y-3 !p-4">
        <CardTitle className="!text-base font-medium text-white">
          Работники за отчетный период
        </CardTitle>
        <div className="h-[1px] w-10 bg-primary-purple" />
        {employeeStats && (
          <p className="mt-1 text-right text-sm text-white">
            С начала года / за отчетный квартал
          </p>
        )}
      </CardHeader>
      <CardContent className="p-4">
        {(isLoading || !shouldFetch) && (
          <div className="flex items-center justify-center pb-4 text-center text-sm text-zinc-400">
            {!shouldFetch && <> Выберите период и филиал</>}
            {isLoading && (
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            )}
          </div>
        )}
        {!isLoading && employeeStats && (
          <div className="flex flex-col gap-4">
            {employeeStats.map((stat, index) => (
              <div key={index} className="flex justify-between gap-3">
                <span className={cn("text-sm", getColorClass(stat.color))}>
                  {stat.label}
                </span>
                <span className="flex-shrink-0 text-sm text-zinc-400">
                  {stat.startValue} / {stat.endValue}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
