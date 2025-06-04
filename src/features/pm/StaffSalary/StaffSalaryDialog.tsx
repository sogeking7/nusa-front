"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StaffSalaryTable } from "./StaffSalaryTable";
import { useQuery } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { useFilter } from "@/contexts/FilterContext";
import { format } from "date-fns";

interface StaffSalaryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StaffSalaryDialog({ isOpen, onClose }: StaffSalaryDialogProps) {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const {
    data: salaries,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["staffSalaries", institution?.bin, startDate],
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Заработные платы по должностям
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : isError ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-red-500">{error.message}</p>
          </div>
        ) : !salaries || salaries.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Нет данных о заработных платах</p>
          </div>
        ) : (
          <StaffSalaryTable data={salaries} />
        )}

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
