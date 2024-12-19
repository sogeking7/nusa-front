import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileData } from "../pm/types";

interface ProfileCardProps {
  data: ProfileData;
}

export function ProfileCard({ data }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-lg border border-white/20 px-5 pb-10 pt-8 text-white">
      <CardHeader className="mb-10 flex flex-row items-start gap-4">
        {/* <Avatar className="h-40 w-32 rounded-none">
          <AvatarImage src={data.photo} alt={data.name} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar> */}
        <div className="h-40 w-32 shrink-0 bg-[#D9D9D9]"></div>
        <div className="h-full w-0.5 bg-white/20"></div>
        <div className="w-full space-y-1">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <div className="space-y-2 text-sm text-white">
            <div className="flex justify-start">
              <span className="w-1/2">Должность</span>
              <span className="w-1/2">{data.position}</span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Учреждение</span>
              <span className="w-1/2">{data.organization.name}</span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Подразделение</span>
              <span className="w-1/2">{data.organization.department}</span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Оклад</span>
              <span className="w-1/2">{data.organization.salary}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 sm:p-0">
        <div className="mb-10">
          <h3 className="mb-3 text-lg font-semibold">Общая информация</h3>
          <div className="space-y-2 text-sm text-white">
            <div className="flex justify-start">
              <span className="w-1/2">Год рождения</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.birthYear}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Пол</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.gender}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Национальность</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.nationality}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">ИИН</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.iin}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Вид работника</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.employeeType}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Дата факт приема</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.hireLocation}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Образование</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.education}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Место рождения</span>
              <span className="w-1/2 text-white/60">
                {data.personalInfo.birthPlace}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold">Контакты</h3>
          <div className="space-y-2 text-sm text-zinc-400">
            <div className="flex justify-start">
              <span className="w-1/2">Номер телефона</span>
              <span className="w-1/2">{data.contacts.phone}</span>
            </div>
            <div className="flex justify-start">
              <span className="w-1/2">Почта</span>
              <span className="w-1/2">{data.contacts.email}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
