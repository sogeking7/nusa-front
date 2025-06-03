import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { twMerge } from "tailwind-merge";
import { Staff } from "../api/staff.service.types";
import { useRouter } from "next/navigation";

interface ListRowProps {
  employee: Staff;
  className?: string;
}

export function ListRow({ employee, className }: ListRowProps) {
  const router = useRouter();
  const fullName = `${employee.firstname} ${employee.lastname}`;

  const handleClick = () => {
    router.push(`/home/people/${employee.staff_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "flex cursor-pointer items-center gap-2 p-4 text-white transition-colors hover:bg-white/10 md:gap-4",
        className,
      )}
    >
      <Avatar className="shrink-0">
        <AvatarFallback>
          {employee.firstname[0]}
          {employee.lastname[0]}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{fullName}</p>
        <p className="text-sm text-[#898989]">
          {employee.gender === "male" ? "Мужской" : "Женский"}
        </p>
      </div>
      <div className="flex-1 text-center text-sm">{employee.institution}</div>
      <div className="flex-1 text-center text-sm">{employee.department}</div>
    </div>
  );
}
