import { Circle } from "@/components/ui/circle";
import React from "react";

export default function Page() {
  return (
    <>
      <h1 className="mb-2 text-white md:mb-6 md:text-3xl">Филиалы</h1>
      <div className="h-full w-full">
        <div className="relative h-full w-full">
          <img src={"/map-kz.png"} alt="" className="ml-auto" />
          <Circle
            size="md"
            primaryText="Балхаш"
            secondaryText="г. Семей"
            className="absolute right-[530px] top-[125px] z-10"
          />
        </div>
      </div>
    </>
  );
}
