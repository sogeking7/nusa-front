"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SalaryCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  onClick?: () => void;
  className?: string;
}

export function SalaryCard({
  title,
  subtitle,
  value,
  onClick,
  className,
}: SalaryCardProps) {
  return (
    <Card
      className={cn(
        "relative cursor-pointer !rounded-xl border border-white/20",
        className,
      )}
      onClick={onClick}
    >
      <CardContent className="!p-4">
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          <ArrowUpRight />
        </Button>

        <div className="space-y-3 pr-12 text-white">
          <h2 className="font-medium">{title}</h2>
          <div className="h-[1px] w-10 bg-primary-purple" />
        </div>
        <div className="mt-3">
          <p className="text-white">{subtitle}</p>
          <p className="mt-1 font-light tracking-wide text-white/50">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
