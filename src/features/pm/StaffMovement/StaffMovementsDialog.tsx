"use client";

import { Button } from "@/components/ui/button";
import { StaffMovementsTable } from "./StaffMovementsTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { staffService } from "@/lib/api-service";
import { useQuery } from "@tanstack/react-query";

interface StaffMovementsDialogProps {
  staffId: string;
  isOpen: boolean;
  onCloseAction: () => void;
}

export function StaffMovementsDialog({
  staffId,
  isOpen,
  onCloseAction,
}: StaffMovementsDialogProps) {
  const {
    data: staffMovements,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["staffMovements"],
    queryFn: () => staffService.getStaffMovements(staffId),
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCloseAction()}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Кадровые перемещения {staffId}
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
        ) : !staffMovements || staffMovements.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Нет данных о перемещениях</p>
          </div>
        ) : (
          <StaffMovementsTable data={staffMovements} />
        )}

        <div className="flex justify-end">
          <Button variant="outline" onClick={onCloseAction}>
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
