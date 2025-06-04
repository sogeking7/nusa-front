import { twMerge } from "tailwind-merge";
import { ListRow } from "./ListRow";
import { StaffModel } from "@/lib/api-service";

interface ListProps {
  employees: StaffModel[];
  className?: string;
}

export function List({ employees, className }: ListProps) {
  return (
    <div className={twMerge("divide-y divide-white/20", className)}>
      {employees.map((employee) => (
        <ListRow key={employee.staff_id} employee={employee} />
      ))}
    </div>
  );
}
