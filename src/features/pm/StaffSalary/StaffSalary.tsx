"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { format } from "date-fns";
import { StaffSalaryDialog } from "./StaffSalaryDialog";

export default function StaffSalary() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <Card
        className={cn(
          "relative cursor-pointer !rounded-xl border border-white/20",
        )}
        onClick={() => setOpen(true)}
      >
        <CardContent className="!p-4">
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <ArrowUpRight />
          </Button>

          <div className="space-y-3 pr-12 text-white">
            <h2 className="font-medium">Заработные платы по должностям</h2>
            <div className="h-[1px] w-10 bg-primary-purple" />
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          ) : (
            staffSalary && (
              <>
                {staffSalary.slice(4).map((s, idx) => (
                  <div key={idx} className="mt-3">
                    <p className="text-white">
                      {s.department + " - " + s.position}
                    </p>
                    <p className="mt-1 font-light tracking-wide text-white/50">
                      {formatCurrency(s.salary)}
                    </p>
                  </div>
                ))}
              </>
            )
          )}
        </CardContent>
      </Card>
      <StaffSalaryDialog isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
