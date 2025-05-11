import { Button } from "@/components/ui/button";
import { StaffService } from "../api/staff.service";
import { StaffMovement } from "../api/staff.service.types";
import { StaffMovementsTable } from "./StaffMovementsTable";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface StaffMovementsDialogProps {
  staffId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function StaffMovementsDialog({
  staffId,
  isOpen,
  onClose,
}: StaffMovementsDialogProps) {
  const [movements, setMovements] = useState<StaffMovement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovements = async () => {
      if (!isOpen) return;

      setIsLoading(true);

      try {
        const staffService = StaffService();
        const response = await staffService.getStaffMovements({ staff_id: staffId });

        if (response.success) {
          setMovements(response.data);
          setError(null);
        } else {
          setError(response.data as string);
        }
      } catch (err) {
        setError("Failed to fetch staff movements");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovements();
  }, [staffId, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Кадровые перемещения</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex h-40  items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : error ? (
          <div className="flex h-40  items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : movements.length === 0 ? (
          <div className="flex h-40  items-center justify-center">
            <p className="text-white">Нет данных о перемещениях</p>
          </div>
        ) : (
          <StaffMovementsTable data={movements} />
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