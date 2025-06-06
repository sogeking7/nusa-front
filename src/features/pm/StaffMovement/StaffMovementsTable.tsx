"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StaffMovementModel } from "@/lib/api-service";

interface StaffMovementsTableProps {
  data: StaffMovementModel[];
}

export function StaffMovementsTable({ data }: StaffMovementsTableProps) {
  return (
    <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
      <Table className="border-separate border-spacing-0 border-0">
        <TableHeader className="z-10 border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-b border-r border-white/20">
              Дата
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Должность
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Подразделение
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Учреждение
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Событие
            </TableHead>
            <TableHead className="border-b border-white/20">Документ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((movement, index) => (
            <TableRow className="bg-inherit" key={index}>
              <TableCell className="border-b border-r border-white/20">
                {new Date(movement.date).toLocaleDateString()}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {movement.position}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {movement.department}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {movement.institution}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {movement.event}
              </TableCell>
              <TableCell className="border-b border-white/20">
                {movement.document}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
