"use client";

import { BudgetLargeCard } from "@/features/budget/BudgetLargeCard";
import { BudgetCard } from "@/features/budget/BudgetCard";

export default function ObligationsCapital() {
  return (
    <div className="grid w-full gap-4">
      <h2 className="col-span-full">Обязательтсво и капитал</h2>
      <BudgetLargeCard>
        <BudgetCard
          className="!border-none"
          title="Краткосрочных обьязательств"
          startText="на конец отчетного периода"
          startBudget="26 987 456 951, 57 ₸"
          endText="на начало отчетного периода"
          endBudget="26 987 456 951, 57 ₸"
          startClassName="text-primary-green/60"
          endClassName="text-primary-orange/60"
        />
        <BudgetCard
          className="!border-none"
          title="Долгосрочных обязательств"
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
          startText="а конец отчетного периода"
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
  );
}
