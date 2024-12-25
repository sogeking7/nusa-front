import { MapComponent } from "@/features/map/MapComponent";

import React from "react";

export default function Page() {
  return (
    <div className="relative flex h-full w-full items-start justify-end">
      <h1 className="absolute z-[1000] left-0 top-0 mb-2 text-white md:mb-6 md:text-3xl">
        Филиалы
      </h1>
      
      <MapComponent />
    </div>
  );
}
