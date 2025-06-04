"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ru } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startDate?: Date;
  endDate?: Date;
  onRangeChange?: (start?: Date, end?: Date) => void;
}

export function DatePickerWithRange({
  className,
  startDate,
  endDate,
  onRangeChange,
  ...props
}: DatePickerWithRangeProps) {
  // Only use empty initial state if no props provided
  const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(
    undefined,
  );

  // Use external dates if provided, otherwise use internal state
  const date =
    startDate !== undefined ? { from: startDate, to: endDate } : internalDate;

  // Determine the default month to show based on current selection or current month
  const defaultMonth = date?.from || new Date();

  const handleSelect = (selectedRange: DateRange | undefined) => {
    if (onRangeChange) {
      if (selectedRange?.from && !selectedRange?.to) {
        onRangeChange(selectedRange?.from, selectedRange?.from);
        return;
      }
      onRangeChange(selectedRange?.from, selectedRange?.to);
    } else {
      setInternalDate(selectedRange);
    }
  };

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: ru })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: ru })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: ru })
              )
            ) : (
              <span>Выберите период</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={defaultMonth}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
