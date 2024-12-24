import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

export const BudgetCard = (props: {
  title: string;
  startText: string;
  startBudget: number | string;
  endText: string;
  endBudget: number | string;
  startClassName?: string;
  endClassName?: string;
}) => {
  return (
    <Card className="border border-white/20">
      <CardHeader className="p-4 pb-3">
        <CardTitle>
          <div className="space-y-1 text-white">
            <h2 className="text-base font-medium">{props.title}</h2>
            <div className="h-[1px] w-10 bg-primary-purple" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4">
        <div className="md:w-1/2">
          <h3 className={cn(props.startClassName, "")}>{props.startText}</h3>
          <p className="mt-1 text-2xl font-extralight text-white/50">
            {props.startBudget}
          </p>
        </div>
        <div className="my-1 min-h-full border-r-[1px] border-r-white/20"></div>
        <div className="md:w-1/2">
          <h3 className={cn(props.endClassName, "")}>{props.endText}</h3>
          <p className="mt-1 text-2xl font-extralight text-white/50">
            {props.endBudget}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
