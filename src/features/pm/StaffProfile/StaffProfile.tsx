"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProfileData } from "./model";
import { StaffInfoModel } from "@/lib/api-service";

interface ProfileCardProps {
  staffInfo: StaffInfoModel;
}

export default function StaffProfile({ staffInfo }: ProfileCardProps) {
  const data: ProfileData = {
    name:
      staffInfo.lastname +
      " " +
      staffInfo.firstname +
      " " +
      staffInfo.patronymic,
    position: staffInfo.position_name,
    organization: {
      name: staffInfo.institution_name,
      department: staffInfo.department_name,
      salary: `${staffInfo.salary.toLocaleString()} ₸`,
    },
    personalInfo: {
      birthYear: staffInfo.birth_date,
      gender: staffInfo.gender,
      nationality: staffInfo.nationality,
      iin: staffInfo.staff_iin,
      employeeType: staffInfo.worker_type,
      hireLocation: staffInfo.hire_date,
      education: staffInfo.education,
      birthPlace: staffInfo.birthplace,
    },
    contacts: {
      phone: staffInfo.phone,
      email: staffInfo.mail,
    },
  };

  const infoRows = [
    { label: "Год рождения", value: data.personalInfo.birthYear },
    { label: "Пол", value: data.personalInfo.gender },
    { label: "Национальность", value: data.personalInfo.nationality },
    { label: "ИИН", value: data.personalInfo.iin },
    { label: "Вид работника", value: data.personalInfo.employeeType },
    { label: "Дата факт приема", value: data.personalInfo.hireLocation },
    { label: "Образование", value: data.personalInfo.education },
    { label: "Место рождения", value: data.personalInfo.birthPlace },
  ];

  const contactRows = [
    { label: "Номер телефона", value: data.contacts.phone },
    { label: "Почта", value: data.contacts.email },
  ];

  return (
    <Card className="w-full space-y-4 rounded-lg border border-white/20 p-4 text-white lg:space-y-10">
      <CardHeader className="flex h-full flex-row gap-4">
        <div className="h-24 w-20 shrink-0 rounded-md bg-[#D9D9D9] md:h-40 md:w-32"></div>
        <div className="min-h-full border-[1px] border-white/20"></div>
        <div className="flex w-full max-w-sm flex-col space-y-3">
          <h1 className="text-sm font-semibold lg:text-xl">{data.name}</h1>
          <table className="text-sm text-white">
            <tbody>
              {[
                { label: "Должность", value: data.position },
                { label: "Учреждение", value: data.organization.name },
                { label: "Подразделение", value: data.organization.department },
                { label: "Оклад", value: data.organization.salary },
              ].map(({ label, value }, index) => (
                <tr key={index}>
                  <td className="pr-4 pt-2">{label}</td>
                  <td className="text-white/60">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 !p-0 lg:space-y-10">
        <Section title="Общая информация" rows={infoRows} />
        <Section title="Контакты" rows={contactRows} />
      </CardContent>
    </Card>
  );
}

interface SectionProps {
  title: string;
  rows: { label: string; value: string | undefined }[];
}

function Section({ title, rows }: SectionProps) {
  return (
    <div>
      <h3 className="mb-3 font-semibold lg:mb-2">{title}</h3>
      <div className="mb-3 h-[1px] w-10 bg-primary-purple" />
      <div className="space-y-2 text-sm">
        {rows.map(({ label, value }, index) => (
          <div className="flex justify-start" key={index}>
            <span className="w-1/2">{label}</span>
            <span className="w-1/2 text-white/60">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
