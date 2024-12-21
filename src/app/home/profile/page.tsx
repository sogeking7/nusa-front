import { Button } from "@/components/ui/button";
import { WorkSchedule } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileCard } from "@/features/profile/ProfileCard";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const profileData = {
    name: "Жарасова А.",
    position: "Руководитель",
    organization: {
      name: "Учреждение",
      department: "Подразделение",
      salary: "150 000,00 ₸",
    },
    personalInfo: {
      birthYear: "1990 г.",
      gender: "Женский",
      nationality: "Казах",
      iin: "384578375784",
      employeeType: "Штатный сотрудник",
      hireLocation: "Астана",
      education: "Назарбаев Университет",
      birthPlace: "Астана",
    },
    contacts: {
      phone: "+7 707 283 84 97",
      email: "post@gmail.com",
    },
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_1fr]">
      <ProfileCard data={profileData} />
      <div className="flex flex-col space-y-3">
        <WorkSchedule />
        <Card className={"cursor-pointer !rounded-xl border border-white/20"}>
          <CardContent className="flex items-center justify-between p-4 lg:p-5">
            <h2 className="font-medium text-white">Награды</h2>
            <Button variant="outline" size="icon">
              <ArrowUpRight />
            </Button>
          </CardContent>
        </Card>
        <Card className={"cursor-pointer !rounded-xl border border-white/20"}>
          <CardContent className="flex items-center justify-between p-4 lg:p-5">
            <h2 className="font-medium text-white">Дисциплинарки</h2>
            <Button variant="outline" size="icon">
              <ArrowUpRight />
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card
        className={
          "relative h-fit cursor-pointer !rounded-xl border border-white/20"
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
          <h2 className="mb-5 text-2xl font-semibold text-white">
            Кадровые перемещения
          </h2>
          <div className="space-y-4 text-sm text-white">
            <div className="flex justify-start">
              <span className="flex-1">Учреждение</span>
              <span className="flex-1 text-[#898989]">Должность</span>
            </div>
            <div className="flex justify-start">
              <span className="flex-1">РГП ПХВ Стрела</span>
              <span className="flex-1 text-[#898989]">Главный специалист</span>
            </div>
            <div className="flex justify-start">
              <span className="flex-1">РГП ПХВ Стрела</span>
              <span className="flex-1 text-[#898989]">Главный Бухгалтер</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
