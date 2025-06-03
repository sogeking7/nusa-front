import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StaffMovement } from "../api/staff.service.types";

interface StaffMovementsTableProps {
  data: StaffMovement[];
}

export function StaffMovementsTable({ data }: StaffMovementsTableProps) {
  return (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded max-h-[400px] overflow-auto text-white">
      <Table className="border border-white/20 bg-inherit">
        <TableHeader className="border border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-r border-white/20">Дата</TableHead>
            <TableHead className="border-r border-white/20">
              Должность
            </TableHead>
            <TableHead className="border-r border-white/20">
              Подразделение
            </TableHead>
            <TableHead className="border-r border-white/20">
              Учреждение
            </TableHead>
            <TableHead className="border-r border-white/20">Событие</TableHead>
            <TableHead>Документ</TableHead>
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
