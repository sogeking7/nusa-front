"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { warehouseService } from "@/lib/api-service";
import { format } from "date-fns";
import { formatCurrency } from "@/lib/utils";

export default function MaterialReport() {
  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: materialReports, isLoading } = useQuery({
    queryKey: ["materialReports", institution?.bin, startDate, endDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return warehouseService.getMaterialReport(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd")
      );
    },
    enabled: shouldFetch
  });

  if (isLoading || !shouldFetch) {
    return (
      <div className="flex items-center justify-center py-4 text-center text-sm text-zinc-400">
        {!shouldFetch && <> Выберите период и филиал</>}
        {isLoading && (
          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
        )}
      </div>
    );
  }

  if (!materialReports) {
    return (
      <div className="flex w-full items-center justify-center py-4 text-center text-sm text-zinc-400">
        Нет данных
      </div>
    );
  }

  return (
    <div className="h-[80vh] overflow-auto rounded-lg border border-white/20">
      <Table className="border-separate border-spacing-0 border-0">
        <TableHeader className="z-10 border-white/20 bg-[#1c1c1d]">
          <TableRow>
            <TableHead
              rowSpan={3}
              className="border-b border-r border-white/20"
            >
              Руководитель, подразделение
            </TableHead>
            <TableHead
              colSpan={2}
              rowSpan={2}
              className="border-b-2 border-r border-white/20 border-b-primary-purple text-center"
            >
              Остаток на {format(startDate, "yyyy-MM-dd")}
            </TableHead>
            <TableHead
              colSpan={4}
              className="border-b border-r border-white/20 text-center"
            >
              Оборот {format(startDate, "yyyy-MM-dd")} - {format(endDate, "yyyy-MM-dd")}
            </TableHead>
            <TableHead
              colSpan={2}
              rowSpan={2}
              className="border-b-2 border-white/20 border-b-primary-purple text-center"
            >
              Остаток на {format(startDate, "yyyy-MM-dd")}
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead
              colSpan={2}
              className="border-r border-white/20 text-center text-primary-green"
            >
              Дебет
            </TableHead>
            <TableHead
              colSpan={2}
              rowSpan={1}
              className="border-r border-white/20 text-center text-[#FE7070]"
            >
              Кредит
            </TableHead>
          </TableRow>
          <TableRow className="">
            <TableHead className="border-b border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-b border-r border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center">
              Сумма
            </TableHead>
            <TableHead className="border-b border-r border-white/20 text-center">
              Кол-во
            </TableHead>
            <TableHead className="border-b border-white/20 text-center">
              Сумма
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materialReports.map((materialReport, idx) => (
            <>
              <TableRow className="bg-inherit" key={idx}>
                <TableCell className="border-b border-r border-white/20 text-base font-medium">
                  {materialReport.responsible_person}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {materialReport.balance_end_qty}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {formatCurrency(materialReport.balance_start_sum)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {materialReport.turnover_debit_qty}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {formatCurrency(materialReport.turnover_debit_sum)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {materialReport.turnover_credit_qty}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {formatCurrency(materialReport.turnover_credit_sum)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center">
                  {materialReport.balance_end_qty}
                </TableCell>
                <TableCell className="border-b border-white/20 text-center">
                  {materialReport.balance_end_sum}
                </TableCell>
              </TableRow>
              {materialReport.departments.map((department, idx) => (
                <>
                  <TableRow className="bg-inherit" key={idx}>
                    <TableCell className="border-b border-r border-white/20 pl-8 font-medium">
                      {department.department_name}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {department.balance_end_qty}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {formatCurrency(department.balance_start_sum)}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {department.turnover_debit_qty}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {formatCurrency(department.turnover_debit_sum)}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {department.turnover_credit_qty}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {formatCurrency(department.turnover_credit_sum)}
                    </TableCell>
                    <TableCell className="border-b border-r border-white/20 text-center">
                      {department.balance_end_qty}
                    </TableCell>
                    <TableCell className="border-b border-white/20 text-center">
                      {department.balance_end_sum}
                    </TableCell>
                  </TableRow>
                  {department.row_number.map((item, idx) => (
                    <TableRow className="bg-inherit" key={idx}>
                      <TableCell className="border-b border-r border-white/20 p-0">
                        <TableHead className="w-16 border-r border-white/20 text-right !font-[300]">
                          {idx + 1}
                        </TableHead>
                        <TableHead className="!font-[300]">
                          {item.item_name}
                        </TableHead>
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {item.balance_end_qty}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {formatCurrency(item.balance_start_sum)}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {item.turnover_debit_qty}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {formatCurrency(item.turnover_debit_sum)}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {item.turnover_credit_qty}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {formatCurrency(item.turnover_credit_sum)}
                      </TableCell>
                      <TableCell className="border-b border-r border-white/20 text-center">
                        {item.balance_end_qty}
                      </TableCell>
                      <TableCell className="border-b border-white/20 text-center">
                        {item.balance_end_sum}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
