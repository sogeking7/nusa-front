import * as React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProviderTanstack } from "@/features/auth/providers/tanstack";
import { ProviderAuth } from "@/features/auth/providers/client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderTanstack>
      {process.env.DEV && <ReactQueryDevtools />}
      <ProviderAuth>{children}</ProviderAuth>
    </ProviderTanstack>
  );
};
