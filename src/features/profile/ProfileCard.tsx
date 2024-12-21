import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileData } from "../pm/types";

interface ProfileCardProps {
  data: ProfileData;
}

export function ProfileCard({ data }: ProfileCardProps) {
  return (
    <Card className="w-full space-y-4 rounded-lg border border-white/20 p-4 text-white lg:space-y-10 lg:p-6">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        {/* <Avatar className="h-40 w-32 rounded-none">
          <AvatarImage src={data.photo} alt={data.name} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar> */}
        <div className="h-24 w-20 shrink-0 rounded-md bg-[#D9D9D9] md:h-40 md:w-32"></div>
        <div className="h-full w-0.5 bg-white/20 max-lg:hidden"></div>
        <div className="w-full space-y-1 space-y-reverse">
          <h2 className="text-sm font-semibold lg:text-xl">{data.name}</h2>
          <div className="space-y-2 text-sm text-white">
            <div className="flex justify-start">
              <span className="flex-1">Должность</span>
              <span className="flex-1 text-white/60">{data.position}</span>
            </div>
            <div className="flex justify-start">
              <span className="flex-1">Учреждение</span>
              <span className="flex-1 text-white/60">
                {data.organization.name}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="flex-1">Подразделение</span>
              <span className="flex-1 text-white/60">
                {data.organization.department}
              </span>
            </div>
            <div className="flex justify-start">
              <span className="flex-1">Оклад</span>
              <span className="flex-1 text-white/60">
                {data.organization.salary}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-0 sm:p-0 lg:space-y-10">
        <div className="">
          <h3 className="mb-3 text-sm font-semibold lg:mb-2 lg:text-lg">
            Общая информация
          </h3>
          <div className="h-[1px] w-10 bg-primary-purple max-lg:hidden lg:mb-3" />
          <div className="space-y-2 text-white max-lg:text-xs">
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
          <h3 className="mb-3 text-sm font-semibold lg:mb-2 lg:text-lg">
            Контакты
          </h3>
          <div className="h-[1px] w-10 bg-primary-purple max-lg:hidden lg:mb-3" />{" "}
          <div className="space-y-2 max-lg:text-xs">
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
