import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ClockIcon } from "lucide-react"

export const EventAnalyticsCard = () => {
	return (
		<Card className="group border !rounded-xl md:!rounded-3xl border-white/20 transition-colors duration-200 hover:border-primary-green">
			<CardHeader className="p-4 pb-3">
				<CardTitle className="flex flex-row gap-4 justify-between">
					<div className="space-y-1 text-white">
						<h2 className="max-lg:text-xs text-lg">Аналитика событий</h2>
						<div className="h-[1px] w-10 bg-primary-purple transition-all duration-500 group-hover:w-3/4" />
					</div>
					<Button size={"sm"} className={cn(
						"bg-white text-black",
						'hover:bg-white/90'
					)}>
						Далее
					</Button>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col justify-between gap-2">
				<div className="flex relative text-3xl">
					<p className="w-[55%] text-right text-primary-green">158.024</p>
					<p className="w-[25%] text-right text-[#D9D9D9]">1.450</p>
					<p className="w-[20%] text-right text-[#525252]">10</p>
				</div>
				<div className="flex relative">
					<div className="w-[55%] h-9 relative w- z-10 bg-primary-green rounded-full w-full">
						<div className="h-9 rounded-full flex items-center pl-2 gap-3">
							<div className="rounded-full bg-[#868686]/20 border-[#525252] border size-6 flex items-center justify-center">
								<ClockIcon className="size-4" />
							</div>
							<span className="text-sm">Май с  1 - 31</span>
						</div>
					</div>
					<div className="w-[25%] h-9 relative z-[11] bg-white rounded-full w-full">
						<div className="h-9 rounded-full right-3 relative flex items-center pl-2 gap-3 bg-white">
							<div className="rounded-full bg-[#8C8C8C]/20 border-[#525252]/20 border size-6 flex items-center justify-center">
							</div>
							<span className="text-sm">Май с  1 - 31</span>
						</div>

					</div>
					<div className="w-[20%] h-9 relative z-[12] bg-[#252525] rounded-full w-full">
						<div className="h-9 rounded-full right-3 relative flex items-center pl-2 gap-3 bg-[#252525]">
							<div className="rounded-full bg-[#D9D9D9]/20 border-[#white]/80 border size-6 flex items-center justify-center">
							</div>
							<span className="text-sm text-white">Май</span>
						</div>
					</div>
				</div>
				<div className="flex relative text-sm text-white/40">
					<p className="w-[55%] text-left">События</p>
					<p className="w-[25%] text-left">Нарушения</p>
					<p className="w-[20%] text-left">Отключение/сбой</p>
				</div>
			</CardContent>
		</Card>
	)
}