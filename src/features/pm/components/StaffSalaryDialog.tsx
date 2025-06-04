import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StaffSalaryTable } from "./StaffSalaryTable";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { useFilter } from "@/contexts/FilterContext";

interface StaffSalaryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StaffSalaryDialog({ isOpen, onClose }: StaffSalaryDialogProps) {
  const { startDate, endDate, institution } = useFilter();

  const {
    data: salaries,
    mutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: {
      bin: string;
      dateFrom: string;
      dateTo: string;
    }) =>
      (await staffService.getStaffSalary(data.bin, data.dateFrom, data.dateTo))
        .data,
  });

  useEffect(() => {
    if (!startDate || !endDate || !institution) return;
    mutate({
      bin: institution.bin,
      dateFrom: startDate.toString(),
      dateTo: endDate.toString(),
    });
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Заработные платы по должностям
          </DialogTitle>
        </DialogHeader>

        {isPending ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : error ? (
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
