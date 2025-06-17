"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DisciplinaryModel } from "@/lib/api-service/model/1c/disciplinary-model";

interface DisciplinaryTableProps {
  data: DisciplinaryModel[];
}

export function DisciplinaryTable({ data }: DisciplinaryTableProps) {
  return (
    <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
      <Table className="border-separate border-spacing-0 border-0">
        <TableHeader className="z-10 border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-b border-r border-white/20">
              Дата взыскания
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Кто зарегистрировал взыскание
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Название учреждения
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Тип взыскания (выговор, замечание и т.д.)
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Причина взыскания
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Подразделение, где работает сотрудник
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Кто наложил взыскание
            </TableHead>
            <TableHead className="border-b border-white/20">
              Принятые меры (что сделали)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((x, index) => (
            <TableRow className="bg-inherit" key={index}>
              <TableCell className="border-b border-r border-white/20">
                {x.datePeriod}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.registrar}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.institution}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.penaltyType}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.reason}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.department}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.imposedBy}
              </TableCell>
              <TableCell className="border-b border-white/20">
                {x.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
