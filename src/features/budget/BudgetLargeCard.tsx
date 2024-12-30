import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const BudgetLargeCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<Card className="border border-white/20">
			<CardContent className="flex flex-col p-0 justify-between">
				{children}
			</CardContent>
		</Card>
	);
};
