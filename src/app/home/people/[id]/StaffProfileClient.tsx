"use client";

import { Button } from "@/components/ui/button";
import { WorkSchedule } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileCard } from "@/features/profile/ProfileCard";
import { StaffService } from "@/features/pm/api/staff.service";
import { StaffInfo } from "@/features/pm/api/staff.service.types";
import { StaffMovementsDialog } from "@/features/pm/components/StaffMovementsDialog";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface StaffProfileClientProps {
  staffId: string;
}

export default function StaffProfileClient({ staffId }: StaffProfileClientProps) {
  const [staffInfo, setStaffInfo] = useState<StaffInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMovementsDialogOpen, setIsMovementsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchStaffInfo = async () => {
      const staffService = StaffService();
      const response = await staffService.getStaffInfo({ staff_id: staffId });

      if (response.success) {
        setStaffInfo(response.data);
      } else {
        setError(response.data as string);
      }
      setIsLoading(false);
    };

    fetchStaffInfo();
  }, [staffId]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-white/60">
        Загрузка...
      </div>
    );
  }

  if (error || !staffInfo) {
    return (
      <div className="flex h-full items-center justify-center text-red-500">
        {error || "Сотрудник не найден"}
      </div>
    );
  }

  const profileData = {
    name: staffInfo.full_name,
    position: staffInfo.position,
    organization: {
      name: staffInfo.institution,
      department: staffInfo.department,
      salary: `${staffInfo.salary.toLocaleString()} ₸`,
    },
    personalInfo: {
      birthYear: new Date(staffInfo.birth_date).getFullYear().toString(),
      gender: staffInfo.gender,
      nationality: staffInfo.nationality,
      iin: staffInfo.id_number,
      employeeType: staffInfo.worker_type,
      hireLocation: new Date(staffInfo.hire_date).toLocaleDateString(),
      education: staffInfo.education,
      birthPlace: staffInfo.birthplace,
    },
    contacts: {
      phone: staffInfo.phone,
      email: staffInfo.mail,
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-5">
          <ProfileCard data={profileData} />
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
          onClick={() => setIsMovementsDialogOpen(true)}
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
                <span className="flex-1 text-[#898989]">{staffInfo.position}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <StaffMovementsDialog
        staffId={staffId}
        isOpen={isMovementsDialogOpen}
        onClose={() => setIsMovementsDialogOpen(false)}
      />
    </>
  );
}