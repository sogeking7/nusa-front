import React from "react";
import { Button } from "../ui/button";
import {
  CodepenIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";

export const AppSidebar = (props: {}) => {
  return (
    <nav className="flex gap-6 flex-col p-6 lg:p-8 h-full justify-center">
      <Button size={"icon"} className="w-14 h-14" variant={"outline"}>
        <LayoutGridIcon />
      </Button>
      <Button size={"icon"} className="w-14 h-14" variant={"outline"}>
        <UsersIcon />
      </Button>
      <Button size={"icon"} className="w-14 h-14" variant={"outline"}>
        <CodepenIcon />
      </Button>
      <Button size={"icon"} className="w-14 h-14" variant={"outline"}>
        <PieChartIcon />
      </Button>
    </nav>
  );
};
