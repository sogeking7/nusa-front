import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StaffSalaryModel } from "@/lib/api-service";

interface StaffSalaryTableProps {
  data: StaffSalaryModel[];
}

export function StaffSalaryTable({ data }: StaffSalaryTableProps) {
  return (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded max-h-[400px] overflow-auto text-white">
      <Table className="border border-white/20 bg-inherit">
        <TableHeader className="border border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead className="border-r border-white/20">
              Должность
            </TableHead>
            <TableHead className="border-r border-white/20">
              Подразделение
            </TableHead>
            <TableHead className="border-r border-white/20">
              Тип начисления
            </TableHead>
            <TableHead className="border-r border-white/20">
              Кол-во штатных единиц
            </TableHead>
            <TableHead>Оклад (₸)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((salary, index) => (
            <TableRow className="bg-inherit" key={index}>
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
              <TableCell className="border-b border-white/20 text-right">
                {salary.salary.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
