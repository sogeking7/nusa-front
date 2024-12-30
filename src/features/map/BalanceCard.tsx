import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronUpIcon } from "lucide-react"

export const BalanceCard = () => {
	return (
		<Card className="md:h-full group border !rounded-xl md:!rounded-3xl border-white/20 transition-colors duration-200 hover:border-primary-green">
			<CardHeader className="p-4 pb-3">
				<CardTitle className="flex flex-row gap-4 justify-between">
					<div className="space-y-1 text-white">
						<h2 className="max-lg:text-xs text-lg">Баланс</h2>
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
			<CardContent className="flex flex-col gap-2 justify-center">
				<div className="flex gap-4 justify-between">
					<h1>
						<span className="text-3xl text-[#D9D9D9]"><span className="text-[#898989]">₸</span>758,6</span> <span className="text-[#D9D9D9]/50">млрд</span>
					</h1>
					<div className="text-primary-green flex gap-2 items-center">
						<div className="size-4 bg-primary-green rounded-full flex items-center justify-center">
							<ChevronUpIcon className="size-3 text-black" />
						</div>
						<span className="text-sm">2.3%</span>
					</div>
				</div>
				<div className="text-sm text-white/40">
					Этот месяц (Май 2024)
				</div>
			</CardContent>
		</Card>
	)
}