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
    <Card className={cn("rounded-lg border border-white/20", className)}>
      <CardContent className="space-y-6 p-4 sm:p-5">
        <div>
          <h2
            className={cn(
              "mb-2 font-bold",
              colorVariants[color as keyof typeof colorVariants] || color,
            )}
          >
            {label}
          </h2>
          <div className="mt-3 h-[1px] w-10 bg-primary-purple" />
        </div>
        <p className="text-3xl font-light tracking-wider text-white/50">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>
      </CardContent>
    </Card>
  );
}
