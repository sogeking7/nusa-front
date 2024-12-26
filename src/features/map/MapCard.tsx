import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface MapCard {
  locations: {
    name: string;
    city: string;
    count: number;
    coordinates: number[];
  }[];
}

export const MapCard: React.FC<MapCard> = ({ locations }) => (
  <Card className="w-full rounded-xl border border-white/20 bg-[#1C1C1D]/[15%] backdrop-blur-sm md:absolute md:left-0 md:top-1/2 md:z-20 md:max-w-xs md:-translate-y-1/2 md:!rounded-3xl">
    <ScrollArea className="h-[170px] md:h-[326px]">
      <CardContent className="p-4 md:p-6">
        <ul className="space-y-4">
          {locations.map(({ name, city, count }, index) => (
            <li key={index} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-sm text-white md:text-base">{name}</p>
                  <p className="text-xs text-[#898989] md:text-sm">{city}</p>
                </div>
              </div>
              <p className="text-sm text-primary-purple md:text-base">
                {count}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  </Card>
);
