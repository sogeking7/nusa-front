"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("../MapComponent").then((mod) => mod.MapComponent),
  {
    ssr: false,
  },
);

export default MapComponent;
