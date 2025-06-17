"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { staffService } from "@/lib/api-service";
import { useQuery } from "@tanstack/react-query";
import { DisciplinaryTable } from "@/features/pm/Disciplinary/DisciplinaryTable";

interface DisciplinaryDialogProps {
  staffId: string;
  isOpen: boolean;
  onCloseAction: () => void;
}

export function DisciplinaryDialog({
  staffId,
  isOpen,
  onCloseAction,
}: DisciplinaryDialogProps) {
  const {
    data: disciplinary,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["staff-disciplinary", staffId],
    queryFn: () => staffService.getStaffDisciplinary(staffId),
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCloseAction()}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Дисциплинарки</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : isError ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-red-500">{error.message}</p>
          </div>
        ) : !disciplinary || disciplinary.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Нет данных</p>
          </div>
        ) : (
          <DisciplinaryTable data={disciplinary} />
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
