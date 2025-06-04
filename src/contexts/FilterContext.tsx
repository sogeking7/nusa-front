"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { InstitutionModel } from "@/lib/api-service";

type FilterContextType = {
  startDate?: Date;
  endDate?: Date;
  institution: InstitutionModel | null;
  setStartDate: (date?: Date) => void;
  setEndDate: (date?: Date) => void;
  setInstitution: (institution: InstitutionModel | null) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [institution, setInstitution] = useState<InstitutionModel | null>(null);

  return (
    <FilterContext.Provider
      value={{
        startDate,
        endDate,
        institution,
        setStartDate,
        setEndDate,
        setInstitution,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
