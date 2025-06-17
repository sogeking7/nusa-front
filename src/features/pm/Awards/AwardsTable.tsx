"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AwardsModel } from "@/lib/api-service/model/1c/awards-model";

interface AwardsTableProps {
  data: AwardsModel[];
}

export function AwardsTable({ data }: AwardsTableProps) {
  return (
    <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
      <Table className="border-separate border-spacing-0 border-0">
        <TableHeader className="z-10 border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-b border-r border-white/20">
              Дата награждения
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Физ лицо (ФИО сотрудника)
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Вид награды (медаль, грамота и т.д.)
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Тип награды (государственная, ведомственная и т.д.)
            </TableHead>
            <TableHead className="border-b border-r border-white/20">
              Номер приказа о награждении
            </TableHead>
            <TableHead className="border-b border-white/20">
              За что награжден (основание)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((x, index) => (
            <TableRow className="bg-inherit" key={index}>
              <TableCell className="border-b border-r border-white/20">
                {x.date}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.person}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.awardType}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.awardCategory}
              </TableCell>
              <TableCell className="border-b border-r border-white/20">
                {x.orderNumber}
              </TableCell>
              <TableCell className="border-b border-white/20">
                {x.reason}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
