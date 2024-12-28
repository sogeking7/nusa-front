import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon = "",
  className,
}: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <div className={cn("flex items-center gap-4 rounded-lg", className)}>
      <div className="size-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100/10">
        <div className="size-full" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-white">{title}</h3>
        <div className="flex items-end gap-6">
          <span className="text-3xl text-white">{value}</span>
          <div
            className={cn(
              "flex items-center gap-0.5 text-sm",
              isPositive ? "text-green-500" : "text-[#FE7070]",
            )}
          >
            <span className="font-medium">
              {isPositive ? "+" : ""}
              {change.toFixed(2)}%
            </span>
            {isPositive ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowDownRight className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
