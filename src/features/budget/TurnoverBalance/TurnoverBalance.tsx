"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ACCOUNTS from "@/features/budget/TurnoverBalance/data/accounts.json";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BudgetCard } from "@/features/budget/BudgetCard";
import { useMemo, useState } from "react";
import { AssetsBudgetCard } from "@/features/budget/Assets/AssetsBudgetCard";
import { TurnoverBalanceCard } from "@/features/budget/TurnoverBalance/TurnoverBalanceCard";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { financeService } from "@/lib/api-service";
import { format } from "date-fns";
import { TurnoverBalanceDialog } from "@/features/budget/TurnoverBalance/TurnoverBalanceDialog";

interface ITurnover {
  debit: number | null;
  credit: number | null;
}

export default function TurnoverBalance() {
  const [selectedCode, setSelectedCode] = useState<string | undefined>(
    ACCOUNTS[0].code,
  );

  const [open, setOpen] = useState(false);

  const selectedItem = ACCOUNTS.find((opt) => opt.code === selectedCode);

  const { startDate, endDate, institution } = useFilter();

  const shouldFetch = !!(startDate && endDate && institution);

  const { data: turnoverBalance, isLoading } = useQuery({
    queryKey: [
      "turnover-balance",
      selectedItem,
      institution?.bin,
      startDate,
      endDate,
    ],
    queryFn: () => {
      if (!shouldFetch || !selectedItem) {
        throw new Error("Invalid query");
      }
      console.log(selectedItem.code.replace(".", ""));
      return financeService.getTurnoverBalance(
        selectedItem.code.replace(".", ""),
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
        format(endDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  const parsedData: {
    balanceStart: ITurnover;
    turnover: ITurnover;
    balanceEnd: ITurnover;
  } = useMemo(() => {
    let balanceStart: ITurnover = {
      debit: null,
      credit: null,
    };
    let turnover: ITurnover = {
      debit: null,
      credit: null,
    };
    let balanceEnd: ITurnover = {
      debit: null,
      credit: null,
    };
    if (!turnoverBalance) {
      return {
        balanceStart,
        turnover,
        balanceEnd,
      };
    }
    let modTurnoverB = turnoverBalance.map((x) => {
      return {
        ...x,
        balance_start_debit: x.balance_start_debit.replace(",", "."),
        balance_start_credit: x.balance_start_credit.replace(",", "."),
        turnover_debit: x.turnover_debit.replace(",", "."),
        turnover_credit: x.turnover_credit.replace(",", "."),
        balance_end_debit: x.balance_end_debit.replace(",", "."),
        balance_end_credit: x.balance_end_credit.replace(",", "."),
      };
    });

    balanceStart = {
      debit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.balance_start_debit) || 0),
        0,
      ),
      credit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.balance_start_credit) || 0),
        0,
      ),
    };

    turnover = {
      debit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.turnover_debit) || 0),
        0,
      ),
      credit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.turnover_credit) || 0),
        0,
      ),
    };

    balanceEnd = {
      debit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.balance_end_debit) || 0),
        0,
      ),
      credit: modTurnoverB.reduce(
        (acc, x) => acc + (parseFloat(x.balance_end_credit) || 0),
        0,
      ),
    };

    return {
      balanceStart,
      turnover,
      balanceEnd,
    };
  }, [turnoverBalance]);

  return (
    <>
      <div className="grid gap-4">
        <div className="col-span-full flex gap-4 max-lg:flex-col lg:items-center">
          <Select value={selectedCode} onValueChange={setSelectedCode}>
            <SelectTrigger className="w-[300px] rounded-xl">
              <SelectValue className="truncate" />
            </SelectTrigger>
            <SelectContent>
              {ACCOUNTS.map(({ code, name }) => (
                <SelectItem key={code} value={code}>
                  {code + " " + name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="relative flex w-full items-center gap-2">
            <p className="w-3/4">Обратно сальдовая ведомость по счету</p>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              <ArrowUpRight />
            </Button>
          </div>
        </div>
        <TurnoverBalanceCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          title="Сальдо на начало периода"
          startBudget={parsedData.balanceStart.debit}
          endBudget={parsedData.balanceStart.credit}
          startText="Дебет"
          endText="Кредит"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <TurnoverBalanceCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          title="Сальдо на начало периода"
          startBudget={parsedData.turnover.debit}
          endBudget={parsedData.turnover.credit}
          startText="Дебет"
          endText="Кредит"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <TurnoverBalanceCard
          isLoading={isLoading}
          shouldFetch={shouldFetch}
          title="Сальдо на окнец периода"
          startBudget={parsedData.balanceEnd.debit}
          endBudget={parsedData.balanceEnd.credit}
          startText="Дебет"
          endText="Кредит"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
      </div>
      {turnoverBalance && (
        <TurnoverBalanceDialog
          data={turnoverBalance}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
