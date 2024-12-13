import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalaryRange } from "../types";

interface SalaryStatsProps {
  salaryRange: SalaryRange;
}

export function SalaryStats({ salaryRange }: SalaryStatsProps) {
  const formatCurrency = (amount: number) => {
    return (
      new Intl.NumberFormat("ru-RU", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount) + " ₸"
    );
  };

  return (
    <Card className="border border-white/20">
      <CardContent className="space-y-5 sm:p-5">
        <div className="flex flex-col items-start">
          <span className="font-medium text-[#B287FD]">Средняя</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.average)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-medium text-[#B3F040]">Высокая</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.high)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-medium text-[#DE7921]">Низкая</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.low)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
