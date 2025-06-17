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
import { AwardsTable } from "@/features/pm/Awards/AwardsTable";

interface AwardsDialogProps {
  staffId: string;
  isOpen: boolean;
  onCloseAction: () => void;
}

export function AwardsDialog({
  staffId,
  isOpen,
  onCloseAction,
}: AwardsDialogProps) {
  const {
    data: awards,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["staff-awards", staffId],
    queryFn: () => staffService.getStaffAwards(staffId),
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCloseAction()}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Награды</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Загрузка...</p>
          </div>
        ) : isError ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-red-500">{error.message}</p>
          </div>
        ) : !awards || awards.length === 0 ? (
          <div className="flex h-40 items-center justify-center">
            <p className="text-white">Нет данных</p>
          </div>
        ) : (
          <AwardsTable data={awards} />
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
