"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generateScheduleData } from "@/lib/utils";

export interface CalendarDay {
  date: Date;
  isWorkDay: boolean;
}

export interface ScheduleData {
  shift: number;
  month: string;
  year: number;
  workDays: number;
  totalDays: number;
  days: CalendarDay[];
}

const DAYS_OF_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export function WorkSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const data: ScheduleData = generateScheduleData(currentDate);

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const firstDayOfWeek = data.days[0].date.getDay();
  const offsetDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  return (
    <Card className="h-fit w-full max-w-md rounded-lg border border-white/20 font-sans text-white">
      <CardContent className="px-5 py-[30px]">
        <div className="mb-2 flex justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">График работы</h2>
            <div className="flex items-center gap-4">
              <span className="shrink-0 text-lg font-bold">
                {data.shift} смена
              </span>
              <div className="flex shrink-0 items-center">
                <span className="mx-2 text-2xl">
                  {data.month} {data.year}
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 text-2xl">
            <h2 className="mb-1 font-bold">Итог/норма</h2>
            <div className="text-right">
              {data.workDays}/{data.totalDays}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPreviousMonth}
            className="text-white hover:text-gray-600"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNextMonth}
            className="text-white hover:text-gray-600"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {DAYS_OF_WEEK.map((day) => (
            <div key={day} className="py-2 text-center text-xl">
              {day}
            </div>
          ))}

          {Array(offsetDays)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="p-2"></div>
            ))}

          {data.days.map((day, index) => (
            <div
              key={index}
              className={`rounded-[10px] p-2 text-center text-black ${
                day.isWorkDay ? "bg-primary-green" : "bg-primary-green/40"
              } `}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
