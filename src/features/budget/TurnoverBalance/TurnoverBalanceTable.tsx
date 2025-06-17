"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, formatCurrency } from "@/lib/utils";
import { TurnoverBalanceModel } from "@/lib/api-service/model/1c/turnover-balance-model";
import { useMemo } from "react";

interface StaffSalaryTableProps {
  data: Array<TurnoverBalanceModel>;
}

interface GroupedData {
  mol: string;
  nomenclatures: TurnoverBalanceModel[];
  totals: {
    balance_start_debit: number;
    balance_start_credit: number;
    turnover_debit: number;
    turnover_credit: number;
    balance_end_debit: number;
    balance_end_credit: number;
  };
}

export function TurnoverBalanceTable({ data }: StaffSalaryTableProps) {
  const groupedData = useMemo(() => {
    const groups: { [key: string]: GroupedData } = {};

    data.forEach((item) => {
      if (!groups[item.mol]) {
        groups[item.mol] = {
          mol: item.mol,
          nomenclatures: [],
          totals: {
            balance_start_debit: 0,
            balance_start_credit: 0,
            turnover_debit: 0,
            turnover_credit: 0,
            balance_end_debit: 0,
            balance_end_credit: 0,
          },
        };
      }

      groups[item.mol].nomenclatures.push(item);

      // Sum up the totals
      groups[item.mol].totals.balance_start_debit +=
        parseFloat(item.balance_start_debit) || 0;
      groups[item.mol].totals.balance_start_credit +=
        parseFloat(item.balance_start_credit) || 0;
      groups[item.mol].totals.turnover_debit +=
        parseFloat(item.turnover_debit) || 0;
      groups[item.mol].totals.turnover_credit +=
        parseFloat(item.turnover_credit) || 0;
      groups[item.mol].totals.balance_end_debit +=
        parseFloat(item.balance_end_debit) || 0;
      groups[item.mol].totals.balance_end_credit +=
        parseFloat(item.balance_end_credit) || 0;
    });

    return Object.values(groups);
  }, [data]);

  return (
    <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
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
              className="border-b-2 border-r border-white/20 border-b-primary-purple text-center"
            >
              Сальдо на начало периода
            </TableHead>
            <TableHead
              colSpan={2}
              className="border-b border-r border-white/20 text-center"
            >
              Обороты за период
            </TableHead>
            <TableHead
              colSpan={2}
              className="border-b-2 border-white/20 border-b-primary-purple text-center"
            >
              Сальдо на конец периода
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-b border-r border-white/20 text-center text-primary-green/60">
              Дебет
            </TableHead>
            <TableHead className="border-b border-r border-white/20 text-center text-primary-orange/60">
              Кредит
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center text-primary-green/60">
              Дебет
            </TableHead>
            <TableHead className="border-b border-r border-t border-white/20 text-center text-primary-orange/60">
              Кредит
            </TableHead>
            <TableHead className="border-b border-r border-white/20 text-center text-primary-green/60">
              Дебет
            </TableHead>
            <TableHead className="border-b border-white/20 text-center text-primary-orange/60">
              Кредит
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupedData.map((group, groupIdx) => (
            <>
              {/* Group Header Row with Totals */}
              <TableRow
                key={`group-${groupIdx}`}
                className="bg-[#2a2a2b] font-semibold"
              >
                <TableCell className="border-b border-r border-white/20 text-base font-bold">
                  {group.mol}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.balance_start_debit)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.balance_start_credit)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.turnover_debit)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.turnover_credit)}
                </TableCell>
                <TableCell className="border-b border-r border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.balance_end_debit)}
                </TableCell>
                <TableCell className="border-b border-white/20 text-center font-bold">
                  {formatCurrency(group.totals.balance_end_credit)}
                </TableCell>
              </TableRow>

              {/* Nomenclature Detail Rows */}
              {group.nomenclatures.map((item, itemIdx) => (
                <TableRow key={`${groupIdx}-${itemIdx}`} className="bg-inherit">
                  <TableCell className="border-b border-r border-white/20 pl-8 text-sm text-gray-300">
                    {item.nomenclature}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.balance_start_debit) || 0)}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.balance_start_credit) || 0)}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.turnover_debit) || 0)}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.turnover_credit) || 0)}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.balance_end_debit) || 0)}
                  </TableCell>
                  <TableCell className="border-b border-white/20 text-center text-sm">
                    {formatCurrency(parseFloat(item.balance_end_credit) || 0)}
                  </TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
