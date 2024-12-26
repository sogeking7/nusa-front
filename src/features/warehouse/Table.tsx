import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { FinancialRecord } from "./types";

interface FinancialTableProps {
  data: FinancialRecord[];
}

export function FinancialTable({ data }: FinancialTableProps) {
  return (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded max-h-[600px] overflow-auto">
      <Table className="border border-white/20 bg-inherit">
        <TableHeader className="border border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead
              rowSpan={3}
              className="w-[300px] border-b border-r border-white/20"
            >
              Руководитель, подразделение
            </TableHead>
            <TableHead
              colSpan={2}
              rowSpan={2}
              className="border-b border-r border-white/20 text-center"
            >
              Остаток на 09.01.2024
            </TableHead>
            <TableHead
              colSpan={4}
              className="border-b border-r border-white/20 text-center"
            >
              Оборот 01.08.2024 - 31.08.2024
            </TableHead>
            <TableHead
              colSpan={2}
              rowSpan={2}
              className="border-b border-white/20 text-center"
            >
              Остаток на 09.01.2024
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead
              colSpan={2}
              className="border-b border-r border-white/20 text-center text-green-500"
            >
              Дебет
            </TableHead>
            <TableHead
              colSpan={2}
              className="border-b border-r border-white/20 text-center text-red-500"
            >
              Кредит
            </TableHead>
          </TableRow>
          <TableRow className="bg-inherit">
            <TableHead className="border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="text-center">Сумма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow className="bg-inherit" key={record.id}>
              <TableCell
                className={cn(
                  "border-r border-white/20",
                  record.isSubItem && "pl-8",
                )}
              >
                {record.name}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.balanceStart.quantity}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.balanceStart.sum.toLocaleString()}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.debit.quantity}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.debit.sum.toLocaleString()}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.credit.quantity}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.credit.sum.toLocaleString()}
              </TableCell>
              <TableCell className="border-r border-white/20 text-center">
                {record.balanceEnd.quantity}
              </TableCell>
              <TableCell className="text-center">
                {record.balanceEnd.sum.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
