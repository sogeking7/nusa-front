import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface SummaryCardProps {
  label: string;
  value: string | number;
  color?: "purple" | "orange" | "green" | string;
  className?: string;
}

export function SummaryCard({
  label,
  value,
  color = "purple",
  className,
}: SummaryCardProps) {
  const colorVariants = {
    purple: "text-primary-purple",
    orange: "text-primary-orange",
    green: "text-primary-green",
  };

  return (
    <Card
      className={cn(
        "group !rounded-xl border border-white/20 transition-colors duration-200 hover:border-primary-green",
        className,
      )}
    >
      <CardContent className="space-y-3 !p-4">
        <div>
          <h2
            className={cn(
              "!text-base font-medium",
              colorVariants[color as keyof typeof colorVariants] || color,
            )}
          >
            {label}
          </h2>
          <div className="mt-2 h-[1px] w-10 bg-primary-purple transition-all duration-500 group-hover:w-3/4" />
        </div>
        <p className="text-2xl font-light tracking-wider text-white/50">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>
      </CardContent>
    </Card>
  );
}
