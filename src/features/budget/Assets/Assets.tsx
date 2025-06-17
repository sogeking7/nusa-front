"use client";

import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { financeService } from "@/lib/api-service";
import { format } from "date-fns";
import { AssetsBudgetCard } from "@/features/budget/Assets/AssetsBudgetCard";
import { useMemo } from "react";

interface IBudget {
  startBudget: number | null;
  endBudget: number | null;
}

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

  const parsedData: {
    longTerm: IBudget;
    shortTerm: IBudget;
  } = useMemo(() => {
    const shortTerm: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    const longTerm: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    if (!assets) {
      return {
        shortTerm,
        longTerm,
      };
    }
    let modAssets = assets.map((x) => ({
      ...x,
      start_period_value: x.start_period_value.replace(",", "."),
      end_period_value: x.end_period_value.replace(",", "."),
    }));
    const shortTermArr = modAssets.filter(
      (a) => Number(a.code) >= 0 && Number(a.code) <= 100,
    );
    const longTermArr = modAssets.filter(
      (a) => Number(a.code) >= 110 && Number(a.code) <= 200,
    );

    shortTerm.startBudget = shortTermArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value) || 0,
      0,
    );
    shortTerm.endBudget = shortTermArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value) || 0,
      0,
    );

    longTerm.startBudget = longTermArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value) || 0,
      0,
    );
    longTerm.endBudget = longTermArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value) || 0,
      0,
    );
    return {
      shortTerm,
      longTerm,
    };
  }, [assets]);

  return (
    <div className="space-y-4">
      <h2 className="col-span-full">Активы</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full md:col-span-1">
          <AssetsBudgetCard
            isLoading={isLoading}
            shouldFetch={shouldFetch}
            title="Красткосрочные"
            {...parsedData.shortTerm}
            startText="Начало отчет периода"
            endText="Конец отчет периода"
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
        <div className="col-span-full md:col-span-1">
          <AssetsBudgetCard
            isLoading={isLoading}
            shouldFetch={shouldFetch}
            title="Долгосрочные"
            {...parsedData.longTerm}
            startText="Начало отчет периода"
            endText="Конец отчет периода"
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
      </div>
    </div>
  );
}
