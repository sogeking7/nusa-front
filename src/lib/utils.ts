import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DAYS_IN_WEEK = 7;
const MONDAY = 1;
const FRIDAY = 5;

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

export function generateScheduleData(date: Date = new Date()): ScheduleData {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: CalendarDay[] = [];
  let workDays = 0;

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const currentDate = new Date(year, month, d);
    const dayOfWeek = currentDate.getDay();
    const isWorkDay = dayOfWeek >= MONDAY && dayOfWeek <= FRIDAY;

    if (isWorkDay) workDays++;

    days.push({
      date: currentDate,
      isWorkDay,
    });
  }

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return {
    shift: 4,
    month: monthNames[month],
    year,
    workDays,
    totalDays: lastDay.getDate(),
    days,
  };
}

export const formatCurrency = (amount: number) => {
  return (
    new Intl.NumberFormat("ru-RU", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount) + " ₸"
  );
}