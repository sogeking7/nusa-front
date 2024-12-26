import { mockData } from "@/features/warehouse/mockData";
import { StatsCard } from "@/features/warehouse/StatsCard";
import { FinancialTable } from "@/features/warehouse/Table";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-3 lg:gap-10">
      <div className="flex items-start justify-between gap-3 max-lg:flex-col">
        <h1 className="text-white md:text-3xl">Склад</h1>
        <div className="grid gap-3 max-lg:w-full md:grid-cols-3 lg:gap-10">
          <StatsCard title="Общее количество" value="150" change={5.45} />
          <StatsCard title="Общая сумма" value="640" change={-0.45} />
          <StatsCard title="Транспорт" value="640" change={-0.45} />
        </div>
      </div>
      <FinancialTable data={mockData} />
    </div>
  );
}
