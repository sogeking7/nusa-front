"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TurnoverBalanceTable } from "./TurnoverBalanceTable";
import { useQuery } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { useFilter } from "@/contexts/FilterContext";
import { format } from "date-fns";
import { TurnoverBalanceModel } from "@/lib/api-service/model/1c/turnover-balance-model";

interface StaffSalaryDialogProps {
  data: Array<TurnoverBalanceModel>;
  isOpen: boolean;
  onClose: () => void;
}

export function TurnoverBalanceDialog({
  data,
  isOpen,
  onClose,
}: StaffSalaryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90%]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Оборотно-сальдовая ведомость по счету {data[0].account}
          </DialogTitle>
        </DialogHeader>

        <TurnoverBalanceTable data={data} />

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
