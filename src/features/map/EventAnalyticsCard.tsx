import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ClockIcon } from "lucide-react";

export const EventAnalyticsCard = () => {
  return (
    <Card className="group !rounded-xl border border-white/20 transition-colors duration-200 hover:border-primary-green md:!rounded-3xl">
      <CardHeader className="p-4 pb-3">
        <CardTitle className="flex flex-row justify-between gap-4">
          <div className="space-y-1 text-white">
            <h2 className="text-lg max-lg:text-xs">Аналитика событий</h2>
            <div className="h-[1px] w-10 bg-primary-purple transition-all duration-500 group-hover:w-3/4" />
          </div>
          <Button
            size={"sm"}
            className={cn("bg-white text-black", "hover:bg-white/90")}
          >
            Далее
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <div className="relative flex text-3xl">
          <p className="w-[55%] text-right text-primary-green">158.024</p>
          <p className="w-[25%] text-right text-[#D9D9D9]">1.450</p>
          <p className="w-[20%] text-right text-[#525252]">10</p>
        </div>
        <div className="relative flex">
          <div className="w- relative z-10 h-9 w-[55%] w-full rounded-full bg-primary-green">
            <div className="flex h-9 items-center gap-3 rounded-full pl-2">
              <div className="flex size-6 items-center justify-center rounded-full border border-[#525252] bg-[#868686]/20">
                <ClockIcon className="size-4" />
              </div>
              <span className="text-sm">Май с 1 - 31</span>
            </div>
          </div>
          <div className="relative z-[11] h-9 w-[25%] w-full rounded-full bg-white">
            <div className="relative right-3 flex h-9 items-center gap-3 rounded-full bg-white pl-2">
              <div className="flex size-6 items-center justify-center rounded-full border border-[#525252]/20 bg-[#8C8C8C]/20"></div>
              <span className="text-sm">Май с 1 - 31</span>
            </div>
          </div>
          <div className="relative z-[12] h-9 w-[20%] w-full rounded-full bg-[#252525]">
            <div className="relative right-3 flex h-9 items-center gap-3 rounded-full bg-[#252525] pl-2">
              <div className="border-[#white]/80 flex size-6 items-center justify-center rounded-full border bg-[#D9D9D9]/20"></div>
              <span className="text-sm text-white">Май</span>
            </div>
          </div>
        </div>
        <div className="relative flex text-sm text-white/40">
          <p className="w-[55%] text-left">События</p>
          <p className="w-[25%] text-left">Нарушения</p>
          <p className="w-[20%] text-left">Отключение/сбой</p>
        </div>
      </CardContent>
    </Card>
  );
};
