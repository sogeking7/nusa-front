"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StaffSalaryModel } from "@/lib/api-service";
import { cn, formatCurrency } from "@/lib/utils";

interface StaffSalaryTableProps {
  data: StaffSalaryModel[];
}

export function StaffSalaryTable({ data }: StaffSalaryTableProps) {
  return (
    <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
      <Table className="border-separate border-spacing-0 border-0">
        <TableHeader className="z-10 border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-b border-r border-white/20">
              Филиал
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Должность
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Подразделение
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Тип начисления
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Кол-во штатных единиц
            </TableHead>
            <TableHead className="border-b border-white/20">
              Оклад (₸)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((salary, index) => (
            <TableRow key={index}>
              <TableCell className="border-b border-r border-white/20">
                {salary.organization}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {salary.position}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {salary.department}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {salary.salary_type}
              </TableCell>
              <TableCell className="border-b border-r border-white/20 text-center">
                {salary.positions_amount}
              </TableCell>
              <TableCell
                className={cn(
                  data.length - 1 !== index && "border-b border-white/20",
                  "text-right",
                )}
              >
                {formatCurrency(parseFloat(salary.salary))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
