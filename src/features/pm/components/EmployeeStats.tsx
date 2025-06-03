import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  startValue: string | number;
  endValue: string | number;
  color?: "default" | "green" | "orange";
}

interface EmployeeStatsCardProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
  className?: string;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export function EmployeeStatsCard({
  title,
  subtitle,
  stats,
  className,
  isLoading = false,
  isEmpty = false,
}: EmployeeStatsCardProps) {
  const getColorClass = (color?: StatItem["color"]) => {
    switch (color) {
      case "green":
        return "text-primary-green";
      case "orange":
        return "text-primary-orange";
      default:
        return "text-white";
    }
  };

  return (
    <Card className={cn("!rounded-xl border border-white/20", className)}>
      <CardHeader className="space-y-3 !p-4">
        <CardTitle className="!text-base font-medium text-white">
          {title}
        </CardTitle>
        <div className="h-[1px] w-10 bg-primary-purple" />
        <p className="mt-1 text-center text-sm text-zinc-400">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4 !p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
          </div>
        ) : isEmpty ? (
          <div className="py-4 text-center text-sm text-zinc-400">
            Нет данных для отображения
          </div>
        ) : (
          stats.map((stat, index) => (
            <div key={index} className="flex justify-between gap-3">
              <span className={cn("text-sm", getColorClass(stat.color))}>
                {stat.label}
              </span>
              <span className="flex-shrink-0 text-sm text-zinc-400">
                {stat.startValue} / {stat.endValue}
              </span>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
