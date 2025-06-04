"use client";

import { twMerge } from "tailwind-merge";
import { StaffListTableRow } from "./StaffListTableRow";
import { StaffModel } from "@/lib/api-service";

interface ListProps {
  employees: StaffModel[];
  className?: string;
}

export function StaffListTable({ employees, className }: ListProps) {
  return (
    <div className={twMerge("divide-y divide-white/20", className)}>
      {employees.map((employee) => (
        <StaffListTableRow key={employee.staff_id} employee={employee} />
      ))}
    </div>
  );
}
