'use client';

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { format } from "date-fns";

export default function SalaryStats() {
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
      <h2 className="font-medium text-white">Заработные платы</h2>
      <Card className="rounded-lg border border-white/20">
        <CardContent className="space-y-3 !p-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          ) : (
            salarySummary && (
              <>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-purple">
                    Средняя
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(salarySummary.salaryRange.average)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-green">
                    Высокая
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(salarySummary.salaryRange.high)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-medium text-primary-orange">
                    Низкая
                  </span>
                  <span className="font-light tracking-wider text-white/50">
                    {formatCurrency(salarySummary.salaryRange.low)}
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
