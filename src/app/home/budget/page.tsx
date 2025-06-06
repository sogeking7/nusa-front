"use client";

import Assets from "@/features/budget/Assets/Assets";
import TurnoverBalance from "@/features/budget/TurnoverBalance/TurnoverBalance";
import ObligationsCapital from "@/features/budget/ObligationsCapital/ObligationsCapital";

export default function Page() {
  return (
    <>
      <h1 className="mb-2 text-white md:mb-6 md:text-3xl">Общий бюджет</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-full">
          <Assets />
        </div>
        <div className="col-span-6">
          <TurnoverBalance />
        </div>
        <div className="col-span-6">
          <ObligationsCapital />
        </div>
      </div>
    </>
  );
}
