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
    <nav className="flex h-full flex-row justify-around gap-6 border-t-[1px] border-t-white/20 px-4 py-3 sm:px-6">
      <Button size={"icon"} className="h-12 w-12" variant={"outline"}>
        <LayoutGridIcon />
      </Button>
      <Button size={"icon"} className="h-12 w-12" variant={"outline"}>
        <UsersIcon />
      </Button>
      <Button size={"icon"} className="h-12 w-12" variant={"outline"}>
        <CodepenIcon />
      </Button>
      <Button size={"icon"} className="h-12 w-12" variant={"outline"}>
        <PieChartIcon />
      </Button>
    </nav>
  );
};
