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
          <span className="text-primary-purple font-medium">Средняя</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.average)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-primary-green font-medium">Высокая</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.high)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-primary-orange font-medium">Низкая</span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.low)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
