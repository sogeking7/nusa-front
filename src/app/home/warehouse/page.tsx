import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockData } from "@/features/warehouse/mockData";
import { StatsCard } from "@/features/warehouse/StatsCard";
import { FinancialTable } from "@/features/warehouse/Table";
import { AlignRight, SearchIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-5 lg:gap-10">
      <div className="flex items-start justify-between gap-3 max-lg:flex-col">
        <h1 className="text-white md:text-3xl">Склад</h1>
        <div className="grid gap-3 max-lg:w-full md:grid-cols-3 lg:gap-10">
          <StatsCard title="Общее количество" value="150" change={5.45} />
          <StatsCard title="Общая сумма" value="640" change={-0.45} />
          <StatsCard title="Транспорт" value="640" change={-0.45} />
        </div>
      </div>
      <div className="flex w-full items-center gap-3">
        <h2 className="lg:shrink-0">
          Материальный отчет по товароматериальным счетам
        </h2>
        <Input
          leftIcon={<SearchIcon size={20} className="text-white/40" />}
          type="text"
          placeholder="Поиск по имени сотрудника..."
          className="w-full"
        />
      </div>
      <FinancialTable data={mockData} />
    </div>
  );
}
