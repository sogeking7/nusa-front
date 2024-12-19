import { WorkSchedule } from "@/components/ui/calendar";
import { ProfileCard } from "@/features/profile/ProfileCard";

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
      <WorkSchedule />
    </div>
  );
}
