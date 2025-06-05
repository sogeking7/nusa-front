"use client";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { StaffSalaryModel, staffService } from "@/lib/api-service";
import { format } from "date-fns";
import { useMemo } from "react";

interface SalaryStats {
  min: number;
  max: number;
  average: number;
}

export function calculateSalaryStats(data: StaffSalaryModel[]): SalaryStats {
  const numericSalaries = data
    .map((item) => Number(item.salary))
    .filter((salary) => !isNaN(salary));

  if (numericSalaries.length === 0) {
    return { min: 0, max: 0, average: 0 };
  }

  const min = Math.min(...numericSalaries);
  const max = Math.max(...numericSalaries);
  const sum = numericSalaries.reduce((acc, val) => acc + val, 0);
  const average = sum / numericSalaries.length;

  return { min, max, average };
}

export default function SalaryStats() {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: staffSalary, isLoading } = useQuery({
    queryKey: ["staffSalary", institution?.bin, startDate, endDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return staffService.getStaffSalary(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  const stats: SalaryStats = useMemo(() => {
    if (!staffSalary) return { min: 0, max: 0, average: 0 };
    return calculateSalaryStats(staffSalary);
  }, [staffSalary]);

  return (
    <div className="space-y-4">
      <h2 className="font-medium text-white">Заработные платы</h2>
      <Card className="rounded-xl border border-white/20">
        <CardContent className="space-y-3 !p-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          ) : (
            staffSalary && (
              <>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-purple">
                    Средняя
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(stats.average)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-green">
                    Высокая
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(stats.max)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-orange">
                    Низкая
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(stats.min)}
                  </span>
                </div>
              </>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}
