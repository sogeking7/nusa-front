"use client";

import MaterialReport from "@/features/warehouse/MaterialReport/MaterialReport";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-5 lg:gap-10">
      <div className="flex items-start justify-between gap-3 max-lg:flex-col">
        <h1 className="text-white md:text-3xl">Склад</h1>
      </div>
      <MaterialReport />
    </div>
  );
}
