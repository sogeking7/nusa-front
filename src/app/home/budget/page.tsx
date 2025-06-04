"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BudgetCard } from "@/features/budget/BudgetCard";
import { BudgetLargeCard } from "@/features/budget/BudgetLargeCard";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ACCOUNTS from "@/features/budget/data/accounts.json";

export default function Page() {
  const [selectedCode, setSelectedCode] = useState<string | undefined>(
    ACCOUNTS[0].code,
  );

  const selectedItem = ACCOUNTS.find((opt) => opt.code === selectedCode);

  return (
    <>
      <h1 className="mb-2 text-white md:mb-6 md:text-3xl">Общий бюджет</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <h2 className="col-span-full">Активы</h2>
        <div className="col-span-6">
          <BudgetCard
            title="Долгосрочные"
            startText="Начало отчет периода"
            startBudget="780 000 ₸"
            endText="Конец отчет периода"
            endBudget="580 000 ₸"
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
        <div className="col-span-6">
          <BudgetCard
            title="Красткосрочные"
            startText="Начало отчет периода"
            startBudget="380 000 ₸"
            endText="Конец отчет периода"
            endBudget="480 000 ₸"
            startClassName="text-primary-purple"
            endClassName="text-primary-purple"
          />
        </div>
        <div className="col-span-6 grid gap-4">
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
        <div className="col-span-6 grid gap-4"></div>
        <div className="col-span-6 grid gap-4">
          <h2 className="col-span-full">Обязательтсво и капитал</h2>
          <BudgetLargeCard>
            <BudgetCard
              className="!border-none"
              title="краткосрочных обьязательств"
              startText="на конец отчетного периода"
              startBudget="26 987 456 951, 57 ₸"
              endText="на начало отчетного периода"
              endBudget="26 987 456 951, 57 ₸"
              startClassName="text-primary-green/60"
              endClassName="text-primary-orange/60"
            />
            <BudgetCard
              className="!border-none"
              title="долгосрочных обязательств"
              startText="на конец отчетного периода"
              startBudget="3 851 522 607, 64 ₸"
              endText="на начало отчетного периода"
              endBudget="3 749 159 951, 14 ₸"
              startClassName="text-primary-green/60"
              endClassName="text-primary-orange/60"
            />
            <BudgetCard
              className="!border-none"
              title="Всего капитала"
              startText="на конец отчетного периода"
              startBudget="457 852 909, 18 ₸"
              endText="на начало отчетного периода"
              endBudget="-52 654 910, 27 ₸"
              startClassName="text-primary-green/60"
              endClassName="text-primary-orange/60"
            />
            <BudgetCard
              className="!border-none"
              title="Баланс"
              startText="на конец отчетного периода"
              startBudget="457 852 909, 18 ₸"
              endText="на начало отчетного периода"
              endBudget="-52 654 910, 27 ₸"
              startClassName="text-primary-green/60"
              endClassName="text-primary-orange/60"
            />
          </BudgetLargeCard>
        </div>
      </div>
    </>
  );
}
