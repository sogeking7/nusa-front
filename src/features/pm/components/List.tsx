import { twMerge } from "tailwind-merge";
import { ListRow } from "./ListRow";
import { Employee } from "../types";

interface ListProps {
  employees: Employee[];
  className?: string;
}

export function List({ employees, className }: ListProps) {
  return (
    <div className={twMerge("divide-y divide-white/20", className)}>
      {employees.map((employee) => (
        <ListRow key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
