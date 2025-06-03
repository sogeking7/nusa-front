import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StaffService } from "../api/staff.service";
import { StaffSalary } from "../api/staff.service.types";
import { StaffSalaryTable } from "./StaffSalaryTable";
import { useEffect, useState } from "react";

interface StaffSalaryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StaffSalaryDialog({ isOpen, onClose }: StaffSalaryDialogProps) {
  const [salaries, setSalaries] = useState<StaffSalary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSalaries = async () => {
      if (!isOpen) return;

      setIsLoading(true);

      try {
        const staffService = StaffService();
        const response = await staffService.getStaffSalaries();

        if (response.success) {
          setSalaries(response.data);
          setError(null);
        } else {
          setError(response.data as string);
        }
      } catch (err) {
        setError("Failed to fetch staff salaries");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSalaries();
  }, [isOpen]);

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
        ) : error ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : salaries.length === 0 ? (
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
