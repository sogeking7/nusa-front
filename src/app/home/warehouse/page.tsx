import { mockData } from "@/features/warehouse/mockData";
import { FinancialTable } from "@/features/warehouse/Table";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-5 lg:gap-10">
      <div className="flex items-start justify-between gap-3 max-lg:flex-col">
        <h1 className="text-white md:text-3xl">Склад</h1>
      </div>
      <FinancialTable data={mockData} />
    </div>
  );
}
