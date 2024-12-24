import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapComponent } from "@/features/map/MapComponent";
import React from "react";

export default function Page() {
  return (
    <div className="relative flex h-full w-full items-start justify-end">
      <h1 className="absolute left-0 top-0 mb-2 text-white md:mb-6 md:text-3xl">
        Филиалы
      </h1>
      <Card className="absolute left-0 top-1/3 z-[1000] w-full max-w-xs -translate-y-1/2 !rounded-3xl border border-white/20 bg-[#1C1C1D]/[15%] backdrop-blur-sm">
        <CardContent className="p-6">
          <ul className="space-y-4">
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Центральный аппарат</p>
                  <p className="text-sm text-[#898989]">г. Астана</p>
                </div>
              </div>
              <p className="text-primary-purple">11</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Сигнал</p>
                  <p className="text-sm text-[#898989]">г. Уральск</p>
                </div>
              </div>
              <p className="text-primary-purple">47</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Комета</p>
                  <p className="text-sm text-[#898989]">г. Алматы</p>
                </div>
              </div>
              <p className="text-primary-purple">35</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Стрела</p>
                  <p className="text-sm text-[#898989]">г. Уштобе</p>
                </div>
              </div>
              <p className="text-primary-purple">35</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Автоматика</p>
                  <p className="text-sm text-[#898989]">г. Астана</p>
                </div>
              </div>
              <p className="text-primary-purple">29</p>
            </li>
          </ul>
        </CardContent>
      </Card>
      <div className="relative h-[520px] w-full scale-[0.8] max-md:h-[400px] md:scale-[0.85] lg:w-[80%] lg:scale-[0.9]">
        <MapComponent />
      </div>
    </div>
  );
}
