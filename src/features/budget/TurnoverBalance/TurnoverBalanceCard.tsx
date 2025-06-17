"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, formatCurrency } from "@/lib/utils";
import React from "react";

interface BudgetCardProps {
  title: string;
  startText: string;
  startBudget: number | null;
  endText: string;
  endBudget: number | null;
  startClassName?: string;
  endClassName?: string;
  className?: string;
  isLoading?: boolean;
  shouldFetch?: boolean;
}

export const TurnoverBalanceCard = ({
  title,
  startText,
  startBudget,
  endText,
  endBudget,
  startClassName,
  endClassName,
  className,
  isLoading = false,
  shouldFetch = true,
}: BudgetCardProps) => {
  return (
    <Card
      className={cn(
        "group border border-white/20 transition-colors duration-200 hover:border-primary-green",
        className,
      )}
    >
      <CardHeader className="p-4 pb-3">
        <CardTitle>
          <div className="space-y-1 text-white">
            <h2 className="font-bold max-lg:text-xs">{title}</h2>
            <div className="h-[1px] w-10 bg-primary-purple transition-all duration-500 group-hover:w-3/4" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4">
        {(isLoading || !shouldFetch) && (
          <div className="flex w-full items-center justify-center py-4 text-center text-sm text-zinc-400">
            {!shouldFetch && <> Выберите период и филиал</>}
            {isLoading && (
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            )}
          </div>
        )}
        {!isLoading && startBudget !== null && endBudget !== null && (
          <>
            <div className="md:w-1/2">
              <h3 className={cn(startClassName, "max-lg:text-xs")}>
                {startText}
              </h3>
              <p className="mt-1 text-base font-extralight text-white/50 lg:text-2xl">
                {formatCurrency(startBudget)}
              </p>
            </div>
            <div className="my-1 min-h-full border-r-[1px] border-r-white/20"></div>
            <div className="md:w-1/2">
              <h3 className={cn(endClassName, "max-lg:text-xs")}>{endText}</h3>
              <p className="mt-1 text-base font-extralight text-white/50 lg:text-2xl">
                {formatCurrency(endBudget)}
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
