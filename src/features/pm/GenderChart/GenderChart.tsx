"use client";

import { PolarRadiusAxis, RadialBar, RadialBarChart, Label } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [{ male: 50, female: 47 }];

const chartConfig = {
  male: {
    label: "Мужчины:",
    color: "#67BAF6",
  },
  female: {
    label: "Женщины:",
    color: "#F66E70",
  },
} satisfies ChartConfig;

export default function GenderChart() {
  const totalCount = chartData[0].male + chartData[0].female;

  return (
    <div className="space-y-4">
      <h2 className="font-medium text-white">Состав по полу</h2>
      <Card className={cn("!rounded-xl border border-white/20")}>
        <CardContent className="flex flex-wrap items-center justify-center gap-6 !p-4">
          <ChartContainer
            config={chartConfig}
            className="relative aspect-square w-full max-w-[170px] flex-shrink-0 !p-0"
          >
            <RadialBarChart
              data={chartData}
              endAngle={360}
              startAngle={0}
              innerRadius={70}
              outerRadius={100}
            >
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-4xl font-bold"
                          >
                            {totalCount}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <RadialBar
                dataKey="male"
                stackId="a"
                cornerRadius={10}
                fill={chartConfig.male.color}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="female"
                fill={chartConfig.female.color}
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
          <div className={"text-sm"}>
            <p className={"flex justify-between gap-6"}>
              <span className={"text-white"}>{chartConfig.male.label}</span>
              <span style={{ color: chartConfig.male.color }}>
                {chartData[0].male}
              </span>
            </p>
            <p className={"flex justify-between gap-6"}>
              <span className={"text-white"}>{chartConfig.female.label}</span>
              <span style={{ color: chartConfig.female.color }}>
                {chartData[0].female}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
