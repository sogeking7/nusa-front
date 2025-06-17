"use client";

import { BudgetLargeCard } from "@/features/budget/BudgetLargeCard";
import { BudgetCard } from "@/features/budget/BudgetCard";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { financeService } from "@/lib/api-service";
import { format } from "date-fns";
import { useMemo } from "react";
import { AssetsBudgetCard } from "@/features/budget/Assets/AssetsBudgetCard";
import { ObligationsBudgetCard } from "@/features/budget/ObligationsCapital/ObligationsBudgetCard";

interface IBudget {
  startBudget: number | null;
  endBudget: number | null;
}

export default function ObligationsCapital() {
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
    totalCapital: IBudget;
    balance: IBudget;
  } = useMemo(() => {
    const shortTerm: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    const longTerm: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    const totalCapital: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    const balance: IBudget = {
      startBudget: null,
      endBudget: null,
    };
    if (!assets) {
      return {
        totalCapital,
        balance,
        shortTerm,
        longTerm,
      };
    }
    let modAssets = assets.map((x) => ({
      ...x,
      start_period_value: x.start_period_value.replace(",", "."),
      end_period_value: x.end_period_value.replace(",", "."),
    }));
    modAssets = modAssets.map((x) => ({
      ...x,
      start_period_value: x.start_period_value ? x.start_period_value : "0",
      end_period_value: x.end_period_value ? x.end_period_value : "0",
    }));

    const shortTermArr = modAssets.filter(
      (a) => Number(a.code) >= 200 && Number(a.code) <= 300,
    );
    const longTermArr = modAssets.filter(
      (a) => Number(a.code) >= 310 && Number(a.code) <= 400,
    );
    const totalCapitalArr = modAssets.filter(
      (a) => Number(a.code) >= 410 && Number(a.code) <= 415,
    );
    const balanceArr = modAssets.filter(
      (a) => Number(a.code) >= 200 && Number(a.code) <= 415,
    );

    shortTerm.startBudget = shortTermArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value),
      0,
    );
    shortTerm.endBudget = shortTermArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value),
      0,
    );

    longTerm.startBudget = longTermArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value),
      0,
    );
    longTerm.endBudget = longTermArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value),
      0,
    );

    totalCapital.startBudget = totalCapitalArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value),
      0,
    );
    totalCapital.endBudget = totalCapitalArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value),
      0,
    );

    balance.startBudget = balanceArr.reduce(
      (acc, x) => acc + parseFloat(x.start_period_value),
      0,
    );
    balance.endBudget = balanceArr.reduce(
      (acc, x) => acc + parseFloat(x.end_period_value),
      0,
    );

    console.log(balanceArr);
    return {
      shortTerm,
      longTerm,
      totalCapital,
      balance,
    };
  }, [assets]);

  console.log("parsedData", parsedData);

  return (
    <div className="grid w-full gap-4">
      <h2 className="col-span-full">Обязательтсво и капитал</h2>
      <BudgetLargeCard>
        <ObligationsBudgetCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          title="Краткосрочных обьязательств"
          {...parsedData.shortTerm}
          startText="на начало отчетного периода"
          endText="на конец отчетного периода"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <ObligationsBudgetCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          title="Долгосрочных обязательств"
          {...parsedData.longTerm}
          startText="на начало отчетного периода"
          endText="на конец отчетного периода"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <ObligationsBudgetCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          className="!border-none"
          title="Всего капитала"
          {...parsedData.totalCapital}
          endText="на конец отчетного периода"
          startText="на начало отчетного периода"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <ObligationsBudgetCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          className="!border-none"
          title="Баланс"
          endText="на конец отчетного периода"
          {...parsedData.balance}
          startText="на начало отчетного периода"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
      </BudgetLargeCard>
    </div>
  );
}
