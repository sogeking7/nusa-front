"use client";

import * as React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProviderTanstack } from "@/providers/tanstack";
import { ProviderAuth } from "@/contexts/AuthContext";
import { FilterProvider } from "@/contexts/FilterContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderTanstack>
      {process.env.DEV && <ReactQueryDevtools />}
      <ProviderAuth>
        <FilterProvider>{children}</FilterProvider>
      </ProviderAuth>
    </ProviderTanstack>
  );
};
