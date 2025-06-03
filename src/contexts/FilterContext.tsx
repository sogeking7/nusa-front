"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  branch: string;
  setStartDate: (date: Date | undefined) => void;
  setEndDate: (date: Date | undefined) => void;
  setBranch: (branch: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [branch, setBranch] = useState('РГП на ПХВ "Резерва МЧС РК; Филиал...');

  return (
    <FilterContext.Provider
      value={{
        startDate,
        endDate,
        branch,
        setStartDate,
        setEndDate,
        setBranch,
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
