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
  className,
}: SalaryCardProps) {
  return (
    <Card
      className={cn(
        "relative cursor-pointer rounded-lg border border-white/20",
        className,
      )}
    >
      <CardContent className="p-4 sm:p-5">
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4"
        >
          <ArrowUpRight />
        </Button>

        <div className="space-y-2 text-white">
          <h2 className="font-bold">{title}</h2>
          <div className="h-[1px] w-10 bg-primary-purple" />
          <p className="font-medium">{subtitle}</p>
        </div>

        <p className="mt-3 font-light tracking-wide text-white/50">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>
      </CardContent>
    </Card>
  );
}
