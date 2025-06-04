"use client";

import { useState, use } from "react";
import { useQuery } from "@tanstack/react-query";
import { staffService } from "@/lib/api-service";
import { WorkSchedule } from "@/ui/WorkSchedule";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { StaffMovementsDialog } from "@/features/pm/StaffMovement/StaffMovementsDialog";
import GoBackButton from "@/components/custom/GoBackButton";
import StaffProfile from "@/features/pm/StaffProfile/StaffProfile";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: staffId } = use(params);
  const [isMovementsDialogOpen, setIsMovementsDialogOpen] = useState(false);

  const {
    data: staffInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["staff-info", staffId],
    queryFn: () => staffService.getStaffInfo(staffId),
  });

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-white/60">
        Загрузка...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-destructive">
        {error.message}
      </div>
    );
  }

  if (!staffInfo) {
    return (
      <div className="flex h-full items-center justify-center text-destructive">
        Сотрудник не найден
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-full">
          <GoBackButton />
        </div>
        <div className="col-span-5">
          <StaffProfile staffInfo={staffInfo} />
        </div>
        <div className="col-span-5 flex flex-col space-y-3 lg:col-span-4">
          <WorkSchedule />
          {["Награды", "Дисциплинарки"].map((title) => (
            <Card
              key={title}
              className={"cursor-pointer !rounded-xl border border-white/20"}
            >
              <CardContent className="flex items-center justify-between !p-4">
                <h2 className="font-semibold text-white">{title}</h2>
                <Button variant="outline" size="icon">
                  <ArrowUpRight />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card
          className={
            "relative col-span-5 h-fit cursor-pointer !rounded-xl border border-white/20 lg:col-span-3"
          }
        >
          <CardContent className="!p-4">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsMovementsDialogOpen(true);
              }}
            >
              <ArrowUpRight />
            </Button>
            <h2 className="mb-5 font-semibold text-white">
              Кадровые перемещения
            </h2>
            <div className="space-y-4 text-sm text-white">
              <div className="flex justify-start">
                <span className="flex-1">Учреждение</span>
                <span className="flex-1 text-[#898989]">Должность</span>
              </div>
              <div className="flex justify-start">
                <span className="flex-1">{staffInfo.institution}</span>
                <span className="flex-1 text-[#898989]">
                  {staffInfo.position}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <StaffMovementsDialog
        staffId={staffId}
        isOpen={isMovementsDialogOpen}
        onCloseAction={() => setIsMovementsDialogOpen(false)}
      />
    </div>
  );
}
