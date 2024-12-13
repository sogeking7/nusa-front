import { DonutChart } from "@/components/ui/donut-chart";
import ListContainer from "@/features/pm/components/ListContainer";
import { SalaryStats } from "@/features/pm/components/SalaryStats";

const chartData = [
  { label: "Мужчины", value: 57, color: "#60A5FA" }, // Men (blue)
  { label: "Женщины", value: 40, color: "#F472B6" }, // Women (pink)
];

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
  employeePeriodStats: {
    accepted: 15,
    fired: 10,
    vacant: 10,
    contractors: 10,
    civilContracts: 10,
    ratio: "15 / 10",
  },
};

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_auto_1fr]">
      <ListContainer />
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
      <DonutChart />

      <div>
        <SalaryStats salaryRange={mockData.salaryRange} />
      </div>
    </div>
  );
}
