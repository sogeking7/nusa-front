import { MapComponent } from "@/features/map/MapComponent";

import React from "react";

export default function Page() {
  return (
    <div className="md:relative h-full w-full flex max-md:gap-4 max-md:flex-col">
      <h1 className="md:absolute md:z-[1000] md:left-0 md:top-0 text-white md:mb-6 md:text-3xl">
        Филиалы
      </h1>

      <MapComponent />
    </div>
  );
}
