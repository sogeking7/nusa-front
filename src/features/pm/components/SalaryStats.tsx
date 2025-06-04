import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalaryRange } from "../model";

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
    <Card className="rounded-lg border border-white/20">
      <CardContent className="space-y-3 !p-4">
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-medium text-primary-purple">
            Средняя
          </span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.average)}
          </span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-medium text-primary-green">
            Высокая
          </span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.high)}
          </span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-medium text-primary-orange">
            Низкая
          </span>
          <span className="font-light tracking-wider text-white/50">
            {formatCurrency(salaryRange.low)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
