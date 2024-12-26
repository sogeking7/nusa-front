import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface MapCard {
	locations: {
		name: string;
		city: string;
		count: number;
		coordinates: number[];
	}[]
}

export const MapCard: React.FC<MapCard> = ({ locations }) => (
	<Card className="md:absolute md:left-0 md:top-1/2 md:z-20 w-full md:max-w-xs md:-translate-y-1/2 rounded-xl md:!rounded-3xl border border-white/20 bg-[#1C1C1D]/[15%] backdrop-blur-sm">
		<ScrollArea className="h-[170px] md:h-[326px]"> {/* //Adjust the height as needed */}
			<CardContent className="p-4 md:p-6">
				<ul className="space-y-4">
					{locations.map(({ name, city, count }, index) => (
						<li key={index} className="flex items-center justify-between gap-3">
							<div className="flex items-center gap-3">
								<div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
								<div>
									<p className="text-sm md:text-base text-white">{name}</p>
									<p className="text-xs md:text-sm text-[#898989]">{city}</p>
								</div>
							</div>
							<p className="md:text-base text-sm text-primary-purple">{count}</p>
						</li>
					))}
				</ul>
			</CardContent>
			<ScrollBar orientation="vertical" />
		</ScrollArea>
	</Card>
);
