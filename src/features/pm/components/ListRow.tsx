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
        "flex items-center gap-4 py-4 pl-7 pr-9 transition-colors hover:bg-white/10",
        className,
      )}
    >
      <Avatar>
        {employee.avatarUrl ? (
          <img src={employee.avatarUrl} alt={employee.name} />
        ) : (
          <AvatarFallback></AvatarFallback>
        )}
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-200">{employee.name}</p>
        <p className="text-sm text-gray-500">{employee.position}</p>
      </div>
      <div className="flex-1 text-center text-gray-300">
        {employee.institution}
      </div>
      <div className="flex-1 text-center text-gray-300">
        {employee.department}
      </div>
    </div>
  );
}
