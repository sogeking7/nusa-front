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
import { useState } from "react";

export default function TurnoverBalance() {
  const [selectedCode, setSelectedCode] = useState<string | undefined>(
    ACCOUNTS[0].code,
  );

  const selectedItem = ACCOUNTS.find((opt) => opt.code === selectedCode);

  return (
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
        <div className="flex items-center gap-2">
          <p>Обратно сальдовая ведомость по счету</p>

          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowUpRight />
          </Button>
        </div>
      </div>
      <BudgetCard
        title="Сальдо на начало периода"
        startText="Дебет"
        startBudget="26 987 456 951, 57 ₸"
        endText="Кредит"
        endBudget="26 987 456 951, 57 ₸"
        startClassName="text-primary-green/60"
        endClassName="text-primary-orange/60"
      />
      <BudgetCard
        title="Обороты за период"
        startText="Дебет"
        startBudget="3 851 522 607, 64 ₸"
        endText="Кредит"
        endBudget="3 749 159 951, 14 ₸"
        startClassName="text-primary-green/60"
        endClassName="text-primary-orange/60"
      />
      <BudgetCard
        title="Сальдо на окнец периода"
        startText="Дебет"
        startBudget="457 852 909, 18 ₸"
        endText="Кредит"
        endBudget="-52 654 910, 27 ₸"
        startClassName="text-primary-green/60"
        endClassName="text-primary-orange/60"
      />
    </div>
  );
}
