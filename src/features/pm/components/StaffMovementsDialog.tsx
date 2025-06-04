import { Button } from "@/components/ui/button";
import { StaffMovementsTable } from "./StaffMovementsTable";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { staffService } from "@/lib/api-service";
import { useMutation } from "@tanstack/react-query";

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
  const {
    data: movements,
    mutate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async (data: { staffId }) =>
      (await staffService.getStaffMovements(data.staffId)).data,
  });

  useEffect(() => {
    mutate({ staffId });
  }, [staffId, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Кадровые перемещения</DialogTitle>
        </DialogHeader>

        {isPending ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : isError ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-red-500">{error.message}</p>
          </div>
        ) : !movements || movements.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
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
