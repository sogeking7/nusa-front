"use client";

import { useQuery } from "@tanstack/react-query";
import { useFilter } from "@/contexts/FilterContext";
import { staffService } from "@/lib/api-service";
import { format } from "date-fns";
import { cn, formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function SalarySummary() {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: salarySummary, isLoading } = useQuery({
    queryKey: ["salarySummary", institution?.bin, startDate, endDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return staffService.getSalarySummary(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  return (
    <div className="space-y-4">
      <h2 className="font-medium text-white">Свод по заработной плате</h2>
      {(isLoading || !shouldFetch) && (
        <div className="flex items-center justify-center py-4 text-center text-sm text-zinc-400">
          {!shouldFetch && <> Выберите период и филиал</>}
          {isLoading && (
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
          )}
        </div>
      )}
      {!isLoading && salarySummary && (
        <>
          <SummaryCard
            label="Начислено"
            value={salarySummary.accrued_total}
            color="text-primary-purple"
          />
          <SummaryCard
            label="Удержано"
            value={salarySummary.withheld_total}
            color="text-primary-orange"
          />
          <SummaryCard
            label="Перечислено"
            value={salarySummary.transferred_total}
            color="text-primary-green"
          />
        </>
      )}
    </div>
  );
}

interface SummaryCardProps {
  label: string;
  value: string;
  color: "text-primary-purple" | "text-primary-orange" | "text-primary-green";
  className?: string;
}

export function SummaryCard({
  label,
  value,
  color,
  className,
}: SummaryCardProps) {
  return (
    <Card
      className={cn(
        "group !rounded-xl border border-white/20 transition-colors duration-200 hover:border-primary-green",
        className,
      )}
    >
      <CardContent className="space-y-3 !p-4">
        <div>
          <h2 className={cn("!text-base font-medium", color)}>{label}</h2>
          <div className="mt-2 h-[1px] w-10 bg-primary-purple transition-all duration-500 group-hover:w-3/4" />
        </div>
        <p className="text-2xl font-light tracking-wider text-white/50">
          {formatCurrency(parseFloat(value.replace(",", ".")))}
        </p>
      </CardContent>
    </Card>
  );
}
