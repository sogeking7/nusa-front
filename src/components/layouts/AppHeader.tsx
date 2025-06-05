"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { AppLeftSheet } from "./AppLeftSheet";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { InstitutionSelector } from "@/components/custom/InstitutionSelector";
import { useFilter } from "@/contexts/FilterContext";
import { useState } from "react";
import { InstitutionModel } from "@/lib/api-service";

export default function AppHeader() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setInstitution,
    institution,
  } = useFilter();

  const [_startDate, _setStartDate] = useState<Date | undefined>(startDate);
  const [_endDate, _setEndDate] = useState<Date | undefined>(endDate);
  const [_institution, _setInstitution] = useState<InstitutionModel | null>(
    institution,
  );

  const isValid = !!(_startDate && _endDate && _institution);

  function handleClickGenerateReport() {
    if (!isValid) return;
    setStartDate(_startDate);
    setEndDate(_endDate);
    setInstitution(_institution);
  }

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
                startDate={_startDate}
                endDate={_endDate}
                onRangeChange={(start, end) => {
                  _setStartDate(start);
                  _setEndDate(end);
                }}
              />
            </div>

            <div className="ml-4 flex items-center">
              <span className="mr-3 text-white/40">РГП на ПХВ:</span>
              <InstitutionSelector
                institution={_institution}
                setInstitution={_setInstitution}
              />
            </div>

            <Button
              type="button"
              disabled={!isValid}
              className="bg-lime-400 text-black hover:bg-lime-300"
              onClick={handleClickGenerateReport}
            >
              Сформировать отчет
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4 max-md:hidden">
          <Link href="/home/me">
            <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
              <User className="size-5" />
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
}
