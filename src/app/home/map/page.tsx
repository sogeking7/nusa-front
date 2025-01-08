import { BalanceCard } from "@/features/map/BalanceCard";
import MapComponent from "@/features/map/data/MapComponentDynamic";
import { EventAnalyticsCard } from "@/features/map/EventAnalyticsCard";

import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-full w-full max-md:flex-col max-md:gap-4 md:relative">
        <h1 className="text-white md:absolute md:left-0 md:top-0 md:z-10 md:mb-6 md:text-3xl">
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
