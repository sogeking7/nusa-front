"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { WorkSchedule } from "@/ui/WorkSchedule";
import { MOCK_STAFF_INFO } from "@/lib/api-service/api/1c/mock";
import StaffProfile from "@/features/pm/StaffProfile/StaffProfile";
import GoBackButton from "@/components/custom/GoBackButton";

export default function Page() {
  const staffInfo = MOCK_STAFF_INFO[0];

  return (
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
  );
}
