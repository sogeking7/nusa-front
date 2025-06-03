import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "lucide-react";

export const BalanceCard = () => {
  return (
    <Card className="group !rounded-xl border border-white/20 transition-colors duration-200 hover:border-primary-green md:h-full md:!rounded-3xl">
      <CardHeader className="p-4 pb-3">
        <CardTitle className="flex flex-row justify-between gap-4">
          <div className="space-y-1 text-white">
            <h2 className="text-lg max-lg:text-xs">Баланс</h2>
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
      <CardContent className="flex flex-col justify-center gap-2">
        <div className="flex justify-between gap-4">
          <h1>
            <span className="text-3xl text-[#D9D9D9]">
              <span className="text-[#898989]">₸</span>758,6
            </span>{" "}
            <span className="text-[#D9D9D9]/50">млрд</span>
          </h1>
          <div className="flex items-center gap-2 text-primary-green">
            <div className="flex size-4 items-center justify-center rounded-full bg-primary-green">
              <ChevronUpIcon className="size-3 text-black" />
            </div>
            <span className="text-sm">2.3%</span>
          </div>
        </div>
        <div className="text-sm text-white/40">Этот месяц (Май 2024)</div>
      </CardContent>
    </Card>
  );
};
