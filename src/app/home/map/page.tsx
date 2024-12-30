import { BalanceCard } from "@/features/map/BalanceCard";
import { EventAnalyticsCard } from "@/features/map/EventAnalyticsCard";
import { MapComponent } from "@/features/map/MapComponent";

import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="md:relative h-full w-full flex max-md:gap-4 max-md:flex-col">
        <h1 className="md:absolute md:z-10 md:left-0 md:top-0 text-white md:mb-6 md:text-3xl">
          Филиалы
        </h1>
        <MapComponent />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <BalanceCard />
        </div>
        <div className="col-span-8">
          <EventAnalyticsCard />
        </div>
      </div>
    </div>
  );
}
