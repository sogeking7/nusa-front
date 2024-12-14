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
}

export function EmployeeStatsCard({
  title,
  subtitle,
  stats,
  className,
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
    <Card className={cn("rounded-lg border border-white/20", className)}>
      <CardHeader className="p-5 pb-0">
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
        <p className="mt-1 text-right text-sm text-zinc-400">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-5">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span
              className={cn("text-base font-medium", getColorClass(stat.color))}
            >
              {stat.label}
            </span>
            <span className="text-zinc-400">
              {stat.startValue} / {stat.endValue}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
