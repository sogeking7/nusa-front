"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellIcon, MoonIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { AppLeftSheet } from "./AppLeftSheet";
import { useRouter } from "next/navigation";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { InstitutionSelector } from "@/components/custom/InstitutionSelector";
import { useFilter } from "@/contexts/FilterContext";

export default function AppHeader() {
  const router = useRouter();
  const { startDate, endDate, setStartDate, setEndDate, institution } =
    useFilter();

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#1C1C1D] md:border-b-[1px] md:border-b-white/20">
      <Link href={"/home/map"} className="flex-shrink-0 px-4 max-md:hidden">
        <img alt="logo" src={"/rezerv-logo.svg"} className="size-11" />
      </Link>
      <Container className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4">
          <AppLeftSheet />
          <div className="flex w-full items-center gap-4">
            <div className="flex items-center">
              <span className="mr-3 text-white/40">Период:</span>
              <DatePickerWithRange
                startDate={startDate}
                endDate={endDate}
                onRangeChange={(start, end) => {
                  setStartDate(start);
                  setEndDate(end);
                }}
              />
            </div>

            <div className="ml-4 flex items-center">
              <span className="mr-3 text-white/40">РГП на ПХВ:</span>
              <InstitutionSelector />
            </div>

            <Button
              className="bg-lime-400 text-black hover:bg-lime-300"
              onClick={() => {
                console.log("Generating report with:", {
                  startDate: startDate || "Not selected",
                  endDate: endDate || "Not selected",
                  institution,
                });
              }}
            >
              Сформировать отчет
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4 max-md:hidden">
          <div className="flex items-center space-x-3">
            <Link href="#" className="text-sm text-white/40">
              Темный режим
            </Link>
            <Button
              size={"icon"}
              onClick={() => router.push("#")}
              variant={"outline"}
            >
              <MoonIcon />
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <BellIcon />
          </Button>
          <Link href="/home/me">
            <Avatar>
              <AvatarImage src="/berkut.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </Container>
    </header>
  );
}
