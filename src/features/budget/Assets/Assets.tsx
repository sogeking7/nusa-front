"use client";

import { BudgetCard } from "@/features/budget/BudgetCard";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { financeService } from "@/lib/api-service";
import { format } from "date-fns";

export default function Assets() {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: assets, isLoading } = useQuery({
    queryKey: ["assets", institution?.bin, startDate, endDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return financeService.getAssets(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  return (
    <div className="space-y-4">
      <h2 className="col-span-full">Активы</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full md:col-span-1">
          <BudgetCard
            isLoading={isLoading}
            shouldFetch={shouldFetch}
            title="Долгосрочные"
            startText="Начало отчет периода"
            startBudget={assets?.data[0].start_period_value}
            endText="Конец отчет периода"
            endBudget={assets?.data[0].end_period_value}
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
        <div className="col-span-full md:col-span-1">
          <BudgetCard
            isLoading={isLoading}
            shouldFetch={shouldFetch}
            title="Красткосрочные"
            startText="Начало отчет периода"
            startBudget={assets?.data[0].start_period_value}
            endText="Конец отчет периода"
            endBudget={assets?.data[0].end_period_value}
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
      </div>
    </div>
  );
}
