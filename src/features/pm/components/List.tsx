import { twMerge } from "tailwind-merge";
import { ListRow } from "./ListRow";
import { Staff } from "../api/staff.service.types";

interface ListProps {
  employees: Staff[];
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
