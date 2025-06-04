"use client";

import dynamic from "next/dynamic";

import { BalanceCard } from "@/features/map/BalanceCard";
import { EventAnalyticsCard } from "@/features/map/EventAnalyticsCard";

const MapComponent = dynamic(
  () => import("@/features/map/MapComponent").then((mod) => mod.MapComponent),
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <MapComponent />
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
