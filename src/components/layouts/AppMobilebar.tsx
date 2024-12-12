import React from "react";
import { Button } from "../ui/button";
import {
  CodepenIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";

export const AppMobilebar = (props: {}) => {
  return (
    <nav className="flex gap-6 flex-row border-t-[1px] border-t-white/20 px-4 py-3 sm:px-6 h-full justify-around">
      <Button size={"icon"} className="w-12 h-12" variant={"outline"}>
        <LayoutGridIcon />
      </Button>
      <Button size={"icon"} className="w-12 h-12" variant={"outline"}>
        <UsersIcon />
      </Button>
      <Button size={"icon"} className="w-12 h-12" variant={"outline"}>
        <CodepenIcon />
      </Button>
      <Button size={"icon"} className="w-12 h-12" variant={"outline"}>
        <PieChartIcon />
      </Button>
    </nav>
  );
};
