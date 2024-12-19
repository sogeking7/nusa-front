import { DonutChart } from "@/components/ui/donut-chart";
import { EmployeeStatsCard } from "@/features/pm/components/EmployeeStats";
import ListContainer from "@/features/pm/components/ListContainer";
import { SalaryCard } from "@/features/pm/components/SalaryCard";
import { SalaryStats } from "@/features/pm/components/SalaryStats";
import { SummaryCard } from "@/features/pm/components/SummaryCard";

const mockData = {
  genderStats: {
    total: 97,
    men: 57,
    women: 40,
  },
  salaryRange: {
    average: 180000.0,
    high: 300000.0,
    low: 130000.0,
  },
  salarySummary: {
    accrued: 971096193.46,
    withheld: 43585304.5,
    transferred: 1789111191.02,
  },
};

const employeeStats = [
  { label: "Принято", startValue: 15, endValue: 10, color: "green" as const },
  { label: "Выбыло", startValue: 15, endValue: 10, color: "orange" as const },
  { label: "Вакансии", startValue: 15, endValue: 10 },
  { label: "Работники по совместительству", startValue: 15, endValue: 10 },
  {
    label: "Гражданско-правововые договора",
    startValue: 15,
    endValue: 10,
  },
];

export default function HomePage() {
  return (
    <>
      <h1 className="mb-2 text-white md:mb-6 md:text-3xl">
        Панель управления кадрами
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-6">
          <ListContainer />
        </div>

        {/* <div className="flex max-h-56 w-full max-w-[422px] items-center justify-between space-x-8 rounded-lg border border-white/20 p-5 pl-9">
        <div className="flex flex-col space-y-6">
        {chartData.map((data, index) => {
          return (
            <div key={index} className="flex items-center">
            <p className="min-w-36 font-medium">{data.label}:</p>
            <span className="ml-2 text-sm" style={{ color: data.color }}>
            {data.value}
            </span>
            </div>
            );
            })}
            </div>
            </div> */}
        <div className="col-span-3 space-y-4">
          <h2 className="font-medium text-white">Состав по полу</h2>
          {/* <DonutChart /> */}
          <SalaryCard
            title="Заработные платы по должностям"
            subtitle="Главный специалист"
            value="258 000, 00 ₸"
          />
          <EmployeeStatsCard
            title="Работники за отчетный период"
            subtitle="В начале года / за отчетный квартал"
            stats={employeeStats}
          />
        </div>
        <div className="col-span-3 space-y-4">
          <h2 className="font-medium text-white">Заработные платы</h2>
          <SalaryStats salaryRange={mockData.salaryRange} />
          <div className="space-y-4">
            <h2 className="font-medium text-white">Свод по заработной плате</h2>
            <SummaryCard
              label="Начислено"
              value={mockData.salarySummary.accrued}
              color="purple"
            />
            <SummaryCard
              label="Удержано"
              value={mockData.salarySummary.withheld}
              color="orange"
            />
            <SummaryCard
              label="Перечисление"
              value={mockData.salarySummary.transferred}
              color="green"
            />
          </div>
        </div>
      </div>
    </>
  );
}
