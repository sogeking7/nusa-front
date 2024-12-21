import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { twMerge } from "tailwind-merge";
import { Employee } from "../types";

interface ListRowProps {
  employee: Employee;
  className?: string;
}

export function ListRow({ employee, className }: ListRowProps) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 p-4 text-white transition-colors hover:bg-white/10 md:gap-4",
        className,
      )}
    >
      <Avatar className="shrink-0">
        {employee.avatarUrl ? (
          <img src={employee.avatarUrl} alt={employee.name} />
        ) : (
          <AvatarFallback></AvatarFallback>
        )}
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{employee.name}</p>
        <p className="text-sm text-[#898989]">{employee.position}</p>
      </div>
      <div className="flex-1 text-center text-sm">{employee.institution}</div>
      <div className="flex-1 text-center text-sm">{employee.department}</div>
    </div>
  );
}
